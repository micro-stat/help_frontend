<template>
  <div class="c-sideNavigator">
    <h4>Knowledgebase</h4>
    <nuxt-link to="/knowledgebase/api">API Documentation</nuxt-link>
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-sideNavigator {
  background-color: $color-3;
  min-height: 400px;
  width: 300px;
  padding: 30px 30px;
}

h4 {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid $color-4;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
