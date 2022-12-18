<template>
  <div class="item-container">
    <Item v-for="vehicle in vehicles" :key="vehicle" :vehicle="vehicle" />
  </div>
</template>

<script lang="ts">
import Item from "./Item.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VehiclesList",
  components: {
    Item,
  },
  props: {
    vehicles: Array,
  },
});
</script>

<style scoped>
.item-container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  margin: 10px;
}
</style>
