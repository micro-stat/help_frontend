<template>
  <div class="c-page" :class="{ 'c-page--flex' : isFlex }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isFlex: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-page {
  padding: 30px;
  background-color: $color-2
}

.c-page--flex {
  display: flex;
}
</style>
