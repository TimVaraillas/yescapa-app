<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
const activeIndex = ref("0");
</script>

<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="menu"
      mode="horizontal"
      router="true"
    >
      <img
        alt="Yescapa logo"
        class="logo"
        src="@/assets/yescapa.png"
        height="50"
      />
      <div class="flex-grow" />
      <el-menu-item index="0" route="/">Home</el-menu-item>
      <el-menu-item index="1" route="/about">About</el-menu-item>
    </el-menu>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.menu {
  padding: 0 20px;
  display: flex;
  align-items: center;
}
.logo {
  margin-right: 30px;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.container {
  width: 1170px;
  margin: 0 auto;
}
</style>
