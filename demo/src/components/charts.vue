<template>
    <div class="charts clearfix">
        <div class="chart1 fl" id="chart1"></div>

        <div class="chart2 fl" id="chart2"></div>

        <div class="chart3 fl" id="chart3"></div>

        <div class="chart4 fl" id="chart4"></div>

        <div class="chart5 fl" id="chart5"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            var chart = this.$echarts.init(document.getElementById('chart1'), 'light');//设置图标北京主题
            this.drawLine();//柱状图
            this.darwCricle();//饼图
            this.moreLine();//多条柱状图
            this.brokenline();//折线图
            this.allLine();//柱状与折线
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let chart1 = this.$echarts.init(document.getElementById('chart1'))
                // 绘制图表
                chart1.setOption({
                    title: { text: '柱状图' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },
            darwCricle(){
                let chart2 = this.$echarts.init(document.getElementById('chart2'));
                chart2.setOption({
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            roseType: 'angle',//去掉就是普通饼图
                            data:[
                                {value:235, name:'视频广告'},
                                {value:274, name:'联盟广告'},
                                {value:310, name:'邮件营销'},
                                {value:335, name:'直接访问'},
                                {value:400, name:'搜索引擎'}
                            ]
                        }
                    ]
                })
            },
            moreLine(){
                let chart3 = this.$echarts.init(document.getElementById('chart3'));
                chart3.setOption({
                    legend: {},
                    tooltip: {},
                    dataset: {
                        // 提供一份数据。
                        source: [
                            ['product', '2015', '2016', '2017'],
                            ['Matcha Latte', 43.3, 85.8, 93.7],
                            ['Milk Tea', 83.1, 73.4, 55.1],
                            ['Cheese Cocoa', 86.4, 65.2, 82.5],
                            ['Walnut Brownie', 72.4, 53.9, 39.1]
                        ]
                    },
                    // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
                    xAxis: {type: 'category'},
                    // 声明一个 Y 轴，数值轴。
                    yAxis: {},
                    // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                    series: [
                        {type: 'bar'},
                        {type: 'bar'},
                        {type: 'bar'}
                    ]
                });
            },
            brokenline(){
                let chart4 = this.$echarts.init(document.getElementById('chart4'));
                chart4.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                })
            },
            allLine(){
                let chart5 = this.$echarts.init(document.getElementById('chart5'));
                chart5.setOption({
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['蒸发量','降水量','平均温度']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '水量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} ml'
                            }
                        },
                        {
                            type: 'value',
                            name: '温度',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} °C'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'蒸发量',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },
                        {
                            name:'降水量',
                            type:'bar',
                            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'平均温度',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                })
            }
        }
    }
</script>

<style scoped>
    .chart1 {width: 500px;height: 400px;}
    .chart2 {width: 400px;height: 400px;}
    .chart3 {width: 800px;height: 400px;}
    .chart4 {width: 600px;height: 400px;}
    .chart5 {width: 800px;height: 400px;}
</style>


