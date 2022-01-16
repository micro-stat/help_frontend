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
  background-color: $color-3
}

.c-page-inner {
  display: flex;
  width: $width-default;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: $width-ipad-air-portrait) {
    padding: 30px 20px;
  }
}
</style>
