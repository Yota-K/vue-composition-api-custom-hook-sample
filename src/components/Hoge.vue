<template>
  <button @click="handleClick">トーストを表示（Hoge.vue）</button>
  <Toast :is-toast-active="isToastActive" @close-toast="closeToast"> <h2>Toastのサンプル Hoge.vue</h2>
    <p>トースト（Hoge）🍞</p>
  </Toast>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToast }from '../lib/use-toast';
import Toast from './Toast.vue';

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

<style scoped>
button {
  display: block;
  margin: 10px auto;
}
</style>
