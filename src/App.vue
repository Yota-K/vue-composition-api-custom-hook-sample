<template>
  <Hoge />
  <Fuga />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hoge from './components/Hoge.vue';
import Fuga from './components/Fuga.vue';

export default defineComponent({
  components: {
    Hoge,
    Fuga,
  },
}); 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,h2 {
  padding: 0;
  margin: 0;
}
</style>
