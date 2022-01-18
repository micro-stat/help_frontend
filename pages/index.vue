<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
import ContentPageMixin from '@/mixins/ContentPageMixin'

export default {
  mixins: [ContentPageMixin],

  async asyncData ({ $content }) {
    const page = await $content('index').fetch()

    return {
      page
    }
  }
}
</script>
