<template>
    <div class="chat-box-login">
        <a-row>
            <a-col :span="16" :offset="2">
                <a-input
                    placeholder="Enter username"
                    v-model="username"
                />
            </a-col>
            <a-col :span="2" :offset="1">
                <a-button @click="onLogin">Login</a-button>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    name: 'ChatBoxLogin',
    data () {
        return {
            username: ''
        }
    },
    methods: {
        onLogin () {
            if (this.username) {
                this.$store.commit('chat/SET_USERNAME', this.username)
            }
        }
    }
}
</script>

<style lang="scss">

</style>
