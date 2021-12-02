<template>
  <transition name="bottom">
    <div v-if="isToastActive" class="toast">
      <button @click="$emit('closeToast')" class="toast-close-btn">×</button>
      <div class="toast-container">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isToastActive: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['closeToast'],
});
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: all 0.6s;
  border: 1px solid rgba(0,0,0,.1);
  width: 100%;
  max-width: 420px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
}

.toast-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 30px;
}

.toast-container {
  padding: 8px;
}

/* アニメーション */
.bottom-enter-active, .bottom-leave-active {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.bottom-enter-from {
  transform: translateY(100vh);
}

.bottom-enter-from, .bottom-leave-to {
  opacity: 0;
}

.bottom-leave-active {
  transition: all 0.4s;
  transform: translateY(300px);
}
</style>
