<template>
  <nuxt-link
    type="button"
    class="c-linkButton"
    :to="destination"
    v-text="text" />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Submit'
    },

    destination: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-linkButton {
  background-color: $color-4;
  margin-bottom: 25px;
  padding: 15px 30px;
  text-align: center;
}
</style>
