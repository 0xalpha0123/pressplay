<template>
  <form class="ion-page">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-center">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <aspect-ratio
              ratio="16:9"
              class="ion-justify-content-center ion-align-items-center"
            >
              <ion-text color="light" class="ion-text-center">
                <h1>don't you lose our number</h1>
              </ion-text>
            </aspect-ratio>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <div class="ion-text-center">
              <ion-text color="danger">
                type the verification code sent to: <br>
              </ion-text>
              <ion-text color="warning" class="text-large">
                44444444
              </ion-text>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12">
            <div class="form white">
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp1 required maxLength="1" @keyup="otpController($event,'otp2','')"></ion-input>
              </ion-item>
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp2 required maxLength="1" @keyup="otpController($event,'otp3','otp1')"></ion-input>
              </ion-item>
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp3 required maxLength="1" @keyup="otpController($event,'otp4','otp2')"></ion-input>
              </ion-item>
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp4 required maxLength="1" @keyup="otpController($event,'otp5','otp3')"></ion-input>
              </ion-item>
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp5 required maxLength="1" @keyup="otpController($event,'otp6','otp4')"></ion-input>
              </ion-item>
              <ion-item class="otp-input" lines="none">
                <ion-input class="input-label" #otp6 required maxLength="1" @keyup="otpController($event,'','otp5')"></ion-input>
              </ion-item>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="6" size-md="3" size-xl="2">
            <div class="ion-text-end">
              <ion-button
                color="primary"
                fill="clear"
                :href="href"
                @click.prevent="navigate"
              >
                Resend
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="no-style fade-to-bottom">
      <ion-grid class="align-content-center">
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              type="submit"
            >
              Create Account
            </ion-button>
          </ion-col>
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
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: ""
    };
  },

  methods: {
    otpController(event,next,prev){
      if(event.target.value.length < 1 && prev){
        document.getElementById(prev).focus();
      }
      else if(next && event.target.value.length>0){
        document.getElementById(next).focus();
      }
      else {
        return 0;
      } 
    },
  },

  mixins: [UserData]
};
</script>
<style lang="scss" scoped>
ion-content {
  background-position-x: 10%;
}
.form ion-grid {
  --ion-grid-column-padding: 8px;
}
.otp-input {
  width: 46px;
  border-radius: 100%;
  border-color:#000;

  .input-label {
    color: #9B51E0;
    font-weight: 900;
    font-size: 20px;
  }
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
