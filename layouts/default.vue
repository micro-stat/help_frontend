<template>
  <div>
    <Menu-Header />
    <Common-Page is-flex>
      <Common-PageContent>
        <nuxt />
      </Common-PageContent>
      <Menu-SideNavigator />
    </Common-Page>
    <Menu-Footer />
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/base.scss';
@import '@/styles/box.scss';
@import '@/styles/utilities.scss';
@import '@/styles/forms.scss';
</style>
