<template>
    <div class="demo">

        <imgswiper :images="imgdata"></imgswiper>


    </div>
</template>

<script>
    import imgswiper from '../components/imgswiper'
    export default {
        data(){
            return{
                // 接收到的接口图片数据
                imgdata:[
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000890.jpg','imgname':'house1'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000892.jpg','imgname':'house2'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000894.jpg','imgname':'house3'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000896.jpg','imgname':'house4'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000897.jpg','imgname':'house5'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000898.jpg','imgname':'house6'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000899.jpg','imgname':'house7'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000890.jpg','imgname':'house8'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/08354692200008910.jpg','imgname':'house9'},
                    {'imgurl':'http://image.vanfun.net/2018/1007/08354692200008911.jpg','imgname':'house10'}
                ],
            }
        },
        created(){

        },
        mounted(){

        },
        components: {
            imgswiper
        }
    }
</script>

<style scoped>

</style>


