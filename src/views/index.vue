<template>
  <ion-page>
    <ion-content class="purple-radial-gradient">
      <ion-grid class="align-content-center" fixed>
        <ion-row class="ion-justify-content-center ion-align-items-center">
          <ion-col size="12" size-md="6" size-xl="4">
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
                      <p class="slide-text">
                       we’ll connect you to yourself and others through the universal language of music
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
                <ion-slide>
                  <div class="ion-padding-vertical">
                    <img src="@/assets/images/image1.svg" />
                    <ion-text class="intro-text" color="light">
                      <h2>
                        Build your SongStory
                      </h2>
                      <p class="slide-text">
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
                      <p class="slide-text">
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
                      <p class="slide-text">
                        Bye bye, small-talk. No more scraping for a topic when you’re Matched by Music. And if words fail? Say it in a song
                      </p>
                    </ion-text>
                  </div>
                </ion-slide>
              </ion-slides>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-row class="footer">
        <div class="footer_banner">
          <img src="@/assets/images/footer_back.png" class="footer_back" />
          <div class="footer_white" />
        </div>
        <ion-col size="12" size-md="6" size-xl="4">
          <router-link :to="{ name: 'signup' }" v-slot="{ href, navigate }">
            <ion-button
              :href="href"
              class="bright-horizontal-gradient"
              expand="block"
              size="large"
              @click="navigate"
              >LET’S GET STARTED</ion-button
            >
          </router-link>
          <router-link :to="{ name: 'login' }">
            <h3 class="login_button">i already have an account...</h3>
          </router-link>
        </ion-col>
      </ion-row>
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

<style lang="scss" scoped>
  ion-slides{
    height: 600px;
  }
  .footer{
    position: relative;
    padding: 0 20px;
    ion-button{
      --box-shadow: none;
    }
  }
  .footer_white{
    height: 60px;
    width: 100%;
    background: white;
    margin-top: -10px;
  }
  .footer_banner{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .login_button{
    float: right;
    margin-top: 4px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.08em;
    color: #5D148C;
  }
  .slide-text{
    width: 75%;
    margin: auto;
    font-size: 18px;
    line-height: 21px;
    strong{
      color: #F5DE79;
    }
  }
</style>