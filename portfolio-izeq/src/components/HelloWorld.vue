<template>
  <div class="hello">
    <v-icon size="larger" class="inline-icon">mdi-code-block-tags</v-icon>
    <h1 class="hi">Hello, Grüezi, Cześć</h1>
    <h3 class="name">
      I'm Jakub. Software developer dedicated to clean code by day and an avid
      mountian biker and skier on weekends.
    </h3>
  </div>
</template>
<style>
h3 {
  margin: 40px 0 0;
}
.hello {
  align-content: flex-start;
  text-align: center;
}
.hi {
  text-align: start;
}
.name {
  text-align: start;
}
.inline-icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
  position: relative; /* Required for z-index to work */
  z-index: 10; /* Adjust the value as needed */
}
</style>
