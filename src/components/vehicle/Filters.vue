<template>
  <div class="filters-container">
    <h1 class="title">Filtres</h1>
    <el-divider></el-divider>
    <div class="filter">
      <p class="label">Nom du véhicule</p>
      <el-input
        v-model="internalFilters.title"
        placeholder="Saisir une valeur"
      />
    </div>
    <div class="filter">
      <p class="label">Prix</p>
      <el-slider
        v-model="internalFilters.starting_price"
        range
        :min="0"
        :max="100"
      />
    </div>
    <div class="filter">
      <p class="label">Nombre de couchages minimum</p>
      <el-input-number
        v-model="internalFilters.vehicle_beds"
        :min="1"
        :max="10"
      />
    </div>
    <div class="filter">
      <p class="label">Nombre de places assises minimum</p>
      <el-input-number
        v-model="internalFilters.vehicle_seats"
        :min="1"
        :max="10"
      />
    </div>
    <div class="filter">
      <p class="label">Note minimum</p>
      <el-rate v-model="internalFilters.review_average" allow-half clearable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VehiclesFilters",
  props: {
    modelValue: Object,
  },
  data() {
    return {
      internalFilters: { ...this.modelValue },
    };
  },
  emits: ["update:modelValue"],
  watch: {
    internalFilters: {
      deep: true,
      handler() {
        this.$emit("update:modelValue", this.internalFilters);
      },
    },
  },
});
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: 900;
  font-size: 18px;
}
.el-divider {
  margin: 10px 0 24px;
}
.filter {
  margin: 15px 0;
}
.label {
  margin-bottom: 5px;
}
</style>
