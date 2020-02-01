<template>
  <div id="app">
    <Header />
    <main>

    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Lato", Arial, Helvetica, sans-serif;
}

img {
  display: block;
}

</style>
