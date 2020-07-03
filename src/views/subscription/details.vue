<template>
  <ion-page>
    <ion-content fullscreen>
      <aspect-ratio
        class="profile-banner"
        ratio="16:9"
        ratio-md="16:5"
        ref="profileBanner"
      ></aspect-ratio>
      <ion-row class="subscription_card">
        <img
          src="../../assets/images/ga-ticket.png"
          v-if="current_subscription.plan_option === 0"
        />
        <img
          src="../../assets/images/vip-badge.png"
          v-if="current_subscription.plan_option === 1"
        />
        <img
          src="../../assets/images/rock-star.png"
          v-if="current_subscription.plan_option === 2"
        />
        <div class="subscription_card_content">
          <h1>{{ current_subscription.plan_option === 0 ? 'GA ' : current_subscription.plan_option === 1 ? 'VIP ' : 'RockStar' }} Member</h1>
          <h3>Renews {{ (new Date(current_subscription.date.seconds * 1000)).getMonth() + 1 }}.{{ (new Date(current_subscription.date.seconds * 1000)).getDate() }}.{{ (new Date(current_subscription.date.seconds * 1000)).getFullYear() }}</h3>
          <ion-row>
            <ion-col size="6">2/3</ion-col>
            <ion-col size="6">2/5</ion-col>
            <ion-col size="6">8/10</ion-col>
            <ion-col size="6">11/60</ion-col>
          </ion-row>
        </div>
      </ion-row>
      <ion-row class="gift_subscription">
        <img
          src="../../assets/images/md-gift.png"
        />
        <span>gift subscription</span>
      </ion-row>
      <div class="payment_info">
        <h3>Payment Info</h3>
        <ion-row class="ion-justify-content-between payment_info_content">
          <h2>Visa ...1234</h2>
          <p>update</p>
        </ion-row>
      </div>
      <div class="billing_history">
        <h3>Billing History</h3>
        <ion-row v-for="(plan, index) in subscriptions" v-bind:key="index">
          <h4> {{ new Date(plan.date.seconds * 1000).getMonth() + 1 }}.{{ new Date(plan.date.seconds * 1000).getDate() }}.{{ new Date(plan.date.seconds * 1000).getFullYear().toString().substring(2) }}</h4>
          <h5>{{ subscription_plan[plan.plan_option] }} Subscription {{ plan.plan_option === 0 ? 'Free' : plan.plan_price }}</h5>
          <p>View</p>
        </ion-row>
        <h2 v-if="subscriptions.length > 3">View more</h2>
      </div>
      <ion-row class="buttons_container ion-align-items-center ion-justify-content-between">
        <ion-col size="12" size-md="6">
          <ion-button
            class="bright-horizontal-gradient"
            expand="block"
            size="large"
            @click="change_subscription_plan"
          >
            Change Subscription
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script>
import merge from "lodash/merge";
export default {
  data() {
    return {
      subscriptions: [],
      subscription_plan: ['GA', 'VIP', 'RockStar']
    }
  },
  computed: {
    current_subscription: {
      get() {
        return this.subscriptions[this.subscriptions.length - 1]
      }
    }
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
    this.$store.dispatch("Subscription/getSubscription").then(res => {
      this.subscriptions = res.subscriptions;
    })
  },
  methods: {
    setLayoutVars() {
      let header = merge(this.$navigator.layoutVars.header, {
        class: "no-style-lg-down",
        title: {
          color: "light"
        },
        toolbar: {
          color: "transparent"
        }
      });
      let sidebar = merge(this.$navigator.layoutVars.sidebar, {
        icon: {
          color: "light"
        }
      });
      this.$set(this.$navigator.layout, "header", header);
      this.$set(this.$navigator.layout, "sidebar", sidebar);
      this.$navigator.$refs.app.style.setProperty("--content-height", "100vh");
      this.$navigator.$refs.header.style.setProperty("position", "absolute");
    },
    change_subscription_plan() {
      this.$router.push({ name: 'subscription', params: { plan_option: this.current_subscription.plan_option }})
    }
  }
};
</script>

<style lang="scss" scoped>
.subscription_card {
  background: linear-gradient(171.01deg, #471B74 0.36%, #5D148C 56.93%, #AA2986 100%);
  box-shadow: 0px 0px 8px #9B51E0;
  border-radius: 23px;
  width: 90%;
  position: absolute;
  top: 55px;
  left: 5%;
  align-items: center;
  padding: 16px;
  img {
    width: 100px;
  }
  .subscription_card_content {
    margin-left: 16px;
    width: calc(100% - 116px);
    h1 {
      color: white;
      font-size: 30px;
      margin: 0;
      font-weight: bold;
    }
    h3 {
      color: #F5DE79;
      font-size: 15px;
      margin: 0;
    }
    ion-row {
      margin-top: 10px;
      color: white;
    }
  }
}
.gift_subscription {
  align-items: center;
  margin: 0 5%;
  justify-content: flex-end;
  img {
    margin-right: 5px;
  }
  span {
    color: #F2C94C;
    letter-spacing: 0.08em;
  }
}
.payment_info {
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  padding: 0 5%;
  h3 {
    font-size: 16px;
    color: #333333;
    margin-bottom: 0;
  }
  .payment_info_content {
    h2 {
      font-size: 15px;
      color: #4F4F4F;
    }
    p {
      font-size: 16px;
      letter-spacing: 0.08em;
      color: #E49062;
    }
  }
}
.billing_history {
  padding: 0 5%;
  h3 {
    font-size: 16px;
    color: #333333;
    margin-bottom: 0;
  }
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #5D148C;
    text-align: center;
  }
  ion-row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.13);
    justify-content: space-between;
    align-items: center;
    h4 {
      font-size: 20px;
      color: #BDBDBD;
    }
    h5 {
      font-size: 15px;
      color: #4F4F4F;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      letter-spacing: 0.08em;
      font-weight: bold;
      color: #5D148C;
    }
  }
  .buttons_container {
    margin-top: 10px;
  }
}
</style>
