<template>
  <nav id="sidebar">
    <p class="sidebar-title">Persons</p>
    <ul class="sidebar-options">
      <router-link to="/new">
        New
      </router-link>

      <router-link to="#">
        Search
      </router-link>
    </ul>

    <p  class="sidebar-title">API</p>
    <ul class="sidebar-options">
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Repository</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style>

#sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 70px 30px 0px;
  height: 100vh;
}

.sidebar-title {
  font-size: 1.25em;
  color: #253340;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 30px;
}

.sidebar-options {
  display: block;
  margin-top: 10px;
}

.sidebar-options a {
  display: block;
  text-align: right;
}
.sidebar-options a {
  color: #8596A6;
  text-decoration: none;
  font-size: 1em;
  padding: 5px;
  padding-right: 0px;
}

.sidebar-options a:hover {
  opacity: .6;
  transition: color .15s ease-in;
}



</style>
