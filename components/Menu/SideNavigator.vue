<template>
  <div class="c-sideNavigator" :class="{ 'c-sideNavigator--visible' : isVisible}">
    <Common-LinkButton text="Submit a Ticket" destination="/misc/submit-ticket" />

    <template v-if="showCategories">
      <SideNavigator-CategoryHeader title="Integration Guides" category-name="integration" icon="random" />
      <template v-if="activeCategory === 'integration'">
        <ul>
          <li>
            <nuxt-link to="/integration/what-are-integrations">
              What are integrations?
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/integration/api-documentation">
              Ingestion API Documentation
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/integration/javascript-sdk">
              Use the Javascript SDK
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Metrics" category-name="metrics" icon="chart-line" />
      <template v-if="activeCategory === 'metrics'">
        <ul>
          <li>
            <nuxt-link to="/metrics/what-are-metrics">
              What are Metrics?
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/metrics/supported-metrics">
              Supported Metric types
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Knowledgebase" category-name="knowledgebase" icon="book" />
      <template v-if="activeCategory === 'knowledgebase'">
        <h5>Learn</h5>
        <ul>
          <li>
            <nuxt-link to="/knowledgebase/configure-thresholds">
              Configure Thresholds
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/knowledgebase/configure-alerts">
              Configure Alerts
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/knowledgebase/understanding-trends">
              Understanding Trends
            </nuxt-link>
          </li>
        </ul>

        <h5>Customise</h5>
        <ul>
          <li>
            <nuxt-link to="/knowledgebase/configure-organisation">
              Configure Organisation
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/knowledgebase/configure-project">
              Configure Project
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/knowledgebase/configure-team">
              Invite your Team
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Explained" category-name="explained" icon="lightbulb" />
      <template v-if="activeCategory === 'explained'">
        <ul>
          <li>
            <nuxt-link to="/explained/busy-metrics">
              Busy Metrics
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/explained/all-data-points">
              All Data Points
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Changelogs" category-name="changelogs" icon="list-alt" />
      <template v-if="activeCategory === 'changelogs'">
        <ul>
          <li>
            <nuxt-link to="/changelogs/integration-api">
              Ingestion API
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/changelogs/javascript-sdk">
              Javascript SDK
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/changelogs/dashboard">
              Dashboard Features
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Other Topics" category-name="misc" icon="stream" />
      <template v-if="activeCategory === 'misc'">
        <ul>
          <li>
            <nuxt-link to="/misc/submit-ticket">
              Submit a Ticket
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/misc/faq">
              FAQ
            </nuxt-link>
          </li>
        </ul>
      </template>

      <SideNavigator-CategoryHeader title="Blog" category-name="blog" icon="rss" />
      <template v-if="activeCategory === 'blog'">
        <ul>
          <li>
            <nuxt-link to="/blog/index">
              Welcome to micro stat
            </nuxt-link>
          </li>
        </ul>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      showCategories: true
    }
  },

  computed: mapState('side-navigator', ['activeCategory', 'isVisible']),
  methods: {
    ...mapActions('side-navigator', ['setActiveCategory']),

    toggleUI (hasResults) {
      this.showCategories = !hasResults
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-sideNavigator {
  background-color: $color-2;
  min-width: 350px;
  max-height: 900px;
  padding: 30px 30px;
  overflow-y: auto;
  font-size: 1.1rem;

  @media (max-width: $width-ipad-air-portrait) {
    display: none;
    position: fixed;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    overflow: auto;
    max-height: unset;

    &.c-sideNavigator--visible {
      display: unset;
    }
  }
}

a {
  padding: 2px 5px;
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;

  li {
    list-style-type:none;
    font-size: 1rem;
  }
}
</style>
