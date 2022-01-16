<template>
  <div class="c-page">
    <div class="c-page-inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-page {
  background-color: $color-2
}

.c-page-inner {
  display: flex;
  width: $width-default;
  max-width: 100vw;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
