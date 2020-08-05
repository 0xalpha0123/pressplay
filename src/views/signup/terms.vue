<template>
  <form class="ion-page" @submit.prevent="saveSetup">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-between">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" class="heading" size-md="6" size-xl="4">
            <div style="width: 200px; height: 200px; background: #F3F4F4; border-radius: 100px; margin: auto" />
            <h1>
              Why we <ion-text color="primary">can</ion-text> be friends
            </h1>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <div class="ion-text-center">
              <ion-text class="term_description">
                A short description of our terms in a friendly voice. Reminding
                everyone to be nice, and letting them know that we’re nice, and
                we’re gonna have a good time.
              </ion-text>
            </div>
          </ion-col>
        </ion-row>
        <ion-row></ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="no-style">
      <ion-grid>
        <ion-row class="agree_terms ion-padding-start ion-align-items-center">
          <div class="checkbox_container" v-bind:class="{ checked: agree_terms }" @click="toggle_agree_terms">
            <icon name="checkmark" v-if="agree_terms" color="light" />
          </div>
          <ion-label>I agree to the terms</ion-label>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              @click="gotoProfile"
              :disabled="!agree_terms"
            >
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
      agree_terms: false,
    };
  },
  methods: {
    toggle_agree_terms() {
      this.agree_terms = !this.agree_terms;
    },
    gotoProfile() {
      this.$router.push({ name: 'signup.profile' });
    }
  },
  mixins: [UserData],
};
</script>

<style lang="scss" scoped>
.signup-bg {
  background-position-x: 37%;
}
.heading h1{
  text-align: center;
  color: #FFFFFF;
  font-size: 27px;
  font-weight: bold;
  ion-text{
    color: #F5DE79;
  }
}
.term_description{
  color: #828282;
  font-size: 18px;
  line-height: 21px;
}
.agree_terms{
  ion-label{
    font-size: 13px;
    color: #807B80;
  }
}
.horizontal_bar{
  .bar_inner{
    width: 64%;
  }
}
</style>
