<template>
  <ion-page>
    <div class="background">
      <ion-row class="menu_container ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-between">
        <icon name="options" size="large" />
        <h4>about</h4>
        <div @click="toggleMenubar()">
          <icon name="menu" size="large" />
        </div>
      </ion-row>
    </div>
    <div class="content">
      <img src="@/assets/logo/logo-about.svg" />
      <p class="about_heading">built for the love of music & connection by a tight-knit team of dreamers & doers.</p>
      <ion-button class="delete_account">credits</ion-button>
      <ion-row class="version_container">
        <h2>Version</h2>
        <h3>1.01.1</h3>
        <h4>upgrade</h4>
      </ion-row>
      <div class="copyright">
        <p>© 2020 SongMates LLC All Rights Reserved.</p>
        <i>The Press Play name, logo, and Music Lovers Unite® are trademarks of SongMates LLC.</i>
      </div>
      <ion-row class="social_logo">
        <icon name="c-social-icon" size="large" />
        <icon name="c-logo-facebook" size="large" />
        <icon name="c-logo-twitter" size="large" />
        <icon name="c-logo-instagram" size="large" />
      </ion-row>
    </div>
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
    search: {
      color: "light",
      show: true
    },
    menubar: {
      navPosition: "bottom"
    }
  },
  data() {
    return {
      settings: [
        {
          text: 'Practice Guide',
          icon: 'practice'
        },
        {
          text: 'Request a Lesson',
          icon: 'lesson'
        },
        {
          text: 'Announce a Glitch',
          icon: 'glitch'
        },
        {
          text: 'Share Feedback',
          icon: 'feedback'
        },
        {
          text: 'Report Abuse',
          icon: 'abuse'
        }
      ],
      practice_flag: false
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
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    toggle_practice() {
      this.practice_flag = !this.practice_flag;
    },
    toggleMenubar() {
      document.querySelector("ion-menu-controller").open("end");
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
  .about_heading{
    font-size: 14px;
    color: #4F4F4F;
    line-height: 140.62%;
    width: 80%;
    text-align: center;
  }
  .version_container{
    width: 80%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
    padding: 16px 0;
    h2, h3, h4{
      margin: 0;
      font-weight: bold;
    }
    h2{
      font-size: 20px;
      color: #BDBDBD;
    }
    h3{
      font-size: 15px;
      color: #4F4F4F;
    }
    h4{
      color: #5D148C;
      letter-spacing: 0.08em;
      font-size: 16px;
    }
  }
  .background {
    width: 100%;
    padding: 0 8px 16px;
    background: linear-gradient(172.22deg, #471B74 0.35%, #713682 80.95%, #AA2986 98.89%);
    border-radius: 0px 0px 0px 42px;
    .menu_container{
      width: 100%;
      margin-top: 16px;
      h4{
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }
      ion-icon{
        color: #E49062;
      }
    }
  }
  .delete_account{
    --background: linear-gradient(270deg, #F5DE79 0%, #F2C94C 35.94%, #E49062 100%);
    --box-shadow: none;
    width: 50%;
    margin: 16px 25%;
  }
  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copyright{
    color: #737373;
    text-align: center;
    margin-top: 16px;
    width: 80%;
    p{
      font-size: 14px;
    }
    i{
      font-size: 13px;
      line-height: 111%;
    }
  }
  .social_logo{
    margin-top: 16px;
    ion-icon{
      margin-right: 8px;
      &:last-child{
        margin-right:0;
      }
    }
  }
</style>
