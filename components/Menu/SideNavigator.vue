<template>
  <div class="c-sideNavigator">
    <h4>Knowledgebase</h4>
    <ul>
      <li><nuxt-link to="/knowledgebase/integrations">Integrations</nuxt-link></li>
      <li><nuxt-link to="/knowledgebase/api-documentation">API Documentation</nuxt-link></li>
      <li><nuxt-link to="/knowledgebase/javascript-sdk">Javascript SDK</nuxt-link></li>
    </ul>

    <h4>Misc</h4>
    <ul>
      <li><nuxt-link to="/misc/faq">FAQ</nuxt-link></li>
    </ul>

    <h4>Blog</h4>
    <ul>
      <li><nuxt-link to="/blog/index">Welcome to micro stat</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-sideNavigator {
  background-color: $color-3;
  min-height: 400px;
  min-width: 400px;
  padding: 30px 30px;
}

h4 {
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid $color-4;
}

a {
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;
}
</style>
