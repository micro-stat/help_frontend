<template>
  <div class="c-header">
    <a href="/">
      <img class="c-header-logo" src="~/static/logo.png" width="181" height="50" alt="Site Logo">
    </a>

    <div class="c-header-links">
      <a to="https://www.micro-stat.com">
        Homepage
      </a>

      <a to="https://www.portal.micro-stat.com">
        Dashboard
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.c-header {
  height: 70px;
  padding: 10px 20px;
  background-color: #301C6D;
  box-shadow: 0px 3px 20px rgb(0 0 0 / 50%);
  position: sticky;
  top: 0;
  z-index: 20;

  .c-header-logo {
    float: left;
    height: 50px;
    width: auto;
  }

  .c-header-links {
    float: right;
    display: flex;
    align-items: center;
    height: 50px;

    a {
      text-decoration: none;
      margin-right: 30px;
      padding: 10px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
