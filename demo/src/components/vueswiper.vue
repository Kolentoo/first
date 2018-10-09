<template>
<div class="swiperbox">
  <swiper :options="swiperOption1" ref="mySwiper" class="swiper1">
    <swiper-slide v-for="(slide,index) in images" :key="index" class="slideitem1 slideitem">
      <img class="vm" :src="slide.imgurl" alt="">
      <div class="imgname">
        <p class="p1">{{slide.imgname}}</p>
      </div>
    </swiper-slide>

    <div class="swiper-button-prev prev1" slot="button-prev"></div>
    <div class="swiper-button-next next1" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>

  <swiper :options="swiperOption2" class="swiper2">
    <swiper-slide v-for="(slide,index) in images" :key="index" class="slideitem2 slideitem">
      <div class="slist" @click="showpic(slide,index)">
        <img class="vm" :src="slide.imgurl" alt="">
        <div class="mask" v-show="slide.show"></div>
      </div>
    </swiper-slide>

    <div class="swiper-button-prev prev2 hide" slot="button-prev"></div>
    <div class="swiper-button-next next2 hide" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    props:['images'],
    name: 'carrousel',
    data() {
      return {
        swiperOption1: {
          notNextTick: true,
          autoplay: 0,
          slidesPerView:1,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          prevButton: '.prev1',
          nextButton: '.next1',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          loop:true
        },
        swiperOption2: {
          freeMode: true,
          slidesPerView:6,
          prevButton: '.prev2',
          nextButton: '.next2',
          loop:false
        }
      }
    },
    created(){

    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper);
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      showpic(slide,index){

        this.images.map((current,idx,arr)=>{
          current.show=true
        })
        slide.show=false
        this.swiper.slideTo(index+1, 500, false)
      }
    }
  }
</script>

<style scoped>
    .swiper-container {width: 70%;}
    .swiper-slide img{width: 100%;}
    .swiper-slide .imgbox {position: relative;}
    .swiper-slide .imgname {position: absolute;bottom: 0;left: 0;width: 100%;height: 34px;background:rgba(0,0,0,0.5);}
    .swiper-slide .imgname .p1 {color:#fff;font-size: 14px;line-height: 34px;text-indent:30px; }

    .slidelist {width: 100% !important;}
    .slideitem {position: relative;}
    .slist {cursor: pointer;}
    .slist .mask {position: absolute;width: 100%;height: 100%;top: 0;left: 0;background: #000;opacity: 0.5;transition:all ease 0.5s;}
    .slist:hover .mask {opacity: 0;}
</style>


