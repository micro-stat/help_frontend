<template>
  <div class="c-header">
    <nuxt-link to="/">
      <img class="c-header-logo" src="~/static/header-logo.png" width="181" height="50" alt="Site Logo">
    </nuxt-link>

    <div class="c-header-links u-tabletMobileOnly">
      <font-awesome-icon
        v-show="!isVisible"
        :icon="['fas', 'bars']"
        @click="setVisibility(true)"
      />

      <font-awesome-icon
        v-show="isVisible"
        :icon="['fas', 'times']"
        @click="setVisibility(false)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('side-navigator', ['isVisible']),
  methods: mapActions('side-navigator', ['setVisibility'])
}
</script>

<style scoped lang="scss">
.c-header {
  height: 70px;
  padding: 10px 20px;
  background-color: #301C6D;
  box-shadow: 0px 3px 20px rgb(0 0 0 / 50%);
  position: sticky;
  top: 0;
  z-index: 20;

  .c-header-logo {
    float: left;
    height: 50px;
    width: auto;
  }

  .c-header-links {
    float: right;
    display: flex;
    align-items: center;
    height: 50px;
  }
}

svg {
  font-size: 1.5rem;
}
</style>
