<template>
  <form class="ion-page">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-space-between">
        <ion-row>
          <img src="@/assets/images/signup_2.png" />
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="no-style fade-to-bottom">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              type="submit"
            >
              <ion-spinner
                v-if="savingProfile || savingSetup"
                slot="start"
              ></ion-spinner>
              Continue
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  </form>
</template>
<script>
import GenderIcon from "@/components/gender/icon.vue";
import SettingsGender from "@/components/settings/gender.vue";

import Gender from "@/mixins/gender.js";
import UserData from "@/mixins/userData.js";

export default {
  next: "signup.seeking",

  created() {
    this.$on("profileSaved", function(saved) {
      if (saved) {
        this.saveSetup();
      }
    });
  },

  watch: {
    "userData.profile": {
      handler: function(profile) {
        if (profile.gender.identity == "none") {
          this.userData.profile.gender.expression = "none";
          this.userData.profile.gender.orientation = "none";
          this.userData.profile.gender.pronoun = "ambiguous";
        }
      },
      deep: true
    }
  },

  methods: {
    async setIdentitySwiperOptions() {
      const swiper = await this.$refs.identitySlides.getSwiper();
      Object.assign(swiper.params, this.slideOpts);
      await swiper.update();
    },

    async setOrientationSwiperOptions() {
      const swiper = await this.$refs.orientationSlides.getSwiper();
      Object.assign(swiper.params, this.slideOpts);
      await swiper.update();
    },

    setGenderIdentity(gender) {
      this.userData.profile.gender.identity = gender;
    },

    setGenderExpression(expression) {
      this.userData.profile.gender.expression = expression;
    },

    setGenderOrientation(orientation) {
      this.userData.profile.gender.orientation = orientation;
    },

    setGenderPronoun(pronoun) {
      this.userData.profile.gender.pronoun = pronoun;
    }
  },

  computed: {
    identitySelected() {
      return (
        this.userData.profile.gender.identity !== "" &&
        this.userData.profile.gender.identity !== "none"
      );
    },
    expressionSelected() {
      return this.userData.profile.gender.expression !== "";
    },
    pronounSelected() {
      return this.userData.profile.gender.pronoun !== "";
    },
    orientationSelected() {
      return this.userData.profile.gender.orientation !== "";
    },
    slideOpts() {
      return {
        slidesPerView: 3,
        spaceBetween: 8,
        centeredSlides: true,
        centeredSlidesBounds: true
      };
    }
  },

  components: {
    GenderIcon,
    SettingsGender
  },

  mixins: [Gender, UserData]
};
</script>
<style lang="scss" scoped>
ion-grid {
  padding: 0;
  img {
    width: 100%;
  }
}
</style>
