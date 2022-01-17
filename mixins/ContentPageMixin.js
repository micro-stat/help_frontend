import { mapState, mapActions } from 'vuex'

export default {
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        { hid: 'og:description', property: 'og:description', content: this.page.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ]
    }
  },

  computed: mapState('side-navigator', ['activeCategory']),

  mounted () {
    if (this.activeCategory !== this.contentType) {
      this.setActiveCategory(this.contentType)
    }

    new this.$statistics.HitCounter(`${this.page.title} Viewed`).publish()
  },

  methods: mapActions('side-navigator', ['setActiveCategory'])
}
