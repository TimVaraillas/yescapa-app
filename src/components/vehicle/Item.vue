<template>
  <el-card class="item" :body-style="{ padding: '0px' }">
    <router-link :to="`/vehicle/${internalVehicle.id}`">
      <img
        :src="internalVehicle.pictures[0].url"
        onerror="this.onerror=null; this.src='/sample.jpg'"
        class="image"
      />
      <div class="info">
        <div class="top">
          <span class="title">{{ internalVehicle.title }}</span>
          <span class="price">
            <span class="small">à partir de</span>
            {{ internalVehicle.starting_price }}€
          </span>
        </div>
        <div class="middle">
          <span class="city">{{ internalVehicle.vehicle_location_city }}</span>
        </div>
        <div class="bottom">
          <div class="beds-seats">
            <span class="beds">
              {{ internalVehicle.vehicle_beds }}
              <font-awesome-icon icon="fa-solid fa-bed" />
            </span>
            <span class="separator">•</span>
            <span class="seats">
              {{ internalVehicle.vehicle_seats }}
              <font-awesome-icon icon="fa-solid fa-chair" />
            </span>
          </div>
          <div class="rate">
            <el-rate v-model="internalVehicle.review_average" disabled />
            <span>{{ internalVehicle.review_count }} avis</span>
          </div>
        </div>
      </div>
    </router-link>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VehicleItem",
  props: {
    vehicle: Object,
  },
  data() {
    return {
      internalVehicle: { ...this.vehicle },
    };
  },
});
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
.item {
  flex: 0 0 370px;
}
.image {
  height: 280px;
  object-fit: cover;
  min-width: 100%;
}
.info {
  padding: 14px;
}
.top,
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top,
.middle {
  margin-bottom: 10px;
}
.title {
  flex: 3;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  flex: 1;
  margin-left: 16px;
}
.small {
  font-size: 10px;
}
.city {
  font-style: italic;
}
.separator {
  margin: 0 5px;
}
.rate {
  display: flex;
  align-items: center;
  font-style: italic;
  font-size: 14px;
}
</style>
