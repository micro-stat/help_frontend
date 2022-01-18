<template>
  <div class="c-footer">
    <div class="c-footer-inner">
      <a href="https://www.micro-stat.com" class="c-footer-logo">
        <img src="~/static/logo.png" width="217" height="60" alt="Site Logo">
      </a>

      <div class="c-footer-linksWrapper">
        <div class="c-footer-category">
          <h4>
            <font-awesome-icon :icon="['fas', 'box']" />
            <span>Product</span>
          </h4>

          <a href="https://www.micro-stat.com">Homepage</a>
          <a href="https://www.micro-stat.com/pricing">Pricing</a>
        </div>

        <div class="c-footer-category">
          <h4>
            <font-awesome-icon :icon="['fas', 'tachometer-alt']" />
            <span>Dashboard</span>
          </h4>

          <a href="https://portal.micro-stat.com?getStarted=true">Get Started</a>
          <a href="https://portal.micro-stat.com">Sign In</a>
          <a href="https://portal.micro-stat.com/tutorial">Dashboard</a>
        </div>

        <div class="c-footer-category">
          <h4>
            <font-awesome-icon :icon="['fas', 'building']" />
            <span>Company</span>
          </h4>

          <a href="https://github.com/micro-stat">Github</a>
          <a href="https://www.help.micro-stat.com/blog/index">Blog Posts</a>
        </div>

        <div class="c-footer-category">
          <h4>
            <font-awesome-icon :icon="['fas', 'life-ring']" />
            <span>Support</span>
          </h4>

          <a href="https://www.help.micro-stat.com">Help Center</a>
          <a href="https://www.help.micro-stat.com/knowledgebase/integrations">Knowledgebase</a>
          <a href="https://www.help.micro-stat.com/misc/submit-ticket">Submit a Ticket</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.c-footer {
  position: relative;
  background-color: #301c6d;
}

.c-footer img {
  margin-bottom: 10px;
  height: 60px;
}

.c-footer-inner {
  width: 1200px;
  padding: 60px 10px;
  max-width: 90vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
}

.c-footer-linksWrapper {
  display: flex;
  flex-direction: row;
  padding: 40px 10px;
  border-top: 1px solid #6947D1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.c-footer-category {
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  svg {
    margin-right: 5px;
  }
}

a {
  margin: 10px;

  @media (max-width: 768px) {
    margin: 10px 30px;
  }
}

.c-footer-logo {
  margin: 0;
}
</style>
