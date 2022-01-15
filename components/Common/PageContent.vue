<template>
  <div class="c-pageContent">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-pageContent {
  padding: 0 40px;
  flex-grow: 1;
}
</style>
