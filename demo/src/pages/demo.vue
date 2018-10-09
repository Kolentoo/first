<template>
    <div class="demo">

        <!--<vueswiper :images="imgdata"></vueswiper>-->
        <imgswiper :images="imgdata"></imgswiper>


    </div>
</template>

<script>
    import vueswiper from '../components/vueswiper'
    import imgswiper from '../components/imgswiper'
    export default {
        data(){
            return{
                // 接收到的接口图片数据
                imgdata:[
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000890.jpg','imgname':'house1','show':false},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000892.jpg','imgname':'house2','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000894.jpg','imgname':'house3','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000896.jpg','imgname':'house4','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000897.jpg','imgname':'house5','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000898.jpg','imgname':'house6','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000899.jpg','imgname':'house7','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/0835469220000890.jpg','imgname':'house8','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/08354692200008910.jpg','imgname':'house9','show':true},
                    {'imgurl':'http://image.vanfun.net/2018/1007/08354692200008911.jpg','imgname':'house10','show':true}
                ],
            }
        },
        created(){

        },
        mounted(){

        },
        components: {
            vueswiper,imgswiper
        }
    }
</script>

<style scoped>

</style>


