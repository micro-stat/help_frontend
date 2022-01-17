<template>
  <page>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </page>
</template>

<script>
import ContentPageMixin from '@/mixins/ContentPageMixin'

export default {
  mixins: [ContentPageMixin],

  async asyncData ({ $content, params }) {
    const contentType = 'knowledgebase'
    const page = await $content(`${contentType}/${params.slug}`).fetch()

    return {
      page,
      contentType
    }
  }
}
</script>
