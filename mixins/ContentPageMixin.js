import { mapState, mapActions } from 'vuex'

export default {
  head () {
    return {
      title: `${this.page.title} | micro stat`,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
        { hid: 'og:title', property: 'og:title', content: `${this.page.title} | micro stat` },
        { hid: 'og:description', property: 'og:description', content: this.page.description },
        { hid: 'twitter:title', name: 'twitter:title', content: `${this.page.title} | micro stat` },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ]
    }
  },

  computed: mapState('side-navigator', ['activeCategory']),

  mounted () {
    if (this.activeCategory !== this.contentType) {
      this.setActiveCategory(this.contentType)
    }

    new this.$statistics.WordWeb('Article Viewed', this.page.title).publish()
  },

  methods: mapActions('side-navigator', ['setActiveCategory'])
}
