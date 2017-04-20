<template lang="pug">
   v-app
    v-toolbar
      v-toolbar-side-icon(@click.native.stop="sidebar = !sidebar")
      v-toolbar-title Games
      v-toolbar-items
        v-menu(bottom, origin="top right", transition="v-scale-transition")
          v-btn(dark, icon, slot="activator"): v-icon more_vert
          v-list: v-list-item
            v-list-tile: v-list-tile-title Profile
            v-list-tile: v-list-tile-title Log Out
    main
      v-sidebar(drawer, fixed, v-model="sidebar", height="100%")
        v-list(dense)
          v-list-item: v-list-tile(to="/", :router="true"): v-list-tile-title View all games
      v-content: v-container(fluid): transition(appear, name="slide"): router-view
    v-footer Made with ❤️ ️by Web Dev Office Hours
</template>

<script>
export default {
  data() {
    return {
      sidebar: false
    };
  },
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  }
};
</script>

<style lang="scss">
@import "~vuetify/dist/vuetify.min.css";

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
