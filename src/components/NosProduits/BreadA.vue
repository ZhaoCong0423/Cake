<template>
    <div>
        <div id="ground">
                <div></div>
                <span>蛋糕</span>
            </div>
            <div id="cakes">
                <a href="" class="cake" v-for="item in eat" :key="item.china">
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
</template>

<script>
export default {
    name:'BreadA',
    data(){
        return{
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
      ]
        }
    }
}
</script>

<style scoped>
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

</style>

