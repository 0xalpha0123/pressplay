<template>
  <ion-page>
    <div class="header">
      <div class="header_banner">
        <img src="@/assets/images/top_back.png" v-if="!header_expand" />
        <img src="@/assets/images/top_back2.png" v-if="header_expand" />
        <img src="@/assets/images/top_back1.png" class="top_back1" />
        <div class="header_content">
          <div class="header_top">
            <div class="header_left">
              <img src="@/assets/images/back.png" class="back_icon" />
              <div class="platinum friend_item" v-if="songmate.type === 'platinum'">
                <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
              </div>
              <div class="favorite friend_item" v-if="songmate.type === 'favorite'">
                <img src="@/assets/images/favorite.png" class="heart" />
                <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
              </div>
              <div class="profile_title">
                <h2>Caitlin A.</h2>
                <i>online now</i>
              </div>
            </div>
            <div class="header_right">
              <div class="songshare_icon">
                <icon name="c-songshare" size="large" />
              </div>
              <icon name="ellipsis-vertical" size="large"></icon>
            </div>
          </div>
          <div class="header_details" v-if="header_expand">
            <div class="details_left">
              <div class="details_item">
                <div class="icon_container" style="background-color: #F5DE79">
                  <icon name="c-songstory-nowplaying" color="light" />
                </div>
                <p>22</p>
              </div>
              <div class="details_item">
                <div class="icon_container" style="background-color: #F2C94C">
                  <icon name="c-songstory-discography" color="light" />
                </div>
                <p>10</p>
              </div>
              <div class="details_item">
                <div class="icon_container" style="background-color: #FF26A8">
                  <icon name="c-mixtapes" color="light" style="font-size: 20px;" />
                </div>
                <p>0</p>
              </div>
              <div class="details_item">
                <div class="icon_container" style="background-color: #28CAED">
                  <icon name="c-singles" color="light" />
                </div>
                <p>0</p>
              </div>
            </div>
            <div class="details_right">
              <p>Love Will Find A Way</p>
              <i>Mike Love</i>
            </div>
          </div>
        </div>
        <div class="arrow_down show_arrow" v-if="!header_expand" @click="header_expand = true" />
        <div class="arrow_up show_arrow" v-if="header_expand" @click="header_expand = false" />
      </div>
    </div>
    <div class="content" v-if="connecting_text">
      <img src="@/assets/images/frame.png" class="content_back" />      
      <div class="chat_user">
        <img src="@/assets/images/tina.png" />
      </div>
      <div class="chat_text">
        <h2>Just the Two of Us</h2>
        <p>You and Caitlin share 42 answers... that’s somethin’ to talk about!</p>
      </div>
    </div>
    <div class="content chat_container" v-if="!connecting_text">
      <div class="chat_content" v-if="connected_text">
        <h2>Connected</h2>
        <p class="date">{{ new Date() | moment }}</p>
      </div>
      <div class="messages_container">
        <div v-for="(message, message_index) in messages" v-bind:key="message_index" class="message_item" v-bind:class="{'left': !message.sender.currentUser, 'right': message.sender.currentUser }">
          <img :src="message.sender.img" />
          <div class="chat_message" v-if="message.type==='text'">
            {{ message.message }}
          </div>
          <div class="chat_song" v-if="message.type==='songshare'">
            <div class="author_part">
              <img :src="message.song_details.profile" class="author_img" />
              <icon name="c-play" size="large" />
            </div>
            <div class="details_part">
              <h4>{{ message.song_details.title }}</h4>
              <i>{{ message.song_details.author }}</i>
            </div>
          </div>
          <div class="chat_mixtape" v-if="message.type==='mixtape'">
            <img src="@/assets/images/mixtape.png" />
            <p class="top">Caitlin's mixtape</p>
            <p class="bottom">Stuff to Dance to</p>
          </div>
          <div class="chat_songsharing" v-if="message.type==='songsharing'">
            <div class="songshare_icon">
              <icon name="c-songshare" size="large" />
            </div>
            <div class="songshare_detail">
              <h4>Take it away!</h4>
              <i @click="lead_songshare()">Lead a SongShare?</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-if="!footer_expand">
      <div class="footer_banner" />
      <div class="footer_content">
        <div class="footer_icons">
          <icon name="c-cassette2" style="font-size: 48px;" color="primary" />
          <icon name="c-image" style="font-size: 48px;" color="primary" />
          <icon name="c-mic" style="font-size: 48px;" color="primary" />
        </div>
        <div class="footer_main">
          <img src="@/assets/backgrounds/tab-active-primary.svg" class="footer_main_banner" />
          <ion-input placeholder="|Aa" color="primary" :value="chat_text" @ionChange="type_chat">
            <icon slot="end" name="happy" size="large" />
          </ion-input>
        </div>
      </div>
    </div>
    <div class="footer" v-if="footer_expand">
      <div class="footer_banner" />
      <div class="footer_content">
        <div class="button_icon_container plus_icon" @click="show_attach_bar = true">
          <icon name="add-outline" />
        </div>
        <div class="attach_bar" v-if="show_attach_bar">
          <div class="songstory_icon">
            <icon name="c-singles" />
          </div>
          <icon name="c-cassette2" style="font-size: 40px;" color="primary" />
          <icon name="c-image" style="font-size: 40px;" color="primary" />
          <icon name="c-mic" style="font-size: 40px;" color="primary" />
          <div class="button_icon_container plus_icon" @click="show_attach_bar = false">
            <icon name="add-outline" />
          </div>
        </div>
        <div class="footer_main expanded">
          <img src="@/assets/backgrounds/tab-active-primary.svg" class="footer_main_banner" />
          <ion-textarea :value="chat_text" @ionChange="type_chat">
            <icon slot="end" name="happy" size="large" />
          </ion-textarea>
          <img src="@/assets/backgrounds/tab-active-primary.svg" class="footer_main_banner right" />
        </div>
        <div class="button_icon_container">
          <icon name="c-play-filled" />
        </div>
      </div>
    </div>
    <div class="modal_overlay" v-if="lead_dialog" @click="lead_dialog=false" />
    <div class="message_modal lead_dialog" v-if="lead_dialog">
      <div class="modal_content">
        <icon name="c-songshare" style="font-size: 100px" />
        <h4>Caitlin wants to share!</h4>
        <p>Get on the same wavelength!<br/>Following the lead does not take time from your clock.</p>
        <div class="button_part">
          <h5>decline</h5>
          <ion-button shape="round" color="primary">accept</ion-button>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      header_expand: false,
      footer_expand: false,
      show_attach_bar: false,
      lead_dialog: false,
      songmate: {
        type: "favorite",
        img: require('@/assets/images/mira_3.png')
      },
      chat_text: "",
      moment: null,
      connecting_text: false,
      connected_text: false,
      messages: [
        {
          date: "2020-07-22T21:37:41.149Z",
          message: "Hey Caitlin! My new year’s resolution this year is to dance every day. Whatcha got for me?",
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: true,
          },
          type: "text"
        },
        {
          date: "2020-07-22T21:38:42Z",
          message: "oh I can help with that!",
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: false,
          },
          type: "text"
        },
        {
          date: "2020-07-22T21:39:42Z",
          message: "I know you can!",
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: true,
          },
          type: "text"
        },
        {
          date: "2020-07-22T21:39:42Z",
          song_details: {
            title: 'Thank you girl',
            author: 'The Beatles',
            profile: require("@/assets/images/author1.png")
          },
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: true,
          },
          type: "songshare"
        },
        {
          date: "2020-07-22T21:39:42Z",
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: false,
          },
          type: "mixtape"
        },
        {
          date: "2020-07-22T21:39:42Z",
          sender: {
            type: "favorite",
            img: require('@/assets/images/mira_3.png'),
            currentUser: false,
          },
          type: "songsharing"
        }
      ],
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do, YYYY');
    }
  },
  mounted() {
    const self = this;
    self.connecting_text = true;
    self.connected_text = false;
    setTimeout(function(){
      self.connecting_text = false;
      self.connected_text = true;
    }, 5000);
    setTimeout(function(){
      self.connected_text = false;
    }, 10000);
  },
  methods: {
    type_chat(event) {
      this.chat_text = event.detail.value;
      if(this.chat_text !== "") {
        this.footer_expand = true;
      } else {
        this.footer_expand = false;
      }
    },
    lead_songshare() {
      this.lead_dialog = true;
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
  padding: 24px 16px 8px;
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
      font-weight: bold;
    }
  }
  h4{
    width: 100%;
    margin-top: 24px;
    margin-bottom: 0;
    color: #333333;
    font-size: 24px;
    font-weight: bold;
  }
  p{
    margin-top: 8px;
    color: #737373;
    font-size: 16px;
    line-height: 19px;
  }
}
.header_banner{
  position: relative;
}
.attach_bar{
  position: absolute;
  left: 8px;
  bottom: 12px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.42);
  border-radius: 44px;
  width: 44px;
  padding: 8px 0;
  z-index: 1000;
}
.chat_container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  overflow: auto;
}
.messages_container{
  .chat_song{
    background: radial-gradient(61.96% 51.91% at 51.68% 71.93%, #AA2986 0%, #8C3084 14%, #783482 27%, #713682 36%, #471B74 90%);
    padding: 5px;
    min-height: 80px;
    border-radius: 50px;
    display: flex;
    .author_part{
      width: 80px;
      height: 80px;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
      ion-icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .details_part{
      margin-right: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4{
        color: white;
        font-size: 15px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      i{
        color: #F2C94C;
        font-size: 13px;
      }
    }
  }
  .chat_songsharing{
    padding: 8px;
    background: #F2F2F2;
    border-radius: 100px;
    display: flex;
    align-items: center;
    .songshare_icon{
      width: 56px;
      height: 56px;
    }
    .songshare_detail{
      margin-left: 8px;
      margin-right: 8px;
      h4{
        margin-top: 0;
        margin-bottom: 4px;
        color: #4F4F4F;
        font-size: 15px;
      }
      i{
        color: #5D148C;
        font-size: 13px;
      }
    }
  }
  .message_item{
    width: 70%;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    .chat_mixtape{
      margin-left: 8px;
      position: relative;
      display: flex;
      justify-content: center;
      img{
        width: 180px;
        height: auto;
      }
      p{
        background: #333333;
        color: white;
        font-size: 9px;
        letter-spacing: 0.165em;
        position: absolute;
        padding: 0 4px;
        &.top{
          top: 12px;
        }
        &.bottom{
          bottom: 20px;
        }
      }
    }
    img{
      width: 32px;
      height: 32px;
    }
    .chat_message{
      padding: 8px;
      border-radius: 16px;
      line-height: 21px;
      font-size: 16px;
    }
    &.left{
      float: left;
      .chat_message{
        background: #F2F2F2;
        color: #333333;
        margin-left: 10px;
      }
    }
    &.right{
      float: right;
      justify-content: flex-end;
      img{
        order: 2;
      }
      .chat_message{
        background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.12%, #28CAED 100%);
        color: white;
        margin-right: 10px;
      }
    }
  }
}
.songstory_icon{
  width: 36px;
  height: 36px;
  background: #CF9BFF;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    font-size: 28px;
    color: white;
  }
}
.top_back1{
  margin-top: -70px;
}
.chat_content{
  margin-bottom: 24px;
}
.chat_content .date{
  font-weight: bold;
  font-size: 16px;
  color: #F2C94C;
}
.content{
  .chat_text{
    position: absolute;
    top: calc(50% + 130px);
    transform: translateY(-50%);
  }
  h2{
    font-size: 29px;
    font-weight: bold;
    background: linear-gradient(180deg, #7D35F3 0%, #471B74 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
  p{
    margin-top: 0;
    font-size: 18px;
    line-height: 21px;
    color: #828282;
    text-align: center;
  }
}
.content_back{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.footer_banner{
  width: 100%;
  height: 9px;
  background: #5D148C;
  box-shadow: 0px 0px 5px #5D148C;
  position: absolute;
  bottom: 0;
}
.footer_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer_icons{
  ion-icon{
    margin-left: 15px;
  }
}
.button_icon_container{
  background: radial-gradient(78.13% 78.13% at 50% 50%, #F5DE79 0%, #F2C94C 35.94%, #E49062 100%);
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &.plus_icon{
    background: linear-gradient(0deg, #FF26A8 0%, #F2C94C 100%);
    margin-left: 8px;
  }
  ion-icon {
    font-size: 24px;
    color: white;
  }
}
.footer_main{
  width: 40%;
  height: 69px;
  background: #5D148C;
  box-shadow: 0px 0px 8px #9B51E0;
  border-radius: 31px 31px 0 0;
  position: relative;
  &.expanded{
    width: 70%;
  }
  .footer_main_banner{
    position: absolute;
    left: -35px;
    height: 69px;
    bottom: 0;
    &.right{
      left: auto;
      right: -35px;
    }
  }
  ion-input, ion-textarea{
    background: rgba(255, 255, 255, 0.15);
    color: #BDBDBD;
    height: calc(100% - 20px);
    width: calc(100% - 16px);
    margin: 10px 8px;
    padding-left: 8px !important;
    padding-right: 42px !important;
    border-radius: 30px;
    ion-icon {
      color: #CF9BFF;
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.chat_user{
  background: #471B74;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 2px 19px #9B51E0;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 112px;
    height: 112px;
  }
}
.show_arrow{
  width: 36px;
  height: 24px;
  position: absolute;
  overflow: hidden;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.5);
  right: 50px;
  bottom: 10px;
  &.arrow_up{
    bottom: 20px;
    &:after{
      top: 12px;
      box-shadow: -1px -1px 10px -1px rgba(0, 0, 0, 0.5);
    }
  }
  &:after{
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: #fff;
    transform: rotate(45deg);
    top: -12px;
    left: 6px;
    box-shadow: -1px -1px 10px -2px rgba(0, 0, 0, 0.5);
  }
}
.header_content{
  position: absolute;
  top: 10px;
  width: 100%;
  .header_top{
    display: flex;
    justify-content: space-between;
    .header_left{
      display: flex;
      align-items: center;
    }
  }
}
.header_details{
  margin: 15px;
  border-top: 1px solid #E0E0E0;
  padding-top: 13px;
  display: flex;
  justify-content: space-between;
  .details_right {
    margin-right: 10px;
    p {
      margin: 0;
      color: white;
      font-size: 15px;
    }
    i {
      color: #F2C94C;
      font-size: 13px;
    }
  }
}
.back_icon{
  width: 27px;
  margin: 0 10px;
}
.profile_title{
  margin-left: 10px;
  h2{
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  i{
    color: #F5DE79; 
  }
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
.details_left{
  display: flex;
  .details_item{
    margin-right: 10px;
    .icon_container{
      width: 26px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 13px;
    }
    img.music_icon{
      width: 18px;
    }
    p{
      margin-top: 5px;
      text-align: center;
      color: #F5DE79;
      font-size: 14px;
      letter-spacing: 0.08em;
    }
  }
}
.header_right{
  display: flex;
  align-items: center;
  margin-right: 10px;
  ion-icon{
    color: #F2C94C;
  }
}
.songshare_icon{
  width: 48px;
  height: 48px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
