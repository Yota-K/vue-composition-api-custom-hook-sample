<template>
  <button @click="handleClick">トーストを表示</button>
  <Toast :is-toast-active="isToastActive" @close-toast="closeToast"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToast }from './lib/use-toast'
import Toast from './components/Toast.vue'

export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    const { isToastActive, handleClick, closeToast } = useToast();

    return {
      isToastActive,
      handleClick,
      closeToast,
    }
  }
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
