<template lang="pug">
  .layout-container
    Header
    router-view
    
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header.vue"),
  }
}
</script>