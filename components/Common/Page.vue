<template>
  <div class="c-page">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-page {
  padding: 50px 10vw;
  background-color: $color-2
}
</style>
