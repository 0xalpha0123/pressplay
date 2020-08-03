<template>
  <ion-menu side="end" content-id="main">
    <ion-content>
      <div class="header">
        <ion-row class="ion-justify-content-between">
          <ion-row class="ion-align-items-center">
            <img src="@/assets/images/mira_3.png" />
            <div class="profile_text">
              <h3>Caitlin A</h3>
              <i>view profile</i>
            </div>
          </ion-row>
          <icon name="c-pause-outline" color="light" size="large" />
        </ion-row>
      </div>
      <ion-row class="subscription ion-justify-content-center">
        <h3>Subscription</h3>
        <div class="badge_container">
          <img src="@/assets/images/vip-badge.png" />
        </div>
      </ion-row>
      <ion-list>
        <ion-item>
          <div class="icon_container">
            <icon name="c-songmates-mutual" />
            <div class="notification">2</div>
          </div>
          <h3 class="item_text">SongMates</h3>
          <p class="item_text2" slot="end">22</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-disc" />
            <div class="notification">4</div>
          </div>
          <h3 class="item_text">favorites</h3>
          <p class="item_text2" slot="end">8</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-heart" />
            <div class="notification">11</div>
          </div>
          <h3 class="item_text">likes</h3>
          <p class="item_text2" slot="end">99</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-cassette2" />
            <div class="notification">2</div>
          </div>
          <h3 class="item_text">mix tapes</h3>
          <p class="item_text2" slot="end">11</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-eject-filled" style="color: #BDBDBD" />
          </div>
          <h3 class="item_text">ejected</h3>
          <p class="item_text2" slot="end">48</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-block" />
          </div>
          <h3 class="item_text">blocked</h3>
          <p class="item_text2" slot="end">2</p>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="settings" />
          </div>
          <h3 class="item_text">settings</h3>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="help-buoy-outline" />
          </div>
          <h3 class="item_text">helpdesk</h3>
        </ion-item>
        <ion-item>
          <div class="icon_container">
            <icon name="c-about" />
          </div>
          <h3 class="item_text">about</h3>
        </ion-item>
      </ion-list>
      <div class="ion-text-center ion-padding-top">
        <ion-button>Logout</ion-button>
        <h4 class="mc_panel">mc panel</h4>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .header {
    background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.12%, #28CAED 100%);
    border-bottom-left-radius: 51px;
    padding: 8px 12px;
    img {
      height: 70px;
      margin-right: 8px;
    }
    h3{
      margin: 0;
      font-size: 20px;
      color: white;
    }
    i{
      font-size: 13px;
      color: #F5DE79;
    }
  }
  .subscription{
    margin-top: -16px;
    h3{
      font-size: 14px;
      color: #5D148C;
      text-transform: uppercase;
      margin-right: 8px;
    }
    .badge_container{
      background: #FFFFFF;
      padding: 4px 4px 0 4px;
      border-radius: 4px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      img {
        height: 42px;
      }
    }
  }
  .icon_container{
    margin-top: 8px;
    padding: 8px 0;
    position: relative;
    ion-icon{
      font-size: 36px;
    }
    .notification{
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 11px;
      background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.12%, #28CAED 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 12px;
      top: 0px;
      right: -8px;
    }
  }
  .item_text{
    color: #4F4F4F;
    font-size: 15px;
    font-weight: bold;
    margin-left: 12px;
  }
  .item_text2{
    color: #E49062;
    font-size: 13px;
  }
  ion-button{
    margin: auto;
    --background: linear-gradient(270deg, #F5DE79 0%, #F2C94C 50.52%, #E49062 100%);
    --box-shadow: none;
  }
  .mc_panel{
    color: #5D148C;
    font-size: 16px;
    letter-spacing: 0.08em;
    margin: 8px 0;
  }
</style>
