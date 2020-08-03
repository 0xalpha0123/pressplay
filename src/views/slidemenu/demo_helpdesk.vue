<template>
  <ion-page>
    <div class="background">
      <ion-row class="menu_container ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-between">
        <icon name="options" size="large" />
        <h4>help desk</h4>
        <div @click="toggleMenubar()">
          <icon name="menu" size="large" />
        </div>
      </ion-row>
    </div>
    <h1 class="helpdesk_heading">need somebody?</h1>
    <ion-button class="delete_account">contact us</ion-button>
    <div class="message_container">
      <ion-list class="message_list">
        <ion-item v-for="(setting, m_index) in settings" v-bind:key="m_index">
          <ion-row class="message_content">
            <icon :name="'c-'+setting.icon" size="large" />
            <p>
              {{ setting.text }}
            </p>
          </ion-row>
          <ion-row v-if="m_index === 0" class="ion-align-items-center" slot="end">
            <h3 class="toggle_flag">{{ practice_flag ? 'on' : 'off' }}</h3>
            <div @click="toggle_practice()" v-bind:class="{ active: practice_flag }" class="toggle_container">
              <div class="toggler" />
            </div>
          </ion-row>
          <div @click="setting_function(m_index)" slot="end" v-if="m_index > 0">
            <icon name="c-play" size="large" />
          </div>
        </ion-item>
      </ion-list>
    </div>
    <div class="modal_overlay" v-if="practice_dialog || request_dialog || glitch_dialog || feedback_dialog || report_dialog" @click="close_dialog" />
    <div class="message_modal practice_dialog" v-if="practice_dialog">
      <div class="modal_content">
        <h4>practice guide</h4>
        <p>You’ll be billed on the 22nd of each month. You can cancel whenever.<br/><br/>You’re gonna have a good time!</p>
        <div class="button_part">
          <h5>rewind</h5>
          <ion-button shape="round" color="primary" @click="practice_on">play on</ion-button>
        </div>
      </div>
    </div>
    <div class="message_modal request_dialog" v-if="request_dialog">
      <div class="modal_content">
        <h4>request a lesson</h4>
        <p>It’s our goal to create an experience that is both innovative and intuitive. We’re building our help library to outline tips and tricks for getting the most out of Press Play.<br/><br/>Tell us below if there’s anything you think we should include.</p>
        <ion-textarea placeholder="how do i...?" rows="3" />
        <ion-row class="terms_accept ion-align-items-center">
          <div class="checkbox_container">
            <icon name="checkmark" color="light" />
          </div>
          <span>I would like a personal walkthrough</span>
        </ion-row>
        <div class="button_part">
          <h5>rewind</h5>
          <ion-button shape="round" color="primary">submit</ion-button>
        </div>
      </div>
    </div>
    <div class="message_modal glitch_dialog" v-if="glitch_dialog">
      <div class="modal_content">
        <h4>announce a glitch</h4>
        <p>It’s our goal to create an experience that is both innovative and intuitive. We’re building our help library to outline tips and tricks for getting the most out of Press Play.<br/><br/>Tell us below if there’s anything you think we should include.</p>
        <ion-textarea placeholder="how do i...?" rows="3" />
        <ion-row class="terms_accept ion-align-items-center">
          <div class="checkbox_container">
            <icon name="checkmark" color="light" />
          </div>
          <span>I would like a personal walkthrough</span>
        </ion-row>
        <div class="button_part">
          <h5>rewind</h5>
          <ion-button shape="round" color="primary">submit</ion-button>
        </div>
      </div>
    </div>
    <div class="message_modal feedback_dialog" v-if="feedback_dialog">
      <div class="modal_content">
        <h4>share feedback</h4>
        <p>We so appreciate you taking the time to help us be the best we can be. Your answers are always confidential.</p>
        <h5>Overall Impression</h5>
        <ion-row class="feedback_row">
          <icon name="c-happy-icon" />
          <ion-range pin="true"></ion-range>
          <icon name="c-sad-icon" />
        </ion-row>
        <ion-textarea placeholder="we're listening..." rows="3" />
        <p class="other_para">What would you <i><b>love</b></i> to see on Press Play?</p>
        <ion-textarea rows="2" />
        <div class="button_part">
          <h5>rewind</h5>
          <ion-button shape="round" color="primary">submit</ion-button>
        </div>
      </div>
    </div>
    <div class="message_modal report_dialog" v-if="report_dialog">
      <div class="modal_content">
        <h4>report abuse</h4>
        <p>It’s our goal to create an experience that is both innovative and intuitive. We’re building our help library to outline tips and tricks for getting the most out of Press Play.<br/><br/>Tell us below if there’s anything you think we should include.</p>
        <ion-textarea placeholder="how do i...?" rows="3" />
        <ion-row class="terms_accept ion-align-items-center">
          <div class="checkbox_container">
            <icon name="checkmark" color="light" />
          </div>
          <span>I would like a personal walkthrough</span>
        </ion-row>
        <div class="button_part">
          <h5>rewind</h5>
          <ion-button shape="round" color="primary">submit</ion-button>
        </div>
      </div>
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
      practice_flag: false,
      practice_dialog: false,
      request_dialog: false,
      glitch_dialog: false,
      feedback_dialog: false,
      report_dialog: false
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
      if(this.practice_flag === true){
        this.practice_flag = false;
      } else {
        this.practice_dialog = true;
      }
    },
    practice_on() {
      this.practice_flag = true;
      this.practice_dialog = false;
    },
    toggleMenubar() {
      document.querySelector("ion-menu-controller").open("end");
    },
    setting_function(index) {
      if(index === 1) {
        this.request_dialog = true;
      } else if(index === 2) {
        this.glitch_dialog = true;
      } else if(index === 3) {
        this.feedback_dialog = true;
      } else if(index === 4) {
        this.report_dialog = true;
      }
    },
    close_dialog() {
      this.practice_dialog = false;
      this.request_dialog = false;
      this.glitch_dialog = false;
      this.feedback_dialog = false;
      this.report_dialog = false;
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
  .modal_overlay {
    background: rgb(255, 255, 255);
    opacity: 0.4;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .message_modal{
    background: white;
    box-shadow: 0px 1px 8px #333333;
    border-radius: 25px;
    width: 90%;
    position: absolute;
    top: 100px;
    left: 5%;
    padding: 24px;
    .modal_content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .button_part{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      h5{
        color: #5D148C;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .feedback_row{
      width: 100%;
      ion-icon{
        font-size: 46px;
      }
      ion-range{
        padding: 0;
        margin: 0 8px;
        --bar-background: rgba(61, 131, 251, 0.3);
        --bar-background-active: #3D83FB;
        --bar-height: 2px;
      }
    }
    .terms_accept{
      width: 100%;
      margin-top: 16px;
      span{
        margin-left: 10px;
        font-size: 14px;
        color: #4F4F4F;
      }
    }
    ion-textarea{
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
      border-radius: 25px;
      padding: 12px;
    }
    h4, h5{
      width: 100%;
      margin-top: 0;
      margin-bottom: 0;
      color: #333333;
      font-size: 24px;
      font-weight: bold;
    }
    h5{
      font-size: 20px;
      margin-top: 12px;
    }
    p{
      margin-top: 8px;
      color: #737373;
      font-size: 16px;
      line-height: 19px;
      width: 100%;
    }
    p.other_para{
      color: #4F4F4F;
      font-size: 14px;
      margin: 16px 0 8px;
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
  .toggle_container{
    width: 36px;
    height: 15px;
    border-radius: 8px;
    background: #ccc;
    position: relative;
    &.active{
      background: linear-gradient(270deg, #FF26A8 0%, #F2C94C 100%);
      .toggler{
        right: 0;
        left: auto;
      }
    }
    .toggler{
      width: 23px;
      height: 23px;
      border-radius: 12px;
      top: -5.5px;
      left: 0;
      position: absolute;
      background: #FFFFFF;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
    }
  }
  .helpdesk_heading{
    color: #4F4F4F;
    font-size: 27px;
    text-align: center;
    margin-top: 48px;
  }
  .message_container{
    margin-top: 8px;
    height: 100%;
    position: relative;
    background: white;
    .message_list{
      width: 100%;
      overflow: auto;
      ion-item{
        .message_content{
          margin: 15px 10px 12px;
          p{
            margin: 5px 0 0 8px;
            color: #333333;
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
    width: 50%;
    margin: 16px 25%;
  }
  .toggle_flag{
    color: #BDBDBD;
    font-size: 20px;
    margin: 0 8px 0 0;
  }
  .checkbox_container{
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
