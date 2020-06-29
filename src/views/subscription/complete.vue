<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="background">
        <img
          src="../../assets/images/ga-ticket.png"
          v-if="$route.params.plan_option === 0"
        />
        <img
          src="../../assets/images/vip-badge.png"
          v-if="$route.params.plan_option === 1"
        />
        <img
          src="../../assets/images/rock-star.png"
          v-if="$route.params.plan_option === 2"
        />
        <h2>rock on!</h2>
        <p>you're in - let's get jammin'</p>
      </div>
      <img src="../../assets/images/footer_back.png" class="footer_back" />
      <ion-row class="buttons_container ion-align-items-center ion-justify-content-between">
        <h4>View Receipt</h4>
        <ion-button
          class="bright-horizontal-gradient"
        >
          Play
        </ion-button>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script>
import merge from "lodash/merge";
export default {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  background: radial-gradient(
    90.14% 73.52% at 50% 27.42%,
    #aa2986 0%,
    #751a8a 27.08%,
    #5d148c 66.15%,
    #471b74 100%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  img {
    width: 200px;
    margin-top: 50px;
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 29px;
    font-weight: bold;
    color: #fff;
  }
  p {
    margin: 5px 0;
    font-size: 16px;
    font-weight: bold;
    color: #F2C94C;  
  }
}
.footer_back {
  position: absolute;
  bottom: 63px;
}
.buttons_container {
  position: absolute;
  bottom: 75px;
  width: 100%;
  padding: 0 30px;
  h4 {
    margin: 0;
    color: var(--ion-color-primary);
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
  }
  ion-button {
    text-transform: uppercase;
  }
}
</style>
