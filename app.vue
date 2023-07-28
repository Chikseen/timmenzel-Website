<template>
  <titel :waveConfig="waveConfig" :waves="waves" :waveColors="waveColors" @changeTheme="changeTheme"
    @changeBackground="changeBackground" :style="`background-color: ${waveConfig?.baseColor};`" />
  <content :style="`background-color: ${waveColors[waveColors.length - 1]};`" />
</template>

<script lang="ts">
export default {
  data() {
    return {
      waves: [[]],
      waveColors: [],
      waveConfig: {
        amplitute: 5,
        numberOfWaves: 4,
        baseColor: "000000",
      }
    }
  },
  methods: {
    changeBackground() {
      this.setBaseColor()
      this.calcWaves()
    },
    setBaseColor() {
      this.waveConfig.baseColor = new Color().setThemeBaseColor();
    },
    changeTheme() {
      Theme.mode == 'dark' ? Theme.mode = 'light' : Theme.mode = 'dark'
      this.changeBackground()
      localStorage.setItem("theme", Theme.mode)
    },
    calcWaves() {
      let localWaves: any = [[]]

      for (let i: number = 0; i < this.waveConfig.numberOfWaves; i++) {

        let points: Array<number> = []
        for (let j: number = 0; j < 11; j++) {
          const value: number = (Math.random() * this.waveConfig.amplitute) + (100 / this.waveConfig.numberOfWaves * (i + 0.5))
          points.push(value)
        }
        localWaves.push(points);
      }
      this.setWaveColors()
      this.waves = JSON.parse(JSON.stringify(localWaves))
    },
    setWaveColors() {
      let waveColors: any = []
      for (let i: number = 0; i < this.waveConfig.numberOfWaves + 1; i++) {
        if (Theme.mode == "dark")
          waveColors.push(new Color().brightness(this.waveConfig?.baseColor, ((i + 1) * 15) * -1));
        else
          waveColors.push(new Color().brightness(this.waveConfig?.baseColor, (i! + 1) * 20));
      }
      this.waveColors = waveColors
    },
  },
  created() {
    this.setBaseColor()
    this.calcWaves()
  },
  mounted() {
    this.setBaseColor()
    this.calcWaves()
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Raleway";
  font-display: swap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

.icon {
  &_base {
    width: fit-content;
    height: 50px;
    width: 75px;

    &_color {
      background-color: #7e7e7e;
    }
  }
}

.background-color-transition {
  transition: background-color 0.5s ease-out
}

::-webkit-scrollbar {
  display: none;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}

img {
  object-fit: contain !important;
  border-radius: 10px !important;
}
</style>