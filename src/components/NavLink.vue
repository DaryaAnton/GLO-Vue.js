<template>
  <li :class="classLink">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    },
    classLink: {
      type: String,
      required: true
    }
  }
}
</script>