<template>
    <div class="nos">
        <div class="block">

            <el-carousel trigger="click" height="550px">
                <el-carousel-item v-for="item in list" :key="item.src">
                    <img :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="zhonglei">
            <div id="celan">
                <div id="screen">
                    <div id="screen_top">
                        <a href="">#口味筛选</a>
                    </div>
                    <div id="screen_center">
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadA" @mouseenter="UP($event)" @mouseleave="DWON($event)" class="xxx">
                                <span>全部种类</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadB" @mouseenter="UP($event)" @mouseleave="DWON($event)" class="xxx">
                                <span>拿破仑</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadC" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>鲜奶</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadD" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>慕斯</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadE" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>芝士</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadF" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>巧克力</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadG" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>咖啡</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadH" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>坚果</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadI" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>水果</span>
                            </a>
                        </div>
                        <div class="center" @click="Color($event)">
                            <a href="#/NosProduits/BreadJ" @mouseenter="UP($event)" @mouseleave="DWON($event)">
                                <span>冰淇淋</span>
                            </a>
                        </div>
                    </div>
                    <div id="screen_bottom" @click="Color($event)">
                        <a href="#ground_b">#小食</a>
                    </div>
                </div>
            </div>

            <router-view></router-view>
            
            <div id="ground_b">
                <div></div>
                <span>小食</span>
            </div>
            <div id="food">
                <a href="" class="cake" v-for="item in food" :key="item.china">
                    <div>
                        <img :src="item.src" alt="" :key="item.china" class="cake_img">
                        <div id="cakes_top">
                            <div id="cakes_top_text">
                                <p>2磅/{{item.weight}}RMB</p>

                                <p>甜度指数：**</p>
                            </div>
                            <div id="img_cakes" style="background-color:white;width: 36px;height: 36px;">
                                <div id="cakes_top_img"></div>
                            </div>
                        </div>
                    </div>
                    <a href="" class="cake_message">{{item.english}}<br>{{item.china}}</a>
                </a>
            </div>
        </div>

        <div id="footer">
          <div id="footer_router">
            <div class="footer_img">
              <a href="" @mouseenter="come" @mouseleave="go">
                <img src="http://www.mcake.com/postsystem/docroot/images/system/20180828/2018082815192942918.jpg" alt="">
              </a>
            </div>
            <div class="footer_img">
              <a href="" @mouseenter="come" @mouseleave="go">
                <img src="http://www.mcake.com/postsystem/docroot/images/system/20180907/2018090717375839692.png" alt="">
              </a>
            </div>
            <div class="footer_img">
              <a href="" @mouseenter="come" @mouseleave="go">
                <img src="http://www.mcake.com/postsystem/docroot/images/system/20180115/2018011510145657808.jpg" alt="" width="370px" height="230px">
              </a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "NosProduits",
  data() {
    return {
      list: [
        {
          src:
            "http://edm.mcake.com/fangli/2018-pc/mcake-banner-2018/images/jpgs/baixiangguo.png"
        },
        {
          src:
            "http://edm.mcake.com/fangli/2018-pc/mcake-banner-2018/images/jpgs/kxj.jpg"
        },
        {
          src:
            "http://edm.mcake.com/fangli/2018-pc/mcake-banner-2018/images/memberDay-9yue/banner-bg.jpg"
        }
      ],
      eat: [
        {
          src: "http://static.mcake.com/goods/mitaowuyu/R1402/list/1.jpg",
          english: "big cake !!!",
          china: "蜜桃物语",
          weight: "200"
        },
        {
          src: "http://static.mcake.com/goods/baixiangguomusi/R1602/list/1.jpg",
          english: "big cake !!!",
          china: "百香果",
          weight: "40"
        },
        {
          src:
            "http://static.mcake.com/goods/manyuemeihongsirong/C0301/list/1.jpg",
          english: "big cake !!!",
          china: "草莓红蓉",
          weight: "630"
        },
        {
          src:
            "http://static.mcake.com/goods/lanmeiqingrunapolun/N0301/list/1.jpg",
          english: "big cake !!!",
          china: "蓝莓",
          weight: "457"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150602/1849/list_1849_1.jpg",
          english: "big cake !!!",
          china: "西瓜",
          weight: "17"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20170615/1959/list_1959_1.jpg",
          english: "big cake !!!",
          china: "小花花",
          weight: "234"
        },
        {
          src: "http://static.mcake.com/goods/anyitu/R0801/list/1.jpg",
          english: "big cake !!!",
          china: "可可",
          weight: "123"
        },
        {
          src: "http://static.mcake.com/goods/ninuo/T0502/list/1.jpg",
          english: "big cake !!!",
          china: "白色恋人",
          weight: "78"
        },
        {
          src: "http://static.mcake.com/goods/jundukeke/M0601/list/1.jpg",
          english: "big cake !!!",
          china: "兔子",
          weight: "35"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20151207/2177/list_2177_1.jpg",
          english: "big cake !!!",
          china: "雪梅",
          weight: "48"
        },
        {
          src: "http://static.mcake.com/goods/ailisimengjing/R0102/list/1.jpg",
          english: "big cake !!!",
          china: "尼诺",
          weight: "555"
        },
        {
          src:
            "http://static.mcake.com/goods/faxiangnaiyoukeli/C0201/list/1.jpg",
          english: "big cake !!!",
          china: "拿破仑",
          weight: "454"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150818/2027/list_2027_1.jpg",
          english: "big cake !!!",
          china: "棒棒糖",
          weight: "358"
        },
        {
          src:
            "http://static.mcake.com/goods/heisenlinnapolun/N0605/list/1.jpg",
          english: "big cake !!!",
          china: "巧克力",
          weight: "954"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20170615/1933/list_1933_1.jpg",
          english: "big cake !!!",
          china: "芒果",
          weight: "88"
        },
        {
          src: "http://static.mcake.com/goods/liulianxueta/C0801/list/1.jpg",
          english: "big cake !!!",
          china: "落在特",
          weight: "96"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20151027/2132/list_2132_1.jpg",
          english: "big cake !!!",
          china: "提拉米苏",
          weight: "114"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150602/1844/list_1844_1.jpg",
          english: "big cake !!!",
          china: "玫瑰",
          weight: "552"
        },
        {
          src: "http://static.mcake.com/goods/bangbangtang/M0501/list/1.jpg",
          english: "big cake !!!",
          china: "雪塔",
          weight: "33"
        },
        {
          src: "http://static.mcake.com/goods/mangguomangue/C0401/list/1.jpg",
          english: "big cake !!!",
          china: "黑兰",
          weight: "45"
        },
        {
          src: "http://static.mcake.com/goods/tilamisu/J0801/list/1.jpg",
          english: "big cake !!!",
          china: "卡法",
          weight: "55"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20170615/1914/list_1914_1.jpg",
          english: "big cake !!!",
          china: "摩登",
          weight: "57"
        },
        {
          src: "http://static.mcake.com/goods/pinkluosaite/M0401/list/1.jpg",
          english: "big cake !!!",
          china: "基德",
          weight: "69"
        },
        {
          src: "http://static.mcake.com/goods/yuesefenmeigui/T0399/list/1.jpg",
          english: "big cake !!!",
          china: "抹茶",
          weight: "78"
        },
        {
          src: "http://static.mcake.com/goods/modengchadao/Z0401/list/1.jpg",
          english: "big cake !!!",
          china: "剑",
          weight: "414"
        },
        {
          src: "http://static.mcake.com/goods/moguiqiaokeli/Q0201/list/1.jpg",
          english: "big cake !!!",
          china: "天使",
          weight: "358"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150608/1949/list_1949_1.jpg",
          english: "big cake !!!",
          china: "魔鬼",
          weight: "47"
        },
        {
          src: "http://static.mcake.com/goods/ruiketahouai/Z0101/list/1.jpg",
          english: "big cake !!!",
          china: "小凶许",
          weight: "358"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150602/1859/list_1859_1.jpg",
          english: "big cake !!!",
          china: "韭菜",
          weight: "454"
        },
        {
          src: "http://static.mcake.com/goods/kafaxiangti/C0101/list/1.jpg",
          english: "big cake !!!",
          china: "茄子",
          weight: "124"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150603/1889/list_1889_1.jpg",
          english: "big cake !!!",
          china: "辣椒",
          weight: "54"
        },
        {
          src: "http://static.mcake.com/goods/bailipaidui/J0401/list/1.jpg",
          english: "big cake !!!",
          china: "黄瓜",
          weight: "35"
        },
        {
          src: "http://static.mcake.com/goods/zhenqingmocha/J0201/list/1.jpg",
          english: "big cake !!!",
          china: "西红柿",
          weight: "14"
        }
      ],
      food: [
        {
          src:
            "http://static.mcake.com/goods/xiaoshiguangdalibao/R0226/list/1.jpg",
          english: "cofe cocl tea",
          china: "土豆子",
          weight: "88"
        },
        {
          src: "http://static.mcake.com/goods/mchocolate/R0201/list/1.jpg",
          english: "zheshipinyin",
          china: "生巧克力",
          weight: "94"
        },
        {
          src: "http://static.mcake.com/goods/banshuzhishi/bj_R0207/list/1.jpg",
          english: "black",
          china: "可乐",
          weight: "321"
        },
        {
          src:
            "http://static.mcake.com/goods/zhishixiaosheng/bj_R0230/list/1.jpg",
          english: "whoter",
          china: "雪碧",
          weight: "150"
        },
        {
          src:
            "http://static.mcake.com/goods/tanixiaohongmei/bj_R0245/list/1.jpg",
          english: "pig",
          china: "咖啡",
          weight: "180"
        },
        {
          src:
            "http://static.mcake.com/goods/yundingxiaohuayuanwei/bj_R0233/list/1.jpg",
          english: "drink",
          china: "茶",
          weight: "190"
        },
        {
          src:
            "http://static.mcake.com/goods/yundingxiaohuaqiaokeliwei/bj_R0241/list/1.jpg",
          english: "asdasdasda",
          china: "你喝啥",
          weight: "45"
        }
      ]
    };
  },
  methods: {
    UP(e) {
      // console.log(e.target);
      $(e.target).css({
        "background-image":
          "url(http://www.mcake.com/shop/theme/xth1/images/comm/icon.png)"
      });
    },

    DWON(e) {
      $(e.target).css({ "background-image": "url()" });
    },

    Color(e) {
      // $('.center').css({'color':"red"});
      $(".color").removeClass("color");
      $(e.target).addClass("color");
      // $(e.target).siblings().removeClass('color');
    },

    come(e) {
      $(e.target).css({ "border-bottom": "3px solid #767676" });
    },

    go(e) {
      $(e.target).css({ "border-bottom": "3px solid #d9e8ec" });
    }
  },

  mounted() {
    $(".cake_img").hover(
      function(e) {
        // console.log(e.target);
        $(e.target)
          .parent("")
          .find("#cakes_top")
          .stop()
          .animate({ bottom: "0" }, 400);
      },
      function(e) {
        $(e.target)
          .parent("")
          .find("#cakes_top")
          .stop()
          .animate({ bottom: "-55px" }, 400);
      }
    );
  }
};
</script>

