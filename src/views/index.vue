<template>
  <ion-page>
    <ion-content class="purple-radial-gradient">
      <ion-grid class="align-content-center" fixed>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="8">
            <aspect-ratio
              ratio="32:35"
              ratio-md="16:9"
              ratio-lg="2:1"
              class="ion-justify-content-center ion-align-items-center soundbar-bg ion-padding"
            >
              <h1>
                <router-link :to="{ name: 'home' }" v-slot="{ href }">
                  <a :href="href" title="Go to PressPlay Home">
                    <i class="img logo-vertical-contrast">
                      <u>PressPlay</u>
                    </i>
                  </a>
                </router-link>
              </h1>
            </aspect-ratio>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <div class="ion-padding-vertical ion-text-center">
              <ion-text class="intro-text" color="light">
                <p class="text-large">
                  Connect with people through the universal languages of music,
                  love, and friendship
                </p>
              </ion-text>
            </div>
            <div class="ion-text-center">
              <ion-slides class="white-butllet" pager="true">
                <ion-slide>
                  <div class="ion-padding-vertical">
                    <aspect-ratio
                      ratio="32:35"
                      ratio-md="16:9"
                      ratio-lg="2:1"
                      class="ion-justify-content-center ion-align-items-center soundbar-bg ion-padding"
                    >
                      <h1>
                        <router-link :to="{ name: 'home' }" v-slot="{ href }">
                          <a :href="href" title="Go to PressPlay Home">
                            <i class="img logo-vertical-contrast">
                              <u>PressPlay</u>
                            </i>
                          </a>
                        </router-link>
                      </h1>
                    </aspect-ratio>
                    <ion-text class="intro-text" color="light">
                      
                      <p class="text-large">
                       connect to yourself and others through the universal language of music
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
                <ion-slide>
                  <div class="ion-padding-vertical">
                    <ion-text class="intro-text" color="light">
                      <h2>
                        Build your SongStory
                      </h2>
                      <p class="text-large">
                        answering simple questions builds the <strong>Soundtrack of Your Life:</strong> a unique overview of your life and personality
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
                <ion-slide>
                  <div class="ion-padding-vertical">
                    <ion-text class="intro-text" color="light">
                      <h2>
                        Find your SongMate
                      </h2>
                      <p class="text-large">
                        a variety of filters allows you to find others whose story aligns with yours - next door, or across the globe
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
                <ion-slide>
                  <div class="ion-padding-vertical">
                    <ion-text class="intro-text" color="light">
                      <h2>
                        Press Play to Connect
                      </h2>
                      <p class="text-large">
                        Bye bye, small-talk. No more scraping for a topic when you’re Matched by Music. And if words fail? Say it in a song
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
              </ion-slides>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
            <router-link :to="{ name: 'signup' }" v-slot="{ href, navigate }">
              <ion-button
                :href="href"
                class="bright-horizontal-gradient"
                expand="block"
                size="large"
                @click="navigate"
                >Join in</ion-button
              >
            </router-link>
            <router-link :to="{ name: 'login' }" v-slot="{ href, navigate }">
              <ion-button
                :href="href"
                class="ion-margin-top"
                color="light"
                expand="block"
                size="large"
                @click="navigate"
                >Sign In</ion-button
              >
            </router-link>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  watch: {
    user(auth) {
      // If user authenticated, move to profile
      if (auth) {
        this.$router.replace({ name: "profile" });
      }
    }
  },

  mounted() {},

  computed: {
    ...mapGetters({ user: "User/user" })
  }
};
</script>
