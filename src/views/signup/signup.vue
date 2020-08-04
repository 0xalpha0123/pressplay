<template>
  <form class="ion-page" @submit.prevent="submit">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-center">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <aspect-ratio
              ratio="16:9"
              class="ion-justify-content-center ion-align-items-center"
            >
              <ion-text color="light" class="ion-text-center">
                <h1 class="heading_text">Let’s get it started</h1>
                <h2>(in here)</h2>
              </ion-text>
            </aspect-ratio>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <ion-list class="form white">
              <ion-row>
                <ion-col size="6" size-lg="6">
                  <ion-input
                    autocapitalize="on"
                    required
                    type="text"
                    placeholder="First Name"
                    :value="userData.profile.firstname"
                    :disabled="loading"
                    @ionInput="
                      userData.profile.firstname = $event.target.value
                    "
                  ></ion-input>
                </ion-col>
                <ion-col size="6" size-lg="6">
                  <ion-input
                    autocapitalize="on"
                    required
                    type="text"
                    placeholder="Last Name"
                    :value="userData.profile.lastname"
                    :disabled="loading"
                    @ionInput="
                      userData.profile.lastname = $event.target.value
                    "
                  ></ion-input>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-input
                    required
                    type="email"
                    placeholder="Email Address"
                    :value="email"
                    :disabled="loading"
                    @ionInput="email = $event.target.value"
                  ></ion-input>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-input
                    required
                    type="password"
                    placeholder="Password"
                    :value="password"
                    :disabled="loading"
                    @ionInput="password = $event.target.value"
                  ></ion-input>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-input
                    required
                    type="password"
                    :value="password2"
                    :disabled="loading"
                    placeholder="Confirm"
                    @ionInput="password2 = $event.target.value"
                    @ionBlur="handlePassword2Blur"
                  ></ion-input>
                  <ion-item
                    lines="none"
                    color="danger"
                    v-if="passwordChecker && !passwordsMatch"
                  >
                    <ion-label>Your passwords do not match.</ion-label>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12">
                  <ion-input
                    required
                    type="tel"
                    :value="userData.profile.phoneNumber"
                    :disabled="loading"
                    placeholder="phone"
                    @ionInput="userData.profile.phoneNumber = $event.target.value"
                  ></ion-input>
                </ion-col>
              </ion-row>
              <ion-row class="search_phone ion-align-items-center">
                <div class="checkbox_container" v-bind:class="{ checked: search_phone }" @click="toggle_search_phone">
                  <icon name="checkmark" v-if="search_phone" color="light" />
                </div>
                <ion-label>Allow people to find me via phone number</ion-label>
              </ion-row>
              <ion-row class="verify_phone ion-align-items-center ion-justify-content-between">
                <ion-label>Verify identity via <b>{{ verify_phone ? 'Phone' : 'Email' }}</b></ion-label>
                <div class="toggle_container" v-bind:class="{ active: verify_phone }">
                  <div class="toggler" @click="toggle_verify_phone" />
                </div>
              </ion-row>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="no-style">
      <ion-grid class="align-content-center">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              type="submit"
              :disabled="loading || !canSubmit"
            >
              <ion-spinner v-if="loading"></ion-spinner>
              Play On
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <div class="horizontal_bar">
            <div class="bar_inner" />
          </div>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </form>
</template>
<script>
import UserData from "@/mixins/userData.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      passwordChecker: false,
      loading: false,
      termsAccepted: false,
      search_phone: false,
      verify_phone: false
    };
  },

  created() {
    this.$on("errorRetry", function() {
      this.submit();
    });

    // Watch user on load, redirect to profile if logged in
    // Use unwatch guard so we don't redirect to profile on create success
    let unwatch = this.$watch(
      "user",
      function(user) {
        if (unwatch) {
          unwatch();
        } else {
          if (user) {
            this.$router.replace({ name: "profile" });
          }
        }
      },
      { immediate: true }
    );
  },

  methods: {
    submit() {
      let vm = this;

      vm.loading = true;

      vm.$store
        .dispatch("User/create", { email: vm.email, password: vm.password })
        .then(function() {
          let requests = [];

          requests.push(
            vm.$store.dispatch("User/updateProfile", {
              displayName: vm.displayName
            })
          );
          requests.push(
            vm.$fireStore
              .collection("users")
              .doc(vm.user.uid)
              .set(vm.userData)
          );

          Promise.all(requests)
            .then(function() {
              vm.loading = false;
              vm.$router.push({ name: "signup.verify" });
            })
            .catch(res => {
              return vm.error(res);
            });
        })
        .catch(res => {
          return vm.error(res);
        });
    },

    toggle_search_phone() {
      this.search_phone = !this.search_phone;
    },

    toggle_verify_phone() {
      this.verify_phone = !this.verify_phone;
    },

    error(err) {
      let vm = this;
      vm.loading = false;
      return vm.$error(err.message);
    },

    handlePassword2Blur() {
      this.passwordChecker = true;
    }
  },

  computed: {
    canSubmit() {
      return (
        this.email !== "" &&
        this.userData.profile.firstname !== "" &&
        this.userData.profile.lastname !== "" &&
        this.userData.profile.phoneNumber !== "" &&
        this.passwordsMatch
      );
    },

    passwordsMatch() {
      return (
        this.password !== "" &&
        this.password2 !== "" &&
        this.password == this.password2
      );
    }
  },

  mixins: [UserData]
};
</script>
<style lang="scss" scoped>
.heading_text{
  margin-top: -48px;
}
ion-input {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
  border-radius: 44px;
}
ion-content {
  background-position-x: 10%;
}
ion-row{
  margin-top: 4px;
}
.search_phone{
  ion-label{
    font-size: 13px;
    color: #807B80;
  }
  .checkbox_container{
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
    border-radius: 31px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
} 
.verify_phone{
  margin-top: 12px;
  ion-label{
    font-size: 16px;
    line-height: 110%;
    color: #424242;
    b{
      color: #2E73FB;
    }
  }
}
.toggle_container{
  width: 36px;
  height: 15px;
  border-radius: 8px;
  position: relative;
  background: linear-gradient(180deg, #7D35F3 0%, #471B74 100%);
  &.active{
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
    .toggler{
      right: 0;
      left: auto;
    }
  }
  .toggler{
    width: 23px;
    height: 23px;
    border-radius: 12px;
    top: -5.5px;
    left: 0;
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
  }
}
.horizontal_bar{
  width: 100%;
  height: 11px;
  background: #E0E0E0;
  border-radius: 10px;
  overflow: hidden;
  .bar_inner{
    width: 16%;
    height: 100%;
    background: linear-gradient(117.29deg, #471B74 0.35%, #713682 80.95%, #AA2986 98.89%);
    border-radius: 10px;
  }
}
.form ion-grid {
  --ion-grid-column-padding: 8px;
}
@media (min-width: 992px) {
  ion-content > ion-card {
    height: calc(100% - 30px);
    background-position-y: -25vh;
  }
  .fix-padding-left {
    padding-left: 0;
  }
  .fix-padding-right {
    padding-right: 0;
  }
}
@media (max-width: 992px) {
  ion-content > ion-card {
    margin: 0;
  }
  .fix-padding-left,
  .fix-padding-right {
    padding-left: 0;
    padding-right: 0;
  }
  .fix-padding-right {
    padding-bottom: 0;
  }
}
</style>
