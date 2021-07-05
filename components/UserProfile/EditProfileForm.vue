<template>
  <div>
    <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-5">
          <base-input
            type="text"
            label="Fullname"
            placeholder="Fullname"
            v-model="user.fullname"
          >
          </base-input>
        </div>
        <!-- <div class="col-md-3">
          <base-input
            type="text"
            label="Username"
            placeholder="Username"
            v-model="user.username"
          >
          </base-input>
        </div> -->
        <div class="col-md-5">
          <base-input
            type="email"
            label="Email address"
            placeholder="mike@email.com"
            v-model="user.email"
          >
          </base-input>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="First Name"
            placeholder="First Name"
            v-model="user.firstName"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Last Name"
            placeholder="Last Name"
            v-model="user.lastName"
          >
          </base-input>
        </div>
      </div> -->

      <!-- <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            label="Address"
            placeholder="Home Address"
            v-model="user.address"
          >
          </base-input>
        </div>
      </div> -->

      <!-- <div class="row">
        <div class="col-md-4">
          <base-input
            type="text"
            label="City"
            placeholder="City"
            v-model="user.city"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="text"
            label="Country"
            placeholder="Country"
            v-model="user.country"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            label="Postal Code"
            placeholder="ZIP Code"
            v-model="user.postalCode"
          >
          </base-input>
        </div>
      </div> -->

      <div class="row">
        <div class="col-md-12">
          <base-input label="About Me">
            <textarea
              class="form-control"
              placeholder="Write"
              v-model="user.status"
            >
            </textarea>
          </base-input>
        </div>
      </div>

      <base-button native-type="submit" type="primary" class="btn-fill">
        Update
      </base-button>
    </form>
  </card>

    <card>
    <h5 slot="header" class="title">Change Password</h5>
    <form @submit.prevent="changePassword">
      <div class="row">
        <div class="col-md-5">
          <base-input
            type="password"
            label="Password"
            placeholder="Password"
            v-model="password"
          >
          </base-input>
        </div>
        <div class="col-md-5">
          <base-input
          type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            v-model="confirmPassword"
          >
          </base-input>
        </div>
      </div>

      <base-button native-type="submit" type="primary" class="btn-fill">
        Set Password
      </base-button>
    </form>
  </card>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      user: {
        fullname: this.$auth.user.fullname,
        // username: 'michael23',
        email: this.$auth.user.email,
        // firstName: 'Mike',
        // lastName: 'Andrew',
        // address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        // city: 'New York',
        // country: 'USA',
        // postalCode: '',
        status:this.$auth.user.intro
      },
      password: null,
      confirmPassword: null
    };
  },
  methods: {
    updateProfile() {
      this.$api.user.update(this.user)
      this.$router.go()

    },
    async changePassword() {
      // this.$router.go()
      console.log(this.$nuxt.refresh())
      console.log(this.$router)
      console.log(this.$nuxt)
    }
  }
};
</script>
<style></style>
