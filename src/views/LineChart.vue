<template>
  <div class="line-chart">
    <div id="chart" style="width: 80%;height: 600px"></div>
  </div>
</template>

<script>

import jsonp from 'jsonp';
import echarts from "echarts";

const dataList = []

const option = {
  title:{
    text: '疫情曲线',
    show: true,
    x: 'center',
    top: '5%',
    textStyle: {
      color: '#e74c3c',
      fontStyle: 'normal',
      fontFamily: 'Microsoft YaHei'
    }
  },
  legend: {
    data: ['累计确诊', '累计治愈', '累计死亡','疑似病例']
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '累计确诊',
      type: 'line',
      //data数组中的值对应y轴的‘value’
      //data: [220, 232, 241, 234, 355, 370, 410]
    },
    {
      name: '累计治愈',
      type: 'line',
      //data: [20, 32, 51, 64, 100, 130, 189]
    },
    {
      name: '累计死亡',
      type: 'line',
      //data: [11,33,50, 72, 89, 154, 160]
    },
    {
      name:'疑似病例',
      type: 'line',
    }
  ]

}

export default {
  name: 'LineChart',
  mounted(){
    this.getdata()
    this.mycharts = echarts.init(document.getElementById('chart'))
  },
  data() {
    return {
      list1:[]
    };
  },
  methods: {
    getdata() {
        jsonp(
        'http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',
        (err, data) => {
         // console.log(data.data.historylist);

          this.list1 = data.data.historylist.map(item => {
            return {
              name: item.date,
              // 确诊总数
              cn_conNum: item.cn_conNum,
              cn_susNum: item.cn_susNum,
              cn_cureNum: item.cn_cureNum,
              cn_deathNum: item.cn_deathNum,
            };
          })
          //console.log(this.list1);
          option.xAxis.data = this.getlist('name')//传属性名字要加引号，否则会被当成变量
          //console.log(option.xAxis.data);
          

          // 国内确诊总人数
          option.series[0].data = this.getlist('cn_conNum')
           // 国内治愈总人数
          option.series[1].data = this.getlist('cn_cureNum')
          // 国内死亡总人数
          option.series[2].data = this.getlist('cn_deathNum')
          //疑似病例
          option.series[3].data = this.getlist('cn_susNum')
              
        this.mycharts.setOption(option);
      })
    },
    getlist(listName){
      return this.list1.slice(0, 80).reverse().map(item => item[listName])
    }
  }
};
</script>

<style scoped>
.line-chart {
  width:100%;
  display: flex;
  justify-content: center;
}
</style>
