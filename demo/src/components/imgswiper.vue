<!-- The ref attr used to find the swiper instance -->
<template>
<div class="swiperbox">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="swiper1" id="swiper1">
        <swiper-slide v-for="(item,index) in images" :key="index" class="sitem1">
            <img class="vm g10" :src="item.imgurl" alt="">
            <div class="imgname">
              <p class="p1">{{item.imgname}}</p>
            </div>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <swiper :options="swiperOptionThumbs" class="gallery-thumbs swiper2" ref="swiperThumbs">
        <swiper-slide v-for="(item,index) in images" :key="index" class="sitem2" ref="slidelist">
            <div class="slist">
                <img class="vm smallimg" :src="item.imgurl" alt="">
                <div class="mask"></div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
  export default {
    props:['images'],
    name: 'carrousel',
    data() {
      return {
        newwidth:0,
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: false,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 0,
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          loopedSlides: 10,
          loop:true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        },
        swiperOptionThumbs:{
          height:'auto',
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

        let swiper1 = document.getElementById('swiper1');
        let swiperWidth1 = swiper1.offsetWidth;
        this.newwidth = swiperWidth1/5+'px';
        console.log(this.newwidth)

        let slideGroup = this.$refs.slidelist;
        slideGroup.map((current,index,arr)=>{
          console.log(current.$el.style.width)
          current.$el.style.width=this.newwidth
        })


        // you can use current swiper instance object to do something(swiper methods)
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        console.log('this is current swiper instance object', this.swiper)
        //this.swiper.slideTo(3, 1000, false)

        this.$nextTick(() => {
            const swiperTop = this.$refs.mySwiper.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper

            swiperTop.params.control = swiperThumbs
            swiperThumbs.params.control = swiperTop
        })
    },
    methods:{

    }
  }
</script>

<style scoped>
    .swiper-container {width: 70%;}
    .sitem1 {position: relative;}
    .imgname {width: 100%;height: 34px;background: rgba(0,0,0,0.5);position: absolute;bottom: 0;left: 0;}
    .imgname .p1 {font-size: 14px;color:#fff;line-height: 34px;text-indent: 20px;}

    .swiper2 {margin-top: 10px;}
    .slist {position: relative;cursor: pointer;width: 100%;height: 100%;}
    .smallimg {width:100%;height: 100%;}
    .mask {background: #000;opacity: 0.5;position: absolute;top: 0;left: 0;width: 100%;height: 100%;transition:all ease 0.5s;}
    .slist:hover .mask {opacity: 0;}
    .swiper-slide-active .mask{opacity: 0;}
</style>