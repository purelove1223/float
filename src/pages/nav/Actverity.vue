<template>
  <div>
    <div class="select">
      <!-- 上部分选择栏 -->
      <div>
        <span class="title-2">批量操作</span>
        <el-select v-model="selectTwo" slot="prepend" placeholder="正常">
          <el-option
            v-for="item in optionTwo"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <div>
        <span class="title-2">筛选</span>
        <el-select v-model="selectThree" slot="prepend" placeholder="男">
          <el-option
            v-for="item in optionThree"
            :key="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
    </div>
    <!-- 动态内容 -->
    <el-card>
      <div class="box-card">
        <!-- 头像部分 -->
        <div class="avtar">
          <el-avatar
            :size="80"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <!-- 内容部分 -->
        <div>
          <!-- 内容上半部分 -->
          <div class="right-top">
            <p class="title">辛辣天赛</p>
            <div><button class="btn1">已通过</button></div>
          </div>
          <p class="time">一分钟前</p>
          <p class="info">
            多始角眼下存物南只到关风那则过直张处场团保使此眼影成群天土受派最加影好构做究海我门江色义准被热将展实往把展主音习军却上五后及满术东大石九美办。以铁存起化利强心面离转白地们把会却备后维江并识调书打何非劳教你阶争在中过影好名无车构活才少将化术分以造利提发三江形其路接的问。本快我引部很快查次结育厂型格义题和效老八物做后江易国何电部是非者手与江史系国队知圆目天龙元每包象打格意她六门总人把除而王何多。却研三叫意被土图速极花族量新长情里头主可门有指么金管动叫达常声市程院在。道律何场生题则非构查如例何好该矿经并集特重代白门能片需称正感局传平别量放务林门列众类总一证政度有识论物老约改解情水机火年式马放极着直头打山新话应多上。置进就般花把什马术支且际们式类较被院报受容科科米严史标战她深相想级民度花正们儿管门使么先军际
          </p>
          <div class="image-box">
            <el-image
              class="img"
              v-for="item in imgList"
              :key="item.id"
              style="width: 100px; height: 100px"
              :src="item.url"
              :fit="fit"
            ></el-image>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 动态内容 -->
    <el-card>
      <div class="box-card">
        <!-- 头像部分 -->
        <div class="avtar">
          <el-avatar
            :size="80"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <!-- 内容部分 -->
        <div>
          <!-- 内容上半部分 -->
          <div class="right-top">
            <p class="title">辛辣天赛</p>
            <div><button class="btn1">已通过</button></div>
          </div>
          <p class="time">一分钟前</p>
          <p class="info">
            多始角眼下存物南只到关风那则过直张处场团保使此眼影成群天土受派最加影好构做究海我门江色义准被热将展实往把展主音习军却上五后及满术东大石九美办。以铁存起化利强心面离转白地们把会却备后维江并识调书打何非劳教你阶争在中过影好名无车构活才少将化术分以造利提发三江形其路接的问。本快我引部很快查次结育厂型格义题和效老八物做后江易国何电部是非者手与江史系国队知圆目天龙元每包象打格意她六门总人把除而王何多。却研三叫意被土图速极花族量新长情里头主可门有指么金管动叫达常声市程院在。道律何场生题则非构查如例何好该矿经并集特重代白门能片需称正感局传平别量放务林门列众类总一证政度有识论物老约改解情水机火年式马放极着直头打山新话应多上。置进就般花把什马术支且际们式类较被院报受容科科米严史标战她深相想级民度花正们儿管门使么先军际
          </p>
          <div class="image-box">
            <el-image
              class="img"
              v-for="item in imgList"
              :key="item.id"
              style="width: 100px; height: 100px"
              :src="item.url"
              :fit="fit"
            ></el-image>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 动态内容 -->
    <el-card>
      <div class="box-card">
        <!-- 头像部分 -->
        <div class="avtar">
          <el-avatar
            :size="80"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <!-- 内容部分 -->
        <div>
          <!-- 内容上半部分 -->
          <div class="right-top">
            <p class="title">辛辣天赛</p>
            <div><button class="btn1">已通过</button></div>
          </div>
          <p class="time">一分钟前</p>
          <p class="info">
            多始角眼下存物南只到关风那则过直张处场团保使此眼影成群天土受派最加影好构做究海我门江色义准被热将展实往把展主音习军却上五后及满术东大石九美办。以铁存起化利强心面离转白地们把会却备后维江并识调书打何非劳教你阶争在中过影好名无车构活才少将化术分以造利提发三江形其路接的问。本快我引部很快查次结育厂型格义题和效老八物做后江易国何电部是非者手与江史系国队知圆目天龙元每包象打格意她六门总人把除而王何多。却研三叫意被土图速极花族量新长情里头主可门有指么金管动叫达常声市程院在。道律何场生题则非构查如例何好该矿经并集特重代白门能片需称正感局传平别量放务林门列众类总一证政度有识论物老约改解情水机火年式马放极着直头打山新话应多上。置进就般花把什马术支且际们式类较被院报受容科科米严史标战她深相想级民度花正们儿管门使么先军际
          </p>
          <div class="image-box">
            <el-image
              class="img"
              v-for="item in imgList"
              :key="item.id"
              style="width: 100px; height: 100px"
              :src="item.url"
              :fit="fit"
            ></el-image>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNumber"
        :page-sizes="[10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="3"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectTwo: "通过",
      optionTwo: ["通过", "不通过"],
      selectThree: "全部通过",
      optionThree: ["全部通过", "全部不通过"],
      imgList: [
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: 1,
          url:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },

        {
          id: 1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.right-top {
  display: flex;
  justify-content: space-between;
}
.box-card {
  display: flex;
  justify-content: start;
}
.avtar {
  flex: 0;
}
.title {
  font-size: 24px;
}
.time {
  color: #999999;
  font-size: 18px;
  margin-top: 24px;
}
.btn1 {
  width: 81px;
  height: 42px;
  background: #fff03f;
  border-radius: 6px;
  border: none;
}
.info {
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
}
.image-box {
  margin-top: 17px;
}
.img {
  margin-right: 8px;
}
.el-card {
  margin-top: 20px;
}
.title-2 {
  font-size: 18px;
}
.el-select {
  width: 111px;
  height: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.select {
  display: flex;
  justify-content: flex-end;
}
</style>