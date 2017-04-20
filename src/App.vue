<template lang="pug">
   v-app
    v-toolbar: v-toolbar-title Jeapordy
    main: v-content: v-container(fluid): router-view
    v-footer Made with ❤️ ️
</template>

<script>
export default {
  name: 'app',
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  }
};
</script>

<style lang="scss">
@import "~vuetify/dist/vuetify.min.css";
</style>
