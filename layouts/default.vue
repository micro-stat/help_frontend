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
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('side-navigator', ['isVisible']),

  watch: {
    $route (to, from) {
      if (this.isVisible) {
        this.setVisibility(false)
      }
    }
  },

  mounted () {
    Connection.connect('https://micro-stat-functions.azurewebsites.net/api/ingest?dsn=e5e1b2b2-5c01-4e79-b88c-5516709c0db5')

    new HitCounter('Help Centre Loaded').publish()
  },

  methods: mapActions('side-navigator', ['setVisibility'])
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/base.scss';
@import '@/styles/box.scss';
@import '@/styles/utilities.scss';
@import '@/styles/forms.scss';
</style>
