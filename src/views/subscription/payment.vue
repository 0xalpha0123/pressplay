<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="subscription_content">
        <img src="../../assets/images/ga-ticket.png" v-if="$route.params.plan_option === 0" />
        <img src="../../assets/images/vip-badge.png" v-if="$route.params.plan_option === 1" />
        <img src="../../assets/images/rock-star.png" v-if="$route.params.plan_option === 2" />
        <ion-row class="ion-justify-content-center">
          <h2><b>${{$route.params.plan_price}}</b> billed today</h2>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-margin-top" v-if="$route.params.plan_option !== 0">
          <ion-button v-for="(period, i) in ['weekly', 'monthly', 'quarterly']" :key="i" :fill="plan_period === period ? 'outline' : 'clear'" @click="set_plan_period(period)">
            {{ period }}
          </ion-button>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-input
              autocapitalize="on"
              enterkeyhint="done"
              placeholder="Cardholder name"
              minlength="1"
              maxlength="35"
              required
              type="text"
              :value="card_info.name"
              @ionChange="card_info.name = $event.target.value"
            ></ion-input>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12">
            <ion-input
              autocapitalize="on"
              enterkeyhint="done"
              placeholder="Card number"
              minlength="1"
              maxlength="35"
              required
              type="text"
              :value="card_info.number"
              @ionChange="card_info.number = $event.target.value"
            ></ion-input>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-input
              autocapitalize="on"
              enterkeyhint="done"
              placeholder="Exp"
              minlength="1"
              maxlength="35"
              required
              type="text"
              :value="card_info.exp"
              @ionChange="card_info.exp = $event.target.value"
            ></ion-input>
          </ion-col>
          <ion-col size="6">
            <ion-input
              autocapitalize="on"
              enterkeyhint="done"
              placeholder="CVV"
              minlength="1"
              maxlength="35"
              required
              type="text"
              :value="card_info.cvv"
              @ionChange="card_info.cvv = $event.target.value"
            ></ion-input>
          </ion-col>
        </ion-row>
        <p>
          <icon
            name="lock-closed-outline"
            color="primary"
          ></icon>
          <span>Your payment is secure and confidential</span>
        </p>
      </div>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              @click="show_subscription_alert"
            >
              Subscribe
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import merge from "lodash/merge";
export default {
  layout: {
    header: {
      class: "no-style-lg-down"
    },
    content: {
      fullscreen: true
    },
    menubar: {
      navPosition: "bottom"
    },
  },
  data() {
    return {
      slideOpts: {
        initialSlide: 1,
        speed: 400
      },
      plan_type: ['GA', 'VIP', 'RockStar'],
      plan_period: 'weekly',
      card_info: {
        name: '', number: '', exp: '', cvv: ''
      }
    };
  },
  watch: {
    "$navigator.windowWidth": {
      handler: function(windowWidth) {
        let vm = this;
        // Handle navigator layout
        if (windowWidth <= 992) {
          vm.$nextTick().then(() => {
            vm.setLayoutVars();
          });
        } else {
          vm.$nextTick().then(() => {
            vm.removeLayoutVars();
          });
        }
      },
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    setLayoutVars() {
      let header = merge(this.$navigator.layoutVars.header, {
        class: "no-style-lg-down",
        title: {
          color: "primary",
          text: this.plan_type[this.$route.params.plan_option]  + " Subscription"
        },
        toolbar: {
          icon: {
            name: 'back'
          }
        }
      });
      let sidebar = merge(this.$navigator.layoutVars.sidebar, {
        icon: {
          color: "primary"
        }
      });
      this.$set(this.$navigator.layout, "header", header);
      this.$set(this.$navigator.layout, "sidebar", sidebar);
      this.$navigator.$refs.app.style.setProperty("--content-height", "100vh");
      this.$navigator.$refs.header.style.setProperty("position", "absolute");
    },
    set_plan_period(period){
      this.plan_period = period
    },
    show_subscription_alert(){
      return this.$ionic.alertController
        .create({
          cssClass: 'subscription_dialog',
          header: 'Confirm Subscription',
          message: 'You’ll be billed on the 22nd of each month. You can cancel whenever. <br/><br/> You’re gonna have a good time!',
          buttons: [
            {
              text: 'Return',
              role: 'cancel',
              cssClass: 'return_button',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Continue',
              cssClass: 'confirm_button',
              handler: () => {
                console.log('Confirm Okay')
              },
            },
          ],
        })
        .then(a => a.present())
    }
  }
};
</script>

<style lang="scss" scoped>
.subscription_content {
  text-align: center;
  img {
    width: 100px;
    margin-top: 60px;
  }
  ion-input {
    text-align: left;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #ddd;
    border-radius: 30px;
    padding: 0 5px !important;
    color: gray;
  }
  p{
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon{
      font-size: 20px;
    }
    span {
      font-size: 14px;
      margin-left: 2px;
      color: gray;
      letter-spacing: 0.5px;
    }
  }
}
</style>
