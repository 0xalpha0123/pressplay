<template>
  <div>
    <ion-app>
      <ion-content id="main">
        <slot />
      </ion-content>
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
    <SlideMenu></SlideMenu>
  </div>
</template>

<script>
import SlideMenu from '@/components/global/demo-slidemenu.vue'
export default {
  components: {
    SlideMenu
  }
}
</script>
