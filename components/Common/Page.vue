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
  background-color: $color-3;
  min-height: 750px;

  @media (max-width: $width-ipad-air-landscape) {
    min-height: 500px;
  }
}

.c-page-inner {
  display: flex;
  width: $width-default;
  max-width: 100%;
  padding: 40px 20px;
  margin: 0 auto;

  @media (max-width: $width-ipad-air-portrait) {
    padding: 30px 20px;
  }
}
</style>
