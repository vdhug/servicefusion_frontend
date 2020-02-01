<template>
  <nav id="sidebar">
    <p class="sidebar-title">Persons</p>
    <ul class="sidebar-options">
      <li><a href="#">Search</a></li>
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
  border: 3px solid green;
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

.sidebar-options li {
  text-align: right;
}
.sidebar-options li a {
  color: #8596A6;
  text-decoration: none;
  font-size: 1em;
  line-height: 1.5;
  padding: 10px;
  padding-right: 0px;
}

.sidebar-options li a:hover {
  opacity: .6;
  transition: color .15s ease-in;
}



</style>
