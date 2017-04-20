<template lang="pug">
  v-row: v-col.ma-5(xs6)
    v-card
      v-card-row.green.darken-1
        v-card-title
          span.white--text Jeopardy
          v-spacer
      v-card-text
        v-card-row(height="75px;")
          v-icon.mr-5 card_membership
          div: div Game of jeopardy
      v-card-row(actions)
        v-btn.primary.dark(to="/jeapordy", router="true") Create
</template>

<script>
export default {

};
</script>
