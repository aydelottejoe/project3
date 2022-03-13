<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.jpeg" />
          <h1>Build your gym like a pro!</h1>
        </router-link>
      </div>
      <div id="side">
        <router-link to="/apparel">
          <div class="menu-item browse">
            <img src="/images/globe.png" />
            <p>Apparel</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item">
            <img src="/images/love.png" />
            <p>{{ numberOfItems }} Favorites</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <div class='footer-container'>
        <div class='footer'>
            <div class='github-link' id='repo'><a class='github-link'
                    href="https://github.com/aydelottejoe/home-gym">Github Repository</a></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #376ad8;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  text-align: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

/*flexbox footer*/
.footer-container {
  z-index: 500;
  position: fixed;
  right: 0;
  width: 100%;
  height: 45px;
  background: #376ad8;
  border-radius: 3px;
  bottom: 0;
}

.github-link {
  color: white;
  margin-left: 1%;
  text-decoration: none;
  margin-top: 13px;
}
</style>
