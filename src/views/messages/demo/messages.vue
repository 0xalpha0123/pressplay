<template>
  <ion-page>
    <div class="background">
      <div class="friends_container">
        <div v-for="(songmate, index) in songmates" v-bind:key="index">
          <div class="platinum friend_item" v-if="songmate.type === 'platinum'">
            <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
          </div>
          <div class="favorite friend_item" v-if="songmate.type === 'favorite'">
            <img src="@/assets/images/favorite.png" class="heart" />
            <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
          </div>
        </div>
      </div>
    </div>
    <div class="message_container">
      <div class="message_heading">
        <h5>message requests</h5>
        <div class="request_count">2</div>
      </div>
      <ion-list class="message_list">
        <ion-item v-for="(message, m_index) in messages" v-bind:key="m_index" @click="gotoMessage">
          <div class="platinum friend_item" v-if="message.user.type === 'platinum'">
            <img class="avatar" :src="message.user.img || require('@/assets/images/avatar.png')" />
          </div>
          <div class="favorite friend_item" v-if="message.user.type === 'favorite'">
            <img src="@/assets/images/favorite.png" class="heart" />
            <img class="avatar" :src="message.user.img || require('@/assets/images/avatar.png')" />
          </div>
          <div class="message_content">
            <h1>
              <span>{{ message.user.name }}</span>
              <icon name="c-chatbox2" v-if="message.message.type==='chat'" />
              <icon name="c-mixtape2" v-if="message.message.type==='mixtape'" />
              <div class="singleicon-container" v-if="message.message.type==='song'"><icon name="c-singles" color="light" /></div>
            </h1>
            <p>
              {{ message.message.content.length > 20 ? message.message.content.substring(0, 20) + "..." : message.message.content }}
            </p>
          </div>
          <i>{{ message.message.time }}</i>
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
      songmates: [
        {
          img: require('@/assets/images/mira.png'),
          type: 'platinum'
        },
        {
          img: require('@/assets/images/mira_1.png'),
          type: 'platinum'
        },
        {
          img: require('@/assets/images/mira_3.png'),
          type: 'favorite'
        },
        {
          type: 'favorite'
        },
        {
          type: 'favorite'
        },
      ],
      messages: [
        {
          user: {
            img: require('@/assets/images/mira_3.png'),
            type: "favorite",
            name: "Caitlin A."
          },
          message: {
            type: "chat",
            content: "Have you tried Baby song?",
            time: "now",
          }
        },
        {
          user: {
            img: require('@/assets/images/mira_3.png'),
            type: "favorite",
            name: "Gabriel H."
          },
          message: {
            type: "mixtape",
            content: 'Send MixTape "I bone"',
            time: "2:22pm",
          }
        },
        {
          user: {
            img: require('@/assets/images/mira_3.png'),
            type: "favorite",
            name: "Rich T."
          },
          message: {
            type: "song",
            content: 'Sent "The Final CountDown"',
            time: "12:01pm",
          }
        },
        {
          user: {
            img: require('@/assets/images/mira.png'),
            type: "platinum",
            name: "Ocean A."
          },
          message: {
            type: "text",
            content: "How about a new lyrics?",
            time: "Sunday",
          }
        },
        {
          user: {
            img: require('@/assets/images/avatar.png'),
            type: "favorite",
            name: "Jim G."
          },
          message: {
            type: "text",
            content: "Everything looks secure.",
            time: "1/11",
          }
        },
        {
          user: {
            img: require('@/assets/images/avatar.png'),
            type: "favorite",
            name: "Kendall A."
          },
          message: {
            type: "text",
            content: "Not bad for an old man.",
            time: "12/13",
          }
        }
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
          color: "light"
        }
      });
      this.$set(this.$navigator.layout, "header", header);
      this.$set(this.$navigator.layout, "sidebar", sidebar);
      this.$navigator.$refs.app.style.setProperty("--content-height", "100vh");
      this.$navigator.$refs.header.style.setProperty("position", "absolute");
    },
    gotoMessage() {
      this.$router.push({ name: "demo_beforemessages"});
    }
  }
};
</script>
<style lang="scss" scoped>
  .background {
    width: 100%;
    height: 150px;
    background: linear-gradient(172.22deg, #471B74 0.35%, #713682 80.95%, #AA2986 98.89%);
    border-radius: 0px 0px 0px 42px;
    position: absolute;
    top: 0;
    left: 0;
    .friends_container{
      display: flex;
      margin-top: 55px;
      margin-left: 11px;
    }
  }
  .singleicon-container{
    width: 20px;
    height: 20px;
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.12%, #28CAED 100%);
    border-radius: 10px;
  }
  .friend_item{
    width: 82px;
    height: 82px;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    &.platinum{
      background: linear-gradient(180deg, #F2F2F2 0%, #BDBDBD 45.83%, #F2F2F2 90.62%, #FFFFFF 100%);
      box-shadow: 0px 1px 8px #333333;
      img.avatar{
        width: 43px;
        height: 43px;
        border-radius: 22px;
      }
    }
    &.favorite{
      position: relative;
      background: linear-gradient(180deg, #F5DE79 0%, #E49062 45.83%, #F2C94C 90.62%, #F5DE79 100%);
      .heart{
        position: absolute;
        top: -5px;
        left: -10px;
        width: 36px;
        height: 36px;
      }
      img.avatar{
        width: 64px;
        height: 64px;
      }
    }
  }
  .message_container{
    margin-top: 150px;
    height: 100%;
    position: relative;
    background: white;
    h5{
      text-align: right;
      font-size: 16px;
      color: var(--ion-color-primary);
      letter-spacing: 0.08em;
      font-weight: bold;
      margin-right: 36px;
      margin-top: 5px;
    }
    .request_count {
      width: 22px;
      height: 22px;
      border-radius: 11px;
      background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #FFFFFF;
      position: absolute;
      top: -5px;
      right: 15px;
    }
    .message_list{
      height: calc(100% - 100px);
      overflow: auto;
      ion-item{
        .friend_item{
          margin: 15px 10px 12px;
          width: 64px;
          height: 64px;
          &.platinum{
            img.avatar{
              width: 33px;
              height: 33px;
            }
          }
          img.avatar{
            width: 48px;
            height: 48px;
          }
        }
        .message_content{
          margin: 15px 10px 12px;
          height: 64px;
          h1{
            margin: 0;
            font-size: 20px;
            color: #333333;
            font-weight: bold;
            display: flex;
            span{
              margin-right: 5px;
            }
          }
          p{
            margin: 5px 0 0;
            color: #828282;
            font-size: 15px;
            font-weight: bold;
          }
        }
        i{
          position: absolute;
          right: 20px;
          color: #828282;
          font-size: 13px;
        }
      }
    }
  }
</style>
