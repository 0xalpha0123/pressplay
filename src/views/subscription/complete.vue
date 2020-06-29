<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="background">
        <img src="../../assets/images/ga-ticket.png" v-if="$route.params.plan_option === 0" />
        <img src="../../assets/images/vip-badge.png" v-if="$route.params.plan_option === 1" />
        <img src="../../assets/images/rock-star.png" v-if="$route.params.plan_option === 2" />
      </div>
      <img src="../../assets/images/footer_back.png" class="footer_back" />
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
          color: "tran"
        }
      });
      this.$set(this.$navigator.layout, "header", header);
      this.$set(this.$navigator.layout, "sidebar", sidebar);
    }
  }
}
</script>

<style lang="scss" scoped>
.background{
  background: radial-gradient(90.14% 73.52% at 50% 27.42%, #AA2986 0%, #751A8A 27.08%, #5D148C 66.15%, #471B74 100%);
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
}
.footer_back{
  position: absolute;
  bottom: 63px;
}
</style>