<style scoped>
.color {
  color: #b0916a;
}
.nos {
  padding-top: 100px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

#zhonglei {
  width: 100%;
  /* height: 2951px; */
}

#celan {
  position: relative;
  width: 1136px;
  height: 1px;
}

#ground {
  width: 1136px;
  height: 65px;
  margin: 0 auto;
  padding: 15px 0 10px 0;
}

#ground > div {
  margin: 0 auto;
  width: 142px;
  height: 36px;
  background-image: url(http://www.mcake.com/shop/theme/xth1/images/index/tc_title.png);
}

#cakes {
  width: 1136px;
  /* height: 1947px; */
  /* background-color: aquamarine; */
  margin: 0 auto;
  border-top: 1px solid gray;
  display: flex;
  flex-wrap: wrap;
}

.cake {
  display: inline-block;
  width: 225px;
  height: 276px;
  /* background-color: antiquewhite; */
  margin-top: 15px;
  margin-right: 2.2px;
  text-decoration: none;
}

.cake > div {
  /* width: 216px; */
  height: 216px;
  position: relative;
  overflow: hidden;
}

.cake > a {
  color: rgb(118, 118, 118);
  font-size: 12px;
  text-decoration: none;
}

.cake > a:hover {
  color: #b0916a;
}

#cakes_top {
  width: 216px;
  height: 55px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: -55px;
  left: 4px;
  display: flex;
  justify-content: space-around;
  color: white;
}

