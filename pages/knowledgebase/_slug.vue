<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
// import { HitCounter } from 'micro-stat'

export default {
  async asyncData ({ $content, params }) {
    const page = await $content(`knowledgebase/${params.slug}`).fetch()

    return {
      page
    }
  },

  mounted () {
    // new HitCounter(`${this.page.title} Loaded`).publish()
  }
}
</script>
