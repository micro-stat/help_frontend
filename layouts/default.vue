<template>
  <div>
    <Menu-Header />

    <Common-Page>
      <Common-PageContent>
        <Nuxt />
      </Common-PageContent>

      <Menu-SideNavigator />
    </Common-Page>

    <Menu-Footer />
  </div>
</template>

<script>
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

  methods: mapActions('side-navigator', ['setVisibility'])
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/base.scss';
@import '@/styles/utilities.scss';
</style>
