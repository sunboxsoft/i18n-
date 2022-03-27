<template>
  <section class="TestA">
    TestATempt
    <!-- {{ $t("table.name") }}AAAAA -->

    {{ $t("lang.login") }}
    <el-button @click="changeLanguage('zh')" title="zh" type="primary"
      >zh</el-button
    >
    <el-button @click="changeLanguage('en')" title="en" type="primary"
      >en</el-button
    >
  </section>
</template>

<script>
export default {
  name: "TestA",
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
  components: {},
  mounted() {
    console.log("((((((((((((((((((((AAAAAAAAAAAAAA))))))))))))))))))))");
  },
  methods: {
    changeLanguage(language) {
      console.log(language);
      localStorage.setItem("lang", language);
      this.locale = language;
    },
  },
  watch: {
    locale(newValue, oldValue) {
      console.log("变换.....", newValue, oldValue);
      this.$i18n.locale = newValue;
    },
  },
};
</script>

<style>
</style>
