<script setup>
defineProps({
  msg: {
    type: Object,
    required: true
  }
})

</script>


<template>
  <section>
    <h1>{{ msg }}</h1>
  </section>
</template>

<style scoped>
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>