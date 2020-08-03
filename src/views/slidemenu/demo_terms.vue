<template>
  <ion-page>
    <div class="background">
      <ion-row class="menu_container ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-between">
        <icon name="options" size="large" />
        <h4>terms & conditions</h4>
        <div @click="toggleMenubar()">
          <icon name="menu" size="large" />
        </div>
      </ion-row>
    </div>
    <ion-row class="term_tabs">
      <ion-col size="6">
        <h3 v-bind:class="{ active: terms_tab === 'terms'}" @click="check_terms_tab('terms')">terms & conditions</h3>
      </ion-col>
      <ion-col size="6">
        <h3 v-bind:class="{ active: terms_tab === 'privacy'}" @click="check_terms_tab('privacy')">privacy policy</h3>
      </ion-col>
    </ion-row>
    <div class="message_container">
      <ion-list class="message_list">
        <ion-item v-for="(term, m_index) in active_terms" v-bind:key="m_index">
          <div class="message_content">
            <p>
              {{ term }}
            </p>
          </div>
          <div @click="setting_function(m_index)" slot="end">
            <icon name="c-play" size="large" />
          </div>
        </ion-item>
      </ion-list>
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
      active_terms: [],
      terms_tab: ''
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
  mounted() {
    this.check_terms_tab('terms');
  },
  methods: {
    toggleMenubar() {
      document.querySelector("ion-menu-controller").open("end");
    },
    check_terms_tab(str) {
      this.terms_tab = str;
      if(str === 'terms') {
        this.active_terms = ['Press Play rules', 'types of content', 'restrictions on the app', 'privacy', 'third party stores; premium services; in-app purchases', 'push notifications; location-based features', 'disclaimer', 'indemnity', 'digital mellennium copyright act', 'third party app store', 'miscellaneous', 'about us'];
      }else{
        this.active_terms = ['collection of information', 'use of information', 'disclosure of information', 'what others may see about you', 'modifying your registration information', 'our policy towards age', 'changes to this policy', 'security', 'third party accounts', 'your california privacy rights', 'your UK and EU rights', 'about us'];
      }
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
  .term_tabs{
    h3{
      color: #9B51E0;
      font-size: 16px;
      padding: 8px 0;
      text-align: center;
      &.active{
        border: 1px solid #CF9BFF;
        border-radius: 50px;
      }
    }
  }
  .message_container{
    margin: 8px 0 16px;
    height: 100%;
    position: relative;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    .message_list{
      width: 100%;
      height: 100%;
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
