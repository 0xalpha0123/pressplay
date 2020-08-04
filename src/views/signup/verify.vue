<template>
  <form class="ion-page">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-between">
        <ion-row class="ion-justify-content-center ion-align-items-start">
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
        <div class="verification_part">
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size="12" size-md="6" size-xl="4">
              <div class="ion-text-center">
                <ion-text class="phone_number_heading">
                  type the verification code sent to: <br/>
                </ion-text>
                <ion-text class="phone_number_text">
                  44444444
                </ion-text>
              </div>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-between ion-padding-start ion-padding-end phone_code_container">
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
          </ion-row>
          <ion-row class="ion-justify-content-end ion-margin-top ion-align-items-center">
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
          </ion-row>
        </div>
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
            >
              Play On
            </ion-button>
            <h4>Verify by Email</h4>
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
.verification_part{
  width: 100%;
}
.phone_number_heading{
  font-size: 16px;
  line-height: 19px;
  color: #E49062;
}
.phone_number_text{
  color: #F2C94C;
  font-size: 24px;
  line-height: 33px;
  font-weight: bold;
}
.phone_code_container{
  margin-top: 32px;
  ion-item{
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
    width: 32%;
    height: 100%;
    background: linear-gradient(117.29deg, #471B74 0.35%, #713682 80.95%, #AA2986 98.89%);
    border-radius: 10px;
  }
}
.otp-input {
  width: 46px;
  height: 46px;
  border-radius: 100%;
  border-color:#000;

  .input-label {
    color: #9B51E0;
    font-weight: 900;
    font-size: 20px;
  }
}
ion-footer h4{
  color: #E49062;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
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
