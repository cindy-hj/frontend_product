<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/categoryadd">categoryadd</router-link> |
    <router-link to="/categorylist">categorylist</router-link> |
    <router-link to="/categoryedit">categoryedit</router-link> |
    <router-link to="/categorydelete">categorydelete</router-link> <br>
    <router-link to="/productadd">productadd</router-link> |
    <router-link to="/productlist">productlist</router-link> |
    <router-link to="/productedit">productedit</router-link> |
    <router-link to="/productdelete">productdelete</router-link> <br>
    <router-link to="/useradd">useradd</router-link> |
    <router-link to="/userpwcheck">userpwcheck</router-link> |
    <router-link to="/useredit">useredit</router-link> |
    <router-link to="/fileupload">fileupload</router-link> |
    <router-link to="/userlist">userlist</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
