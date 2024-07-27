<template>
  <div class="burger">
    <v-menu open-on-hover transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon icon="" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { title: "About Me" },
        { title: "Experience" },
        { title: "Tech Stack" },
        { title: "Click Me 2" },
      ],
    };
  },
};
</script>

<style scoped>
/* CSS removed as requested */
</style>
