<template>
  <div>
    <Titel />
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    test(id: String) {
      console.log(id)
    }
  },
}
</script>

<style lang="scss">
.html,
body {
  margin: 0;
  padding: 0;
}
</style>