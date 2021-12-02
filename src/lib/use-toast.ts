import { ref } from 'vue';

export const useToast = () => {
  const isToastActive = ref(false);

  const handleClick = () => {
    isToastActive.value = !isToastActive.value;
  };

  const closeToast = () => {
    isToastActive.value = false;
  };

  return {
    isToastActive,
    handleClick,
    closeToast,
  };
};
