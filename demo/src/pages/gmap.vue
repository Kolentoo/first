<template>

    <div class="mapbox">
        <div id="map"></div>

        <div id="map2"></div>

        <div id="map3"></div>

        <div id="map4"></div>

        <div id="map5"></div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            //谷歌
            let gmap = document.getElementById('map');
            var uluru = {lat: -25.344, lng: 131.036};
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 4, center: uluru});
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({position: uluru, map: map});
            

            var self = this;
            //bing地图
            setTimeout(() => {
                // 常规
                var map2 = new Microsoft.Maps.Map(document.getElementById('map2'), {credentials: 'AkZwBAD5SdNHczowuRB4fFb-vTL3_N2TX_fpLBnFiQRkCPv6GDJu4Co-3u2Yd31n'});
                var map3 = new Microsoft.Maps.Map(document.getElementById('map3'), {credentials: 'AkZwBAD5SdNHczowuRB4fFb-vTL3_N2TX_fpLBnFiQRkCPv6GDJu4Co-3u2Yd31n', center: new Microsoft.Maps.Location(47.6215, -122.349329), mapTypeId: Microsoft.Maps.MapTypeId.birdseye, zoom: 18});
                // //实景
                var map4 = new Microsoft.Maps.Map(document.getElementById('map4'), {
                    /* No need to set credentials if already passed in URL */
                    mapTypeId: Microsoft.Maps.MapTypeId.road,
                    zoom: 18,
                    center: new Microsoft.Maps.Location(28.332823, -81.492279) });
                map4.setView({ mapTypeId: Microsoft.Maps.MapTypeId.streetside });


                // var map = new Microsoft.Maps.Map(document.getElementById('map'), {credentials: 'AkZwBAD5SdNHczowuRB4fFb-vTL3_N2TX_fpLBnFiQRkCPv6GDJu4Co-3u2Yd31n', center: new Microsoft.Maps.Location(40.890241, 12.492298), mapTypeId: Microsoft.Maps.MapTypeId.birdseye, zoom: 18});





            }, 500);
            
            


            


        },
        methods:{

        }
    }

            
</script>

<style scoped>
    #map {width: 600px;height: 400px;}
    #map2 {width: 600px;height: 400px;}
    #map3 {width: 600px;height: 400px;}
    #map4 {width: 600px;height: 400px;}
    #map5 {width: 600px;height: 400px;}
</style>