#cakes_top_text {
  padding-top: 8px;
}

#cakes_top_text > p {
  margin: 0;
  font-size: 12px;
  line-height: 20px;
}

#cakes_top_img {
  width: 36px;
  height: 36px;
  background-image: url(http://www.mcake.com/shop/theme/xth1/images/comm/icon.png);
  background-position: -40px -4px;
  /* vertical-align:middle; */
}

#img_cakes {
  margin-top: 10px;
}

#food {
  width: 1136px;
  margin: 0 auto;
  display: flex;
  border-top: 1px solid gray;
  flex-wrap: wrap;
}

#ground_b {
  width: 1136px;
  height: 65px;
  margin: 0 auto;
  padding: 15px 0 10px 0;
}

#ground_b > div {
  margin: 0 auto;
  width: 400px;
  height: 36px;
  background-image: url(http://www.mcake.com/shop/theme/xth1/images/index/tp_title.png);
}

#screen {
  width: 83px;
  height: 362px;
  /* background-color: aqua; */
  position: absolute;
  right: -470px;
  top: 90px;
}

#screen_top {
  width: 83px;
  height: 31px;
  background-image: url(http://www.mcake.com/shop/theme/xth1/images/comm/icon.png);
  background-position: 90px -130px;
}

#screen_top > a {
  color: rgb(123, 145, 150);
  font-size: 12px;
  text-decoration: none;
}

