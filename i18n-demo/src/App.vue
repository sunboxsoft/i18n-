<template>
  <div id="app">
    <router-link replace to="/testa">跳转</router-link>
    <img src="./assets/logo.png" />
    <router-view />

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      lang: null,
    };
  },
  created() {
    this.lang = localStorage.getItem("lang") || "zh";
  },
  mounted() {
    // console.log(this.$i18n.t("table.name"));
    console.log("BBBBBBBBBBB", this.$i18n);
  },
  methods: {

  },
  watch: {
    lang(newValue, oldValue) {
      console.log("变换.....", newValue, oldValue);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
