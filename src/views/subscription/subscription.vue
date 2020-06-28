<template>
  <ion-page>
    <ion-content fullscreen>
      <aspect-ratio
        class="profile-banner"
        ratio="16:9"
        ratio-md="16:5"
        ref="profileBanner"
      ></aspect-ratio>
      <div class="subscription_plan">
        <h3>you're meant to be...</h3>
        <ion-slides :options="slideOpts" @ionSlideDidChange="change_plan">
          <ion-slide value="slide1">
            <h1>GA</h1>
          </ion-slide>
          <ion-slide value="slide2">
            <h1>VIP</h1>
          </ion-slide>
          <ion-slide>
            <h1>RockStar</h1>
          </ion-slide>
        </ion-slides>
      </div>
      <div class="subscription_content">
        <ion-row class="ion-justify-content-center ion-margin-top">
          <h2>song story</h2>
          <icon
            class="songstory-cat-icon ion-margin-start ion-margin-end"
            :name="`c-songstory`"
          ></icon>
          <h2>high notes</h2>
        </ion-row>
        <ion-list>
          <ion-item>
            <h3><icon name="checkmark-circle"></icon>Unlimited Answers</h3>
          </ion-item>
          <ion-item>
            <h3><icon name="checkmark-circle"></icon>Submit Questions</h3>
          </ion-item>
          <ion-item>
            <h3><icon name="checkmark-circle"></icon>View cleared questions</h3>
          </ion-item>
          <ion-item>
            <h3><icon :name="plan_option == 2 ? 'checkmark-circle' : 'close-circle'"></icon>Rock me vault</h3>
          </ion-item>
        </ion-list>
        <ion-row class="ion-justify-content-center ion-margin-top">
          <div v-for="(i, k) in [1,2,3]" :key="k" class="dot" v-bind:class="{active: k===plan_option}" />
        </ion-row>
      </div>
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              type="submit"
            >
              Save
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
      plan_option: 0,
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
  methods: {
    change_plan(evt) {
      evt.target.getActiveIndex().then(i => {
        this.plan_option = i
      });
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
.subscription_plan {
  text-align: center;
  margin-top: -180px;
  h3{
    font-size: 24px;
    color: white;
  }
}
.title {
  text-align: center;
}
.dot{
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background: #ddd;
  margin-right: 6px;
  &:last-child{
    margin-right: 0;
  }
  &.active{
    background: #dd0;
  }
}
ion-slides {
  width: 100%;
  color: white
}
</style>
