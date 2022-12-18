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
      <el-menu-item index="0" route="/">Véhicules</el-menu-item>
    </el-menu>
  </header>

  <RouterView />
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
</style>
