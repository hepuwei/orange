<template>
    <div class="header">
        <v-touch 
            class="icon_left"
            tag="div"
            @tap="handleBack()"
        >
            <i class="iconfont" v-if="icon_left">&#xe518;</i>
        </v-touch>
        <h2>{{ title }}</h2>
        <v-touch
            class="icon_right"
            tag="div"
            @tap="handleList()"
        >
            <i class="iconfont" v-if="icon_right">&#xe53f;</i>
        </v-touch>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: { 
        title: {
            type: String,
            default: '剧院'
        },
        icon_left: {
            type: Boolean,
        },
        icon_right: {
            type: Boolean,
        }
    },
    methods: {
        handleBack(){
            this.$router.back();
        },
        handleList(){
            this.$observer.$emit("handleToggle",true);
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: .5rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .15rem;
        border-bottom: 1px solid #ccc;
    }
    .header .icon_left{
        position: absolute;
        left: 0;
    }
    .header .icon_left i{
        font-size: .3rem;
    }
    .header h2{
        font-weight: normal;
    }
    .header .icon_right{
        position: absolute;
        right: 0;
    }
    .header .icon_right i{
        font-size: .3rem;
    }
</style>