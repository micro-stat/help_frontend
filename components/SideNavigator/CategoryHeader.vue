<template>
  <button type="button" @click="setActiveCategory(categoryName)">
    <h4>
      <font-awesome-icon :icon="icon" class="fa-fw" />
      {{ title }}
    </h4>
    <font-awesome-icon icon="chevron-down" />
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    categoryName: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },

  methods: mapActions('side-navigator', ['setActiveCategory'])
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

button {
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  border-bottom: 1px solid $color-4;
  cursor: pointer;
  text-align: left;
}

h4 {
  flex-grow: 1;
  margin-bottom: 10px;
}

svg {
  margin-right: 5px;
}
</style>
