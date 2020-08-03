<template>
  <ion-page>
    <div class="background">
      <ion-row class="menu_container ion-padding-start ion-padding-end ion-align-items-center ion-justify-content-between">
        <icon name="options" size="large" />
        <h4>ejected</h4>
        <div @click="toggleMenubar()">
          <icon name="menu" size="large" />
        </div>
      </ion-row>
    </div>
    <div class="message_container">
      <ion-row class="message_heading">
        <h4>sort by...</h4>
        <ion-row class="match_filter" @click="show_match_filter()">
          <span>{{ this.filters[this.selected_filter] }}</span>
          <icon name="caret-down-outline"></icon>
        </ion-row>
      </ion-row>
      <ion-row class="eject_tabs">
        <ion-col size="4">
          <h3 v-bind:class="{ active: eject_tab === 'questions'}" @click="eject_tab = 'questions'">questions</h3>
        </ion-col>
        <ion-col size="4">
          <h3 v-bind:class="{ active: eject_tab === 'matches'}" @click="eject_tab = 'matches'">matches</h3>
        </ion-col>
        <ion-col size="4">
          <h3 v-bind:class="{ active: eject_tab === 'messages'}" @click="eject_tab = 'messages'">messages</h3>
        </ion-col>
      </ion-row>
      <ion-list class="message_list">
        <ion-item v-for="(songmate, m_index) in songmates" v-bind:key="m_index">
          <div class="platinum friend_item" v-if="songmate.type === 'platinum'">
            <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
          </div>
          <div class="favorite friend_item" v-if="songmate.type === 'favorite'">
            <img src="@/assets/images/favorite.png" class="heart" />
            <img class="avatar" :src="songmate.img || require('@/assets/images/avatar.png')" />
          </div>
          <div class="message_content">
            <h1>
              <span>{{ songmate.name }}</span>
            </h1>
            <p>
              {{ songmate.text }}
            </p>
          </div>
          <div @click="eject_function(songmate)" slot="end">
            <icon name="c-eject-color" size="large" />
          </div>
        </ion-item>
      </ion-list>
    </div>
    <ion-picker-controller></ion-picker-controller>
    <div class="footer">
      <ion-row>
        <div class="footer_item">
          <icon name="c-musical" />
        </div>
        <div class="footer_item active">
          <img src="@/assets/backgrounds/tab-active-primary.svg" />
          <icon name="c-heart" />
        </div>
        <div class="footer_item">
          <icon name="chatbubbles"></icon>
        </div>
      </ion-row>
      <div class="footerbanner" />
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
          type: 'platinum',
          name: 'Shane Mangold',
          text: 'overall 88% match'
        },
        {
          img: require('@/assets/images/mira_1.png'),
          type: 'platinum',
          name: 'Trinity Corner',
          text: 'overall 38% match'
        },
        {
          img: require('@/assets/images/mira_3.png'),
          type: 'favorite',
          name: 'Tina Houser',
          text: '22 matched answers'
        },
        {
          type: 'favorite',
          name: 'Gabriel Holley',
          text: '3 matched answers'
        },
        {
          type: 'favorite',
          name: 'Gabriel Holley',
          text: '1 matched answer'
        },
      ],
      filters: [
        "Recently Cleared", "Alphabetical"
      ],
      selected_filter: 0,
      eject_tab: ''
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
    eject_function(mate) {
      console.log(mate);
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
    },
    async show_match_filter() {
      // get the picker controller this way for now
      const pickerController = document.querySelector("ion-picker-controller");
      await pickerController.componentOnReady();
      // set the arry for the column information, you can set the name of the column
      // and the array of data that should be rendered in the column
      let colOptions = [
        { name: "songmates", data: this.filters }
      ];
      // now create the picker, but first you need to create the columns
      // in the proper format for ionic vue to deal with them
      const picker = await pickerController.create({
        columns: this.getColumns(1, colOptions),
        buttons: [
          {
            text: "Cancel",
            role: "cancel"
          },
          {
            text: "Confirm",
            role: "confirm",
            handler: value => {
              this.selected_filter = value['songmates'].value;
              picker.dismiss(value, "confirm");
            }
          }
        ]
      });
      picker.onDidDismiss().then(v => {
        console.log(v);
      });
      // present the picker
      await picker.present();
    },
    // HELPER FUNCTIONS FOR PICKERS
    getColumns(numColumns, columnOptions) {
      let columns = [];
      for (let i = 0; i < numColumns; i++) {
        let len = columnOptions[i].data.length;
        // if a na,e is provided then set the object to the
        // the name provided
        let colName = columnOptions[i].name || `col-${i}`;
        let col = {
          name: colName,
          options: this.getColumnOptions(i, len, columnOptions)
        };
        columns.push(col);
      }
      return columns;
    },
    getColumnOptions(columnIndex, numOptions, columnOptions) {
      let options = [];
      for (let i = 0; i < numOptions; i++) {
        // if there is no value property provided in the column data
        // then set value to the row index
        if (typeof columnOptions[columnIndex].data[i] == "object") {
          options.push({
            text: columnOptions[columnIndex].data[i % numOptions][0],
            value: columnOptions[columnIndex].data[i % numOptions][1]
          });
        } else {
          options.push({
            text: columnOptions[columnIndex].data[i % numOptions],
            value: i
          });
        }
      }
      return options;
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
    .friends_container{
      display: flex;
      margin-top: 16px;
      margin-left: 11px;
    }
  }
  .eject_tabs{
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
  .message_heading{
    width: 100%;
    padding: 6px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
      margin: 0;
      color: #5D148C;
      font-size: 16px;
      letter-spacing: 0.08em;
    }
    .match_filter{
      span{
        color: #5D148C;
        font-size: 16px;
        font-weight: bold;
      }
      ion-icon{
        color: #9B51E0;
      }
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
    margin-top: 8px;
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
  .footer_item {
    width: 33%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon{
      font-size: 36px;
      color: #CF9BFF;
    }
    &.active{
      ion-icon{
        font-size: 42px;
        position: absolute;
      }
    }
  }
  .footerbanner{
    background: #5D148C;
    width: 100%;
    height: 9px;
  }
</style>
