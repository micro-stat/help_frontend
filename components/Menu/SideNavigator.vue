<template>
  <div class="c-sideNavigator">
    <h4>Knowledgebase</h4>
    <h5>Integrate</h5>
    <ul>
      <li><nuxt-link to="/knowledgebase/integrations">What are integrations?</nuxt-link></li>
      <li><nuxt-link to="/knowledgebase/api-documentation">Interact with the API</nuxt-link></li>
      <li><nuxt-link to="/knowledgebase/javascript-sdk">Use the Javascript SDK</nuxt-link></li>
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
  max-height: 800px;
  padding: 30px 30px;
}

h4 {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid $color-4;
}

a {
  display: block;
  padding: 2px 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;

  li {
    margin-bottom: 0;
  }
}

h5 {
  margin-bottom: 5px;
}
</style>
