<template>
  <ion-page>
    <div class="top_icon_container">
      <icon name="arrow-back-sharp" style="color: white; font-size: 48px" />
      <div class="mic_container">
        <icon name="c-mic1" size="large" style="color: #000" />
      </div>
    </div>
    <img src="@/assets/images/mixtape_build.png" />
    <div class="content_banner" />
    <div class="search_box">
      <div class="search_container">
        <ion-input v-model="search_text" placeholder="I love the way you move! Here’s..." />
        <icon name="add-sharp" size="large" />
      </div>
      <p>from Ziggy Marley</p>
    </div>
    <div class="content">
      <ion-list>
        <ion-row v-for="(song, index) in song_data" v-bind:key="index" class="ion-align-items-center ion-justify-content-between ion-full-width song_item">
          <ion-row @click="show_songdetails(index)">
            <h1>{{ index+1 }}</h1>
            <div class="song_content">
              <p>{{ song.title }}</p>
              <i>{{ song.artist }}</i>
              <div class="check_container top" v-if="song.check">
                <icon name="checkmark" />
              </div>
            </div>
          </ion-row>
          <icon name="c-play" size="large" />
          <div class="song_details" v-if="song.show_details">
            <ion-row class="songstory_check" v-if="song.check">
              <ion-row>
                <div class="check_container">
                  <icon name="checkmark" />
                </div>
                <i>You have this song in your SongStory!</i>
              </ion-row>
              <h3>View</h3>
            </ion-row>
            <div class="song_detail_content">
              <ion-textarea cols="3" placeholder="not only are you more than enough as a human being, your love is more than enough for me!" />
              <div class="songstory_mark">
                <icon name="c-singles" size="large" />
              </div>
            </div>
          </div>
        </ion-row>
      </ion-list>
      <ion-row>
        <ion-col size="12">
          <ion-button
            class="bright-horizontal-gradient"
            expand="block"
            size="large"
            @click="save_mixtape"
          >
            Save
          </ion-button>
        </ion-col>
      </ion-row>
    </div>
  </ion-page>
</template>

<script>
export default {
  data() {
    return {
      search_text: "",
      song_data: [
        {
          title: "Get Up and Move Your Body",
          artist: "Tubby Love",
          check: false,
          show_details: false
        },
        {
          title: "Brand New Day",
          artist: "Trevor Hall",
          check: true,
          show_details: false
        },
        {
          title: "Song Title",
          artist: "Artist",
          check: true,
          show_details: false
        },
        {
          title: "Get Up and Move Your Body",
          artist: "Tubby Love",
          check: false,
          show_details: false
        },
        {
          title: "Brand New Day",
          artist: "Trevor Hall",
          check: false,
          show_details: false
        },
        {
          title: "Song Title",
          artist: "Artist",
          check: true,
          show_details: false
        }
      ],
    }
  },
  methods: {
    show_songdetails(index) {
      let song_data = this.song_data;
      song_data[index].show_details = !song_data[index].show_details;
      this.song_data = song_data;
    },
    save_mixtape() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .top_icon_container{
    width: 100%;
    display: flex;
    background: linear-gradient(180deg, #471B74 0%, rgba(71, 27, 116, 0) 80.73%);
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    padding: 8px;
    .mic_container{
      width: 64px;
      height: 64px;
      border-radius: 32px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: linear-gradient(0deg, #FF26A8 0%, #F2C94C 100%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .search_box{
    width: 100%;
    margin-top: -60px;
    margin-bottom: -25px;
    z-index: 99;
    ion-input{
      background: #FFFFFF;
      border-radius: 47px;
      height: 59px;
      width: 100%;
      font-size: 22px;
      padding: 0 50px 0 12px !important;
    }
    .search_container{
      position: relative;
      ion-icon{
        position: absolute;
        color: #E49062;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        z-index: 999;
      }
    }
    p{
      margin: 8px 12px 0 0;
      text-align: right;
      font-size: 15px;
      color: #F2C94C;
    }
  }
  .content{
    width: 100%;
    background: radial-gradient(90.14% 73.52% at 50% 27.42%, #AA2986 0%, #751A8A 27.08%, #5D148C 66.15%, #471B74 100%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    padding-top: 30px;
    flex-grow: 1;
    ion-list{
      overflow-y: auto;
      background: transparent;
      .song_item{
        padding: 12px 16px;
        border-bottom: 1px solid #5D148C;
        h1{
          margin-top: 0;
          font-weight: bold;
          font-size: 29px;
          color: #FFFFFF;
        }
        .song_content{
          margin-left: 12px;
          position: relative;
          p{
            margin: 0;
            color: #FFFFFF;
            font-size: 15px;
            font-weight: bold;
          }
          i{
            font-size: 13px;
            color: #F2C94C;
          }
        }
        .check_container{
          background: linear-gradient(180deg, #9B51E0 0%, #2A82EC 53.13%, #28CAED 100%);
          width: 20px;
          height: 20px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          &.top{
            position: absolute;
            right: -24px;
            top: 0;
          }
          ion-icon{
            color: white;
          }
        }
        .song_details{
          width: 100%;
        }
      }
    }
  }
  .content_banner {
    background: linear-gradient(180deg, rgba(71, 27, 116, 0) 0%, #471B74 80.73%);
    width: 100%;
    padding-top: 96px;
    margin-top: -96px;
    position: relative;
  }
  .songstory_check{
    justify-content: space-between;
    margin-top: 8px;
    ion-row {
      align-items: center;
      i {
        margin-left: 8px;
        font-size: 13px;
        color: #FFFFFF;
      }
    }
    h3{
      margin: 0;
      color: #F5DE79;
      font-size: 16px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
  .song_details{
    position: relative;
    margin-bottom: 16px;
    ion-textarea {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 25px;
      padding: 8px 12px;
      color: white;
      font-size: 18px;
      line-height: 25px;
    }
    .songstory_mark {
      background: linear-gradient(163.5deg, #471B74 0.35%, #713682 80.95%, #AA2986 98.89%);
      width: 42px;
      height: 42px;
      border-radius: 21px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
      bottom: -10px;
      z-index: 99;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      ion-icon {
        color: white;
      }
    }
  }
</style>
