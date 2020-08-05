<template>
  <form class="ion-page" @submit.prevent="saveProfile">
    <ion-content color="transparent" fullscreen>
      <ion-grid class="align-content-between">
        <ion-row class="ion-justify-content-center">
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size="12" size-md="6" size-lg="4">
              <ion-text color="light" class="ion-text-center">
                <h1 class="heading">getting to know you...</h1>
              </ion-text>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size="12" size-md="6" size-lg="4">
              <avatar-editor
                size="xl"
                @uploadingAvatar="updateUploadingAvatar"
              ></avatar-editor>
            </ion-col>
          </ion-row>
        </ion-row>
        <ion-row class="profile_form ion-justify-content-center ion-align-items-center">
          <ion-col size="6" size-md="6" size-lg="4">
            <ion-item lines="none">
              <ion-label position="stacked">
                Birthdate
              </ion-label>
              <ion-input
                required
                type="date"
                :value="userData.profile.birthdate"
                @ionInput="userData.profile.birthdate = $event.target.value"
              ></ion-input>
            </ion-item>
          </ion-col>
          <ion-col size="6">
            <location-search
              :input-props="{
                required: true,
                placeholder: 'Search by zip code, place, or address'
              }"
              :label-props="{ position: 'stacked' }"
              lines="none"
              :locate="true"
              search-types="postcode,place,locality,address"
              :value="userData.profile.location.text"
              @selected="setLocation"
            ></location-search>
          </ion-col>
          <ion-col size="12">
            <ion-item lines="none">
              <ion-textarea
                rows="4"
                placeholder="brief bio..."
                :value="userData.profile.bio"
                @ionInput="userData.profile.bio = $event.target.value"
              ></ion-textarea>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer class="no-style">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-button
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              @click="gotoGender"
              :disabled="savingProfile || !validBasics"
            >
              <ion-spinner
                v-if="savingProfile || savingSetup"
                slot="start"
              ></ion-spinner>
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
import AvatarEditor from "@/components/avatar/editor.vue";
import LocationSearch from "@/components/location/search.vue";

import UserData from "@/mixins/userData.js";

export default {
  data() {
    return {
      uploadingAvatar: false
    };
  },

  created() {
    this.$on("profileSaved", function(saved) {
      if (saved) {
        this.saveSetup();
      }
    });
  },

  methods: {
    updateUploadingAvatar(value) {
      this.uploadingAvatar = value;
    },
    gotoGender() {
      this.$router.push({ name: 'signup.gender' })
    }
  },

  components: {
    AvatarEditor,
    LocationSearch
  },

  mixins: [UserData]
};
</script>

<style lang="scss" scoped>
.signup-bg {
  background-position-x: 48%;
}
.heading{
  margin-top: 48px;
  font-size: 27px;
}
.profile_form ion-item{
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
  border-radius: 44px;
}
.horizontal_bar{
  .bar_inner{
    width: 64%;
  }
}
</style>
