<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async asyncData ({ $content, params }) {
    const page = await $content(`misc/${params.slug}`).fetch()

    return {
      page
    }
  },

  computed: mapState('side-navigator', ['activeCategory']),

  mounted () {
    if (this.activeCategory !== 'other') {
      this.setActiveCategory('other')
    }
  },

  methods: mapActions('side-navigator', ['setActiveCategory'])
}
</script>
