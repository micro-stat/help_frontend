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
    const page = await $content(`knowledgebase/${params.slug}`).fetch()

    return {
      page
    }
  },

  computed: mapState('side-navigator', ['activeCategory']),

  mounted () {
    if (this.activeCategory !== 'knowledgebase') {
      this.setActiveCategory('knowledgebase')
    }

    new this.$statistics.HitCounter(`${this.page.title} Viewed`).publish()
  },

  methods: mapActions('side-navigator', ['setActiveCategory'])
}
</script>
