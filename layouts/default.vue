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

<script>

import { Connection, HitCounter } from 'micro-stat'

export default {
  mounted () {
    Connection.connect('https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=e5e1b2b2-5c01-4e79-b88c-5516709c0db5')

    new HitCounter('Help Centre Loaded').publish()
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/base.scss';
@import '@/styles/box.scss';
@import '@/styles/utilities.scss';
@import '@/styles/forms.scss';
</style>
