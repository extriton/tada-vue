<template>
  <div class="chat-box">
    <div v-if="!USERNAME" class="chat-box-login-wrap">
      <ChatBoxLogin />
    </div>
    <div v-if="USERNAME" class="chat-box-area">
      <div class="chat-box-list-wrap">
        <ChatBoxList />
      </div>
      <p class="error-message">
        <span v-show="!CONNECTED">{{ error }}</span>
      </p>
      <a-row>
        <a-col :span="24">
          <a-textarea
            placeholder="Enter message" :rows="4"
            v-model="message"
            :disabled="!CONNECTED"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="2" :offset="11" class="margin-top-20">
          <a-button
            @click="onSend"
            :disabled="!CONNECTED"
          >
            Send
          </a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChatBoxLogin from '@/components/chat/ChatBoxLogin.vue'
import ChatBoxList from '@/components/chat/ChatBoxList.vue'
import config from '@/config/config'

export default {
  name: 'ChatBox',
  components: {
    ChatBoxLogin,
    ChatBoxList
  },
  data () {
    return {
      ws: null,
      message: '',
      error: '',
      intervalId: null
    }
  },
  computed: {
    ...mapGetters('chat', ['USERNAME', 'CONNECTED'])
  },
  methods: {
    onSend () {
      if (!this.message || !this.CONNECTED) return
      
      this.ws.send(JSON.stringify({ text: this.message }))
      this.message = ''
    },
    connect (username) {
      this.ws = new WebSocket(`${config.domainWS}/ws?name=${username}`)

      this.ws.onopen = () => {
        this.error = ''
        this.$store.commit('chat/SET_CONNECTED', true)
        if (this.intervalId !== null) {
          clearInterval(this.intervalId)
          this.intervalId = null
        }
      }

      this.ws.onclose = () => {
        this.error = 'Connection lost'
        this.$store.commit('chat/SET_CONNECTED', false)
        this.ws = null
        if (this.intervalId === null) {
          this.intervalId = setInterval(() => { this.connect(username) }, 5000)
        }
      }

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        this.$store.commit('chat/ADD_MESSAGE', data)
      }
    }
  },
  watch: {
    USERNAME (username) {
      if (username) this.connect(username)
    }
  },
  beforeDestroy () {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
  }
}
</script>

<style lang="scss">
.chat-box {
  height: 100%;
  background-color: #419FD9;
  border-radius: 15px;
  padding: 20px;
  .chat-box-login-wrap {
    margin-top: 200px;
  }
  .chat-box-area {
    width: 600px;
    height: 100%;
  }
  .chat-box-list-wrap {
    height: calc(100% - 200px);
  }
  .chat-box-input {
    margin-top: 10px;
  }
  .error-message {
    color: red;
    min-height: 16px;
    font-size: 16px;
    margin: 10px 0;
    font-size: 12px;
  }
}
</style>
