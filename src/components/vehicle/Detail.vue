<template>
  <div v-if="vehicle">
    <el-container class="container">
      <el-main>
        <el-container>
          <el-header>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">
                Liste des véhicules
              </el-breadcrumb-item>
              <el-breadcrumb-item>{{ vehicle.title }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>
          <el-main>
            <div class="carousel-container">
              <el-carousel class="carousel" trigger="click" height="600px">
                <el-carousel-item v-for="item in vehicle.pictures" :key="item">
                  <img
                    :src="item.url"
                    onerror="this.onerror=null; this.src='/sample.jpg'"
                    class="image"
                  />
                </el-carousel-item>
              </el-carousel>
            </div>
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
          </el-main>
        </el-container>
      </el-main>
      <el-aside width="350px">
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
      </el-aside>
    </el-container>
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
  width: 1400px;
  margin: 0 auto;
}
.el-header {
  display: flex;
  align-items: center;
}
.el-aside {
  min-height: calc(100vh - 59px);
  padding: 100px 30px 30px;
  border-left: 1px solid rgb(76, 77, 79);
  display: flex;
  flex-direction: column;
  align-items: center;
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
