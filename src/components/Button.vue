<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>
  
  <script>
export default {
  name: "button-vue",
  props: {
    title: String,
  },
};
</script>