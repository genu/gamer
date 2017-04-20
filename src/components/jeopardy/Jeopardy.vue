<template lang="pug">
  div
    v-toolbar.secondary
      v-toolbar-title Jeopardy
      v-toolbar-items
        v-toolbar-item(slot="activator", @click.native.stop="addingCategory = true") Add Category
    v-content: v-container(fluid).ma-5
      pre hello
    v-modal(v-model="addingCategory")
      v-card
        v-card-text: h2.title Add Category
        v-card-text.subheading.grey--text
          v-row(row)
              v-col(xs12): v-text-field(label="Category Name", name="input-1")
        v-card-row(actions)
          v-spacer
          v-btn.normal--text(flat, @click.native="addingCategory = false") Cancel
          v-btn.primary--text(flat, @click.native="addingCategory = false") Add
</template>

<script>
export default {
  data() {
    return {
      addingCategory: false
    };
  }
};
</script>
