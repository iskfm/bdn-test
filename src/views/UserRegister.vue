<script>
import axios from "axios";

export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
      },
      disable: false,
    };
  },
  methods: {
    submitRegister() {
      this.disable = true;
      axios
        .post("https://reqres.in/api/register", this.register)
        .then(() => {
          this.disable = false;
          this.$router.push("/user");
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
  <section>
    <b-container fluid>
      <b-row
        class="d-flex justify-content-center align-items-center min-vh-100"
      >
        <b-col md="6">
          <b-img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
            fluid
            class="img-registration"
          ></b-img>
        </b-col>
        <b-col md="6" lg="4">
          <b-card-body>
            <h2 class="mb-4">Registration</h2>
            <b-form-group>
              <label for="email" class="mb-2">Email</label>
              <b-form-input
                type="email"
                id="email"
                v-model="register.email"
                placeholder="Input your email"
                class="p-3"
              />
            </b-form-group>
            <b-form-group>
              <label for="password" class="mb-2">Password</label>
              <b-form-input
                type="password"
                id="password"
                v-model="register.password"
                placeholder="Input your password"
                class="p-3"
              />
            </b-form-group>
            <div class="d-flex">
              <b-button
                type="submit"
                class="ms-auto px-5 py-2 rounded-pill d-flex align-items-center"
                variant="primary"
                @click="submitRegister()"
                :disabled="disable"
              >
                <b-spinner
                  :variant="light"
                  v-if="disable"
                  class="me-2"
                  small
                ></b-spinner>
                Submit</b-button
              >
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style>
.img-registration {
  position: relative;
  width: 100%;
  height: 40vh !important;
  object-fit: cover;
}
@media (min-width: 768px) {
  .img-registration {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100% !important;
    object-fit: cover;
  }
}
</style>