#screen_center {
  width: 83px;
  height: 280px;
  /* background-color: bisque; */
}

.center {
  padding: 5px 0 5px 0;
}

.center > a {
  display: block;
  color: rgb(118, 118, 118);
  font-size: 12px;
  width: 83px;
  height: 18px;
  /* background-image: url(http://www.mcake.com/shop/theme/xth1/images/comm/icon.png); */
  background-position: 55px -220px;
  text-align: right;
  text-decoration: none;
}

.center > a:hover {
  color: #b0916a;
}

.center > a > span {
  display: block;
  padding-right: 22px;
}

#screen_bottom > a {
  font-size: 12px;
  color: rgb(123, 145, 150);
  text-decoration: none;
}
#footer {
  width: 100%;
  height: 284px;
  background-color: #f2f6f7;
}
#footer_router {
  width: 1200px;
  height: 284px;
  /* background-color: aquamarine; */
  margin: 0 auto;
  display: flex;
}
.footer_img {
  width: 400px;
  height: 269px;
  /* background-color: wheat; */
  margin-top: 15px;
}
.footer_img > a {
  display: inline-block;
  margin: 15px;
  padding-bottom: 6px;
  border-bottom: 3px solid #d9e8ec;
  box-sizing: border-box;
}

</style>
<style>
.el-carousel__button{
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
  background-color: #afaca2;
}
.is-active>.el-carousel__button{
  background-color: #b2243b;
}
</style>