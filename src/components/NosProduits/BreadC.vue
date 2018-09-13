<template>
    <div>
        <div id="ground">
                <div></div>
                <span>筛选结果</span>
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
    name:'BreadC',
    data(){
        return{
            eat: [
        {
          src: "http://static.mcake.com/goods/manyuemeihongsirong/C0301/list/1.jpg",
          english: "big cake !!!",
          china: "蜜桃物语",
          weight: "200"
        },
        {
          src: "http://static.mcake.com/goods/lanmeiqingrunapolun/N0301/list/1.jpg",
          english: "big cake !!!",
          china: "百香果",
          weight: "40"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20170615/1959/list_1959_1.jpg",
          english: "big cake !!!",
          china: "草莓红蓉",
          weight: "630"
        },
        {
          src:
            "http://static.mcake.com/goods/faxiangnaiyoukeli/C0201/list/1.jpg",
          english: "big cake !!!",
          china: "蓝莓",
          weight: "457"
        },
        {
          src:
            "http://www.mcake.com/postsystem/docroot/images/goods/20150602/1844/list_1844_1.jpg",
          english: "big cake !!!",
          china: "西瓜",
          weight: "17"
        },
        {
          src:
            "http://static.mcake.com/goods/bailipaidui/J0401/list/1.jpg",
          english: "big cake !!!",
          china: "小花花",
          weight: "234"
        },
        {
          src: "http://static.mcake.com/goods/kafaxiangti/C0101/list/1.jpg",
          english: "big cake !!!",
          china: "可可",
          weight: "123"
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
  width: 389px;
  height: 35px;
  background-image: url(http://www.mcake.com/postsystem/docroot/images/kindeditor/20141015/2014101511495864670.png);
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

