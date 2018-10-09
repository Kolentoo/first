<!-- The ref attr used to find the swiper instance -->
<template>
<div class="swiperbox">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in images" :key="index" class="sitem">
            <img class="vm g10" :src="item.imgurl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs swiper2" ref="swiperThumbs">
        <swiper-slide v-for="(item,index) in images" :key="index">
            <div class="slist" @click="gopic(index)">
                <img class="vm smallimg" :src="item.imgurl" alt="">
            </div>
            
            <!--<p class="p1">{{index}}</p>-->
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
  // swiper options example:
  export default {
    props:['images'],
    name: 'carrousel',
    data() {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: false,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 0,
        //   direction: 'vertical',
        //   grabCursor: true,
        //   setWrapperSize: true,
        //   autoHeight: true,
          pagination: '.swiper-pagination',
        //   paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          loopedSlides: 10,
          loop:true,
        //   mousewheelControl: true,
        //   observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //   debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        },
        swiperOptionThumbs:{
          slidesPerView: 5,
          touchRatio: 0.2,
          loop: true,
          loopedSlides:10, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)

        this.$nextTick(() => {
            const swiperTop = this.$refs.mySwiper.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper

            swiperTop.params.control = swiperThumbs
            swiperThumbs.params.control = swiperTop
        })
    },
    methods:{
        gopic(index){
            console.log(index)
            // this.swiper.slideTo(index, 500, false)
        }
    }
  }
</script>

<style scoped>
    .swiper2 {margin-top: 10px;}
    .swiper-container {width: 70%;}
    .smallimg {width:92%;display: block;position: relative;margin-left: 4%;}
    /*.sitem {width: 100% !important;}*/
</style>