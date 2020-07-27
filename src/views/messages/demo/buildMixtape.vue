<template>
  <ion-page>
    <div class="mixtape_content">
      <img src="@/assets/images/mixtape_build.png" />
    </div>
    <div class="top_icon_container">
      <icon name="pencil-sharp" size="large" style="color: #2F80ED" />
      <icon name="close-sharp" size="large" style="color: #000" />
    </div>
    <div class="content">
      <div class="content_banner">
        <div class="change_skin_but_container">
          <div class="change_skin_but">
            <icon name="add-sharp" style="font-size: 24px" />
          </div>
          <h3>change skin</h3>
        </div>
      </div>
      <div class="main_content">
        <ion-row class="mixtape_item ion-align-items-center ion-justify-content-between">
          <ion-row>
            <div class="number">1</div>
            <div class="mixtape_item_content">
              <p>Get Up and Move Your Body</p>
              <i>Tubby Love</i>
            </div>
          </ion-row>
          <icon name="menu-sharp" />
        </ion-row>
      </div>
      <div class="main_footer">
        <ion-row class="add_song ion-align-items-center">
          <div class="add_button">
            <icon name="add-sharp" />
          </div>
          <h3>Add Song</h3>
        </ion-row>
        <ion-row class="ion-justify-content-between button_part">
          <h3>Save draft</h3>
          <h3>Delete</h3>
        </ion-row>
      </div>
    </div>
  </ion-page>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .top_icon_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 8px;
  }
  .change_skin_but_container{
    display: flex;
    align-items: center;
    margin-left: 8px;
    h3{
      font-size: 20px;
      color: white;
      margin-left: 8px;
    }
  }
  .main_footer{
    position: absolute;
    bottom: 50px;
    width: 100%;
    .add_song{
      padding-bottom: 8px;
      .add_button{
        background: #2F80ED;
        width: 26px;
        height: 26px;
        border-radius: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px;
        ion-icon {
          font-size: 20px;
        }
      }
      h3{
        margin: 0;
        font-size: 16px;
        color: #807B80;
      }
    }
    .button_part{
      padding: 0 8px;
      h3{
        margin-top: 32px;
        text-transform: uppercase;
        color: #3D83FB;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  .add_song{
    margin-right: 20px;
    border-bottom: 1px solid white;
  }
  .change_skin_but{
    background: linear-gradient(0deg, #FF26A8 0%, #F2C94C 100%);
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .content{
    height: 100%;
  }
  .content_banner {
    background: linear-gradient(180deg, rgba(71, 27, 116, 0) 0%, #471B74 80.73%);
    width: 100%;
    height: 96px;
    margin-top: -96px;
    padding-top: 16px;
  }
  .main_content {
    width: 100%;
    height: 100%;
    background: #471B74;
  }
  .mixtape_item {
    color: white;
    margin: 0 8px;
    padding: 0 8px 12px;
    border-bottom: 1px solid #5D148C;
    .number{
      font-size: 29px;
      font-weight: bold;
      margin-right: 12px;
    }
    ion-icon{
      color: #9B51E0;
      font-size: 32px;
    }
    .mixtape_item_content{
      p{
        margin-top: 0;
        font-size: 15px;
        margin-bottom: 4px;
      }
      i{
        font-size: 13px;
        color: #F2C94C;
      }
    }
  }
</style>
