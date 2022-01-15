<template>
  <div class="c-footer">
    <div class="c-footer-inner">
      <img class="c-footer-logo" src="~/static/logo.png" width="217" height="60" alt="Site Logo">

      <div class="c-footer-linksWrapper">
        <div class="c-footer-category">
          <h4>
            <font-awesome-icon :icon="['fas', 'box']" />
            <span>Product</span>
          </h4>

          <a href="https://portal.micro-stat.com?getStarted=true">
            Get Started
          </a>
          <a href="https://portal.micro-stat.com">
            Sign In
          </a>

          <a href="#">Features</a>
          <a href="#">Integrations</a>
          <a href="#">Pricing</a>
        </div>

        <div class="c-footer-category">
          <h4>
            <font-awesome-icon
              :icon="['fas', 'building']" />
            <span>Company</span>
          </h4>
          <a href="#">About Us</a>
          <a href="#">Github</a>
          <a href="#">Blog Posts</a>
        </div>

        <div class="c-footer-category">
          <h4>
            <font-awesome-icon
              :icon="['fas', 'life-ring']" />
            <span>Support</span>
          </h4>
          <a href="#">FAQ</a>
          <a href="#">Help Centre</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.c-footer {
  position: relative;
  padding: 10px 20px;
  background-color: #301c6d;
}

.c-footer img {
  margin-bottom: 10px;
  height: 60px;
}

.c-footer-inner {
  min-height: 400px;
  width: 1000px;
  padding: 40px 10px;
  max-width: 90vw;
  margin: 0 auto;
}

.c-footer-linksWrapper {
  display: flex;
  flex-direction: row;
  padding: 40px 10px;
  border-top: 1px solid #6947D1;
  max-width: 90vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.c-footer-category {
  flex: 1 1;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  svg {
    margin-right: 5px;
  }

  a, button {
    display: block;
    margin: 10px;
    text-decoration: none;

    @media (max-width: 768px) {
      margin: 10px 30px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

button {
  background-color: transparent;
  border: 0;
  color: white;
  font-family: "Quicksand", "sans-serif";
  font-size: 1rem;
  padding: 0;
  cursor: pointer;
}
</style>
