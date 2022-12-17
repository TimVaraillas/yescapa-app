<template>
  <div class="container" v-if="vehicle">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        Liste des véhicules
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ vehicle.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrapper">
      <div class="main section">
        <el-carousel class="carousel" trigger="click" height="600px">
          <el-carousel-item v-for="item in vehicle.pictures" :key="item">
            <img
              :src="item.url"
              onerror="this.onerror=null; this.src='/sample.jpg'"
              class="image"
            />
          </el-carousel-item>
        </el-carousel>
        <div class="info">
          <img :src="vehicle.vehicle_owner_picture_url" class="owner-image" />
          <div class="owner-info">
            <p class="title">{{ vehicle.title }}</p>
            <p class="owner">Van de {{ vehicle.vehicle_owner_first_name }}</p>
            <p class="place">
              {{ vehicle.vehicle_location_city }}
              ({{ vehicle.vehicle_location_zipcode }}), France
            </p>
          </div>
          <div class="beds-seats">
            <span class="beds">
              {{ vehicle.vehicle_beds }}
              <font-awesome-icon icon="fa-solid fa-bed" />
            </span>
            <span class="seats">
              {{ vehicle.vehicle_seats }}
              <font-awesome-icon icon="fa-solid fa-chair" />
            </span>
          </div>
        </div>
      </div>
      <div class="side section">
        <div class="price">
          <p class="small">Disponible à partir de</p>
          <p class="amount">
            {{ vehicle.starting_price }}€
            <span class="sub">/jour</span>
          </p>
        </div>
        <el-divider />
        <el-rate v-model="vehicle.review_average" show-score disabled />
        <p>sur {{ vehicle.review_count }} avis</p>
        <el-divider />
        <el-button type="primary" size="large">
          Prendre contact avec {{ vehicle.vehicle_owner_first_name }}
          &nbsp;
          <font-awesome-icon icon="fa-solid fa-comments" />
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VehiclesDetail",
  props: {
    vehicle: Object,
  },
});
</script>

<style scoped>
.container {
  margin: 30px 0;
}
.wrapper {
  margin-top: 30px;
  display: flex;
}
.main {
  flex: 1;
  margin-right: 10px;
}
.side {
  padding: 30px 14px 14px 14px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  border-radius: 5px;
}
.carousel {
  border-radius: 5px;
}
.image {
  min-width: 100%;
  min-height: 600px;
  object-fit: cover;
}
.info {
  margin: 20px 0;
  display: flex;
}
.owner-info {
  margin-left: 20px;
  flex: 1;
}
.owner-image {
  border-radius: 5px;
}
.title {
  font-size: 20px;
  font-weight: 900;
}
.place {
  font-style: italic;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.amount {
  font-size: 35px;
  font-weight: 900;
}
.sub {
  font-size: 14px;
}
.beds-seats {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  font-size: 22px;
}
</style>
