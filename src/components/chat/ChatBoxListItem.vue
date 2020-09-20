<template>
    <div class="chat-box-list-item">
        <div :class="{ 'system-message': !message.name, 'my-message': USERNAME === message.name, 'other-message': USERNAME !== message.name && message.name }">
            <span class="date">{{ message.created | formatDate }}</span>&nbsp;
            <span v-if="message.name" class="username">{{ message.name }}</span>
            <span class="message">{{ message.text }}</span>
        </div>
        <!-- <div class="clearfix"></div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ChatBoxListItem',
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    computed: {
        ...mapGetters('chat', ['USERNAME'])
    },
    filters: {
        formatDate (value) {
            
            const date = new Date(value)
            let result = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' '
            result += date.getHours() + ':' + date.getMinutes()
            return result
        }
    }
}
</script>

<style lang="scss">
.chat-box-list-item {
    margin-top: 10px;
    .system-message {
        font-size: 12px;
        font-style: italic;
        color: #419FD9;
        text-align: center;
    }
    .my-message {
        width: 80%;
        margin-left: 20%;
        padding: 10px;
        border-radius: 10px;
        background-color: #8EB463;
        .date, .username {
            font-style: italic;
            font-weight: bold;
        }
        .message {
            display: block;
        }
    }
    .other-message {
        width: 80%;
        margin-right: 20%;
        padding: 10px;
        border-radius: 10px;
        background-color: #63A6B4;
        .date, .username {
            font-style: italic;
            font-weight: bold;
        }
        .message {
            display: block;
        }
    }
}
</style>
