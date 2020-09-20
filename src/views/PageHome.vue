<template>
  <div class="page-home">
    <div class="chat-box-wrap">
      <ChatBox />
    </div>
  </div>
</template>

<script>
import ChatBox from '@/components/chat/ChatBox.vue'

export default {
  name: 'PageHome',
  components: {
    ChatBox
  }
}
</script>

<style lang="scss">
.page-home {
  width: 100%;
  .chat-box-wrap {
    width: 640px;
    height: 650px;
    margin: 30px auto;
  }
}
</style>
