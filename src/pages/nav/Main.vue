<template>
  <div>
    <!-- 上半部分 -->
    <div class="top-box">
      <!-- 上半部分左侧 -->
      <div>
        <el-card>
          <div id="myChart" :style="{ width: '550px', height: '300px' }"></div>
        </el-card>
      </div>
      <!-- 上半部分右侧 -->
      <div class="right-box">
        <el-card class="box-info1">
          <div>
            <span>总注册量</span>
            <p>2038471</p>
          </div>
        </el-card>
        <el-card class="box-info2">
          <div>
            <span>总访问量</span>
            <p>1002029</p>
          </div>
        </el-card>
        <el-card class="box-info3">
          <div>
            <span>日用户活跃度</span>
            <p>80%</p>
          </div>
        </el-card>
        <el-card class="box-info4">
          <div>
            <span>月用户活跃度</span>
            <p>50%</p>
          </div>
        </el-card>
      </div>
    </div>
    <!--下半部分 -->
    <div class="bottom-box">
      <!-- 下半部分左侧 -->
      <div class="bottom-left">
        <el-card>
          <div id="myChart2" :style="{ width: '650px', height: '300px' }"></div>
        </el-card>
      </div>
      <!-- 下半部分右侧 -->
      <div>
        <el-card class="bottom-r-r">
          <!-- 左侧 -->
          <div class="card-box">
            <div class="card-box-left">
              <p class="avgTime">日平均使用时长</p>
              <div class="timeBox">
                <span class="timeNumber">30</span>
                <span>min</span>
              </div>
              <p class="avgDay">产品用户每日平均使用</p>
            </div>
            <!-- 右侧 -->
            <div>
              <p class="avgTime">月平均使用时长</p>
              <div class="timeBox">
                <span class="timeNumber">120</span>
                <span>min</span>
              </div>
              <p class="avgDay">产品用户每月平均使用</p>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawZhu();
  },
  methods: {
    // 柱状图
    drawZhu() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart.setOption({
        title: { text: "日注册量" },
        xAxis: {
          type: "category",
          data: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              12000,
              {
                value: 8000,
                itemStyle: {
                  color: "#a90000",
                },
              },
              10000,
              8000,
              12000,
              21100,
              19000,
              12888,
              17000,
              18000,
              23000,
              12000,
              6000,
            ],
            type: "bar",
          },
        ],
      });
    },
    // 饼状图
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "总下载量" },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "10%",
          left: "left",
          orient: "vertical",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "10",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 500, name: "APP store 50%" },
              { value: 350, name: "安卓 35%" },
              { value: 150, name: "链接 15%" },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.top-box {
  display: flex;
}
.right-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.right-box .el-card {
  width: 260px;
  height: 163px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.right-box .el-card span {
  font-size: 20px;
  color: #ffffff;
}
.right-box .el-card p {
  font-size: 48px;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
}
.box-info1 {
  background: linear-gradient(-90deg, #3e8ef8, #6cc5ff);
}
.box-info2 {
  background: linear-gradient(-90deg, #40e0a6, #65e37f);
}
.box-info3 {
  background: linear-gradient(-90deg, #aa3ef8, #a76cff);
}
.box-info4 {
  background: linear-gradient(-90deg, #3e4af8, #716cff);
}
/* 下半部分 */
.bottom-left{
    margin-right: 20px;
}
.bottom-box {
  display: flex;
}
.card-box {
  display: flex;
  justify-content: space-between;
}
.avgTime {
  font-size: 20px;
  color: #333333;
  font-weight: 500;
}
.timeBox {
  text-align: center;
}
.timeNumber{
    color: #434DF8;
    font-size: 60px;
    line-height: 217px;
    font-weight: bold;
}
.avgDay{
    color: #666666;
    font-size: 15px;
    font-weight: 400;   
}
.bottom-r-r{
    height: 100%;
    width: 100%;
}
.card-box-left{
    margin-right: 90px;
}
</style>