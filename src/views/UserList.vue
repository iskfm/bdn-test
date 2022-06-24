<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      breadcrumbItems: [{ text: "Home", href: "/register" }, { text: "User" }],
      disable: false,
      filter: {
        page: 1,
        per_page: 9,
      },
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.disable = true;
      axios
        .get("https://reqres.in/api/users", { params: this.filter })
        .then((response) => {
          this.disable = false;
          this.users = response.data;
        })
        .catch((error) => {
          this.disable = false;
          this.$swal({
            title: "Error!",
            text: error.response.data.error,
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "Okay",
          });
        });
    },
  },
};
</script>

<template>
  <section class="py-5">
    <b-container>
      <b-row>
        <b-col lg="12" class="mb-5">
          <h2>List Users</h2>
          <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
        </b-col>
        <template v-if="users.data && users.data.length !== 0">
          <b-col
            xl="4"
            lg="6"
            v-for="(data, index) in users.data"
            v-bind:key="index"
            class="mb-4"
          >
            <b-card>
              <div class="d-flex align-items-center">
                <b-img :src="data.avatar" class="rounded-circle img-avatar" />
                <div class="ms-3">
                  <p class="fw-bold mb-1">
                    {{ data.first_name + " " + data.last_name }}
                  </p>
                  <p class="text-muted mb-0">{{ data.email }}</p>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="d-flex mt-5 mb-4" lg="12">
            <div class="d-flex align-items-center text-center">
              <span>
                Show
                <strong class="text-primary">{{ users.data.length }}</strong>
                from
                <strong>{{ users.total }}</strong>
                data
              </span>
            </div>

            <b-pagination
              v-model="filter.page"
              :total-rows="users.total"
              :per-page="users.per_page"
              first-number
              last-number
              class="mb-0 ms-auto"
              @update:modelValue="fetchUser()"
            ></b-pagination>
          </b-col>
        </template>
        <template v-else>
          <b-col lg="12">
            <b-card class="text-center p-4">
              <img
                src="https://cdn-icons.flaticon.com/png/512/4080/premium/4080888.png?token=exp=1656089075~hmac=405b26145628a2ffeb52154fe7dffcd1"
                width="130"
                height="130"
                class="img-fluid mb-4 mr-3"
              />
              <h3><strong>Sorry, you don't have any User</strong></h3>
              <h4>
                Currently you do not have any User, we could assist you to make
                one
              </h4>
            </b-card>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </section>
  <router-view />
</template>

<style>
.img-avatar {
  width: 45px;
  height: 45px;
}
</style>
