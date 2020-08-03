<template>
  <ion-page>
    <div class="background">
      <ion-row class="menu_container ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-between">
        <icon name="options" size="large" />
        <h4>settings</h4>
        <div @click="toggleMenubar()">
          <icon name="menu" size="large" />
        </div>
      </ion-row>
    </div>
    <div class="message_container">
      <ion-list class="message_list">
        <ion-item v-for="(setting, m_index) in settings" v-bind:key="m_index">
          <div class="message_content">
            <p>
              {{ setting }}
            </p>
          </div>
          <div @click="setting_function(m_index)" slot="end">
            <icon name="c-play" size="large" />
          </div>
        </ion-item>
      </ion-list>
    </div>
    <ion-button class="delete_account" size="large">Delete Account</ion-button>
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
        'account info', 'login methods', 'edit profile', 'verification', 'privacy', 'notifications', 'seeking'
      ]
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
  .message_container{
    margin-top: 8px;
    height: 100%;
    position: relative;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .message_list{
      width: 100%;
      overflow: auto;
      ion-item{
        .message_content{
          margin: 15px 10px 12px;
          p{
            margin: 5px 0 0;
            color: #828282;
            font-size: 15px;
            font-weight: bold;
          }
        }
      }
    }
  }
  .delete_account{
    --background: linear-gradient(270deg, #F5DE79 0%, #F2C94C 35.94%, #E49062 100%);
    --box-shadow: none;
    margin: 16px 12px;
  }
</style>
