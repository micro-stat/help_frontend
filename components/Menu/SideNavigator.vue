<template>
  <div class="c-sideNavigator" :class="{ 'c-sideNavigator--visible' : isVisible}">
    <Common-LinkButton text="Submit a Ticket" destination="/misc/submit-ticket" />

    <SideNavigator-CategoryHeader title="Product Links" category-name="links" icon="globe" />
    <template v-if="activeCategory === 'links'">
      <ul>
        <li>
          <a href="https://www.micro-stat.com">
            Go to Homepage
          </a>
        </li>
        <li>
          <a href="https://www.portal.micro-stat.com">
            Go to Dashboard
          </a>
        </li>
      </ul>
    </template>

    <SideNavigator-CategoryHeader title="Knowledgebase" category-name="knowledgebase" icon="book" />
    <template v-if="activeCategory === 'knowledgebase'">
      <h5>Integrate</h5>
      <ul>
        <li>
          <nuxt-link to="/knowledgebase/integrations">
            What are integrations?
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/knowledgebase/api-documentation">
            Interact with the API
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/knowledgebase/javascript-sdk">
            Use the Javascript SDK
          </nuxt-link>
        </li>
      </ul>

      <h5>Learn</h5>
      <ul>
        <li>
          <nuxt-link to="/knowledgebase/supported-metrics">
            Supported Metric Types
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/knowledgebase/what-are-metrics">
            What are Metrics?
          </nuxt-link>
        </li>
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

      <h4>Customise</h4>
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState('side-navigator', ['activeCategory', 'isVisible']),
  methods: mapActions('side-navigator', ['setActiveCategory'])
}
</script>

<style scoped lang="scss">
@import '~/styles/variables.scss';

.c-sideNavigator {
  background-color: $color-2;
  min-width: 350px;
  max-height: 800px;
  padding: 30px 30px;

  @media (max-width: $width-ipad-air-portrait) {
    display: none;
    position: fixed;
    top: 70px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;

    &.c-sideNavigator--visible {
      display: unset;
    }
  }
}

a {
  display: block;
  padding: 2px 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;

  li {
    margin-bottom: 0;
  }
}

h5 {
  margin-bottom: 5px;
}
</style>
