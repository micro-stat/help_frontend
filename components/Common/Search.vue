<template>
  <div class="c-search">
    <input v-model="query" type="search" autocomplete="off" placeholder="Search for a term...">

    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.path">
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        this.$emit('has-results', false)
        return
      }

      const matchedArticles = [
        ...await this.$content('metrics')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch(),
        ...await this.$content('explained')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch(),
        ...await this.$content('knowledgebase')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch(),
        ...await this.$content('changelogs')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch(),
        ...await this.$content('misc')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch(),
        ...await this.$content('blog')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .limit(12)
          .search(query)
          .fetch()
      ]

      this.articles = matchedArticles

      this.$emit('has-results', this.articles.length > 0)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

input {
  background-color: $color-1;
  color: white;
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
  border: 0;
  outline: none;
  font-size: 1rem;
}

a {
  padding: 2px 5px;
}

ul {
  padding-left: 0;
  margin-bottom: 20px;

  li {
    list-style-type:none;
  }
}
</style>
