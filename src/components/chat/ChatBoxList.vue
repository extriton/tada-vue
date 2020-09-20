<template>
    <div class="chat-box-list">
        <ChatBoxListItem
            v-for="(message, index) in MESSAGES"
            :key="index"
            :message="message"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChatBoxListItem from '@/components/chat/ChatBoxListItem.vue'

export default {
    name: 'ChatBoxList',
    components: {
        ChatBoxListItem
    },
    computed: {
        ...mapGetters('chat', ['MESSAGES'])
    }
}
</script>

<style lang="scss">
.chat-box-list {
  width: 100%;
  height: 100%;
  background-color: #FFF;
  border-radius: 15px;
  padding: 20px;
  overflow-y: auto;
}
</style>
