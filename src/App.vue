<template>
  <div class="wrapper">

    <!-- header -->
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Slider</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <router-link class="navbar-link" :to="'/'"></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

  </div>
</template>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7
  }
}
.logoutArea {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
}
</style>

