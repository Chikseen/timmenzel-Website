<template>
  <titel :waveConfig="waveConfig" :waves="waves" :waveColors="waveColors" @changeTheme="changeTheme"
    @changeBackground="changeBackground" />
  <content :color="waveColors[waveColors.length - 1]" />
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
        baseColor: "",
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
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Raleway";
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>