<template>
  <div id="app">
    <div id="header">
      <div id="header_box">
        <div id="header_top">
          <div id="header_top_box">
            <img src="http://www.mcake.com/shop/theme/xth1//images/comm/logo.png" alt="">
            <span>
              <a href="">
                <li id="jingling">
                </li>
                0 件
              </a>
              <a href="">LOG IN 登录</a>
              <a href="">SIGN UP 注册</a>
            </span>
          </div>
        </div>
        <div id="header_bottom">
          <div>
            <div id="header_bottom_left">
              <div id="xiabiao" class="xiabiao" @click="move1()">
                <a href="#/" style="border-left:0">
                  <p>Nos Produits</p>
                  <p>全部产品</p>
                </a>
                <div id="yidong"></div>
              </div>
              <div class="xiabiao" @click="move2()">
                <a href="#/Napoleon">
                  <p>Napoléon</p>
                  <p>拿破仑系列</p>
                </a>
              </div>
              <div class="xiabiao" @click="move3()">
                <a href="#/Nouveaute">
                  <p>Nouveauté</p>
                  <p>最新活动</p>
                </a>
              </div>
              <div class="xiabiao" @click="move4()">
                <a href="#/Mon">
                  <p>Mon M'CAKE</p>
                  <p>会员中心</p>
                </a>
              </div>
            </div>
            <div id="header_bottom_right">
              <div id="header_b_left">
                <span id="phone"></span>4006-678-678
                <br>
                <span id="home"></span>
                <a href="" style="font-size:12px; color:#b0916a; text-decoration: none;">
                  六环以内部分区域满100元包邮
                </a>
              </div>

              <div id="header_b_right">
                <a href="">北京市</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view />

    <div id="footer">
      <div id="footer_top">
        <div id="footer_top_left">
          <p>
            客服热线：4006-678-678（8:00 - 22:00）
          </p>
          <p>
            客服邮箱：cs@mcake.com
          </p>
        </div>
        <div id="footer_top_right">
          <span>
            <div>
              <a href="" class="title">发现</a>
            </div>
            <div>
              <a href="" class="text">公告</a>
            </div>
            <div id="footer_top_xin">
              <a href=""></a>
              <a href="" id="hover"></a>
              <div id="saoma"></div>
            </div>
          </span>
          <span>
            <div>
              <a href="" class="title">关于我们</a>
            </div>
            <div>
              <a href="" class="text">企业介绍</a>
            </div>
            <div>
              <a href="" class="text">媒体合作</a>
            </div>
            <div>
              <a href="" class="text">招贤纳士</a>
            </div>
            <div>
              <a href="" class="text">呼叫中心</a>
            </div>
          </span>
          <span>
            <div>
              <a href="" class="title">帮助中心</a>
            </div>
            <div>
              <a href="" class="text">投诉与建议</a>
            </div>
            <div>
              <a href="" class="text">会员权益</a>
            </div>
            <div>
              <a href="" class="text">购买指南</a>
            </div>
            <div>
              <a href="" class="text">支付类</a>
            </div>
            <div>
              <a href="" class="text">订单相关</a>
            </div>
            <div>
              <a href="" class="text">配送服务</a>
            </div>
          </span>
        </div>
      </div>
      <div id="footer_center">
        <div>
          <p>上海卡法电子商务有限公司</p>
          <p>地址：上海市普陀区同普路1130弄3号楼</p>
          <p>电话：021-52691591</p>
          <p>社会信用代码：913101070678091460</p>
          <p>食品经营许可证编号：JY13101070034251</p>
        </div>
        <div>
          <p>上海卡法电子商务有限公司北京分公司</p>
          <p>地址：北京市朝阳区东四环中路82号3座04层505</p>
          <p>电话：010-52088262</p>
          <p>社会信用代码：911101053484280752</p>
          <p>食品经营许可证编号：JY11105211911746</p>
        </div>
      </div>
      <div id="footer_bottom">
        <span>
          Copyright © 2012-2018 上海卡法电子商务有限公司 版权所有
        </span>
        <span>
          沪ICP备12022075号
          <a href="">
            <img src="http://www.mcake.com/icon/gs.png" alt="">
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    date() {
      return {

      }
    },
    mounted() {
      window.onwheel = function () {
        if (document.documentElement.scrollTop > 0) {
          $("#header").css({ "box-shadow": "0 0 10px -3px #6e6e6e" });
        } else {
          $("#header").css({ "box-shadow": "" });
        }
      };

      $('#hover').hover(function () {
        $('#saoma').css({ 'display': 'block' })
      }, function () {
        $('#saoma').css({ 'display': 'none' })
      });


    },
    methods: {
      move1(){
        $('#yidong').animate({'left':'0'},400)
      },
      move2(){
        $('#yidong').animate({'left':'180px'},400)
      },
      move3(){
        $('#yidong').animate({'left':'360px'},400)
      },
      move4(){
        $('#yidong').animate({'left':'540px'},400)
      }
    }
  };
</script>

<style>
  #yidong{
    width: 180px;
    height: 3px;
    background-color: #7b9196;
    position: absolute;
    top:66px; 
    left: 0;
  }
  .xiabiao{
    position: relative;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }

  #header {
    height: 100px;
    width: 100%;
    position: fixed;
    background-color: #ffffff;
    z-index: 1000;
  }

  #header_box {
    margin: 0 auto;
    height: 100px;
    width: 100%;
    /* background-color: aqua; */
  }

  #header_top {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    /* background-color: antiquewhite; */
    box-sizing: border-box;
  }

  #header_top_box {
    height: 30px;
    width: 1200px;
    margin: 0 auto;
    /* background-color: rosybrown; */
  }

  #header_top_box>img {
    float: left;
  }

  #header_top_box>span {
    float: right;
  }

  #header_top_box>span>a {
    color: #ab977e;
    line-height: 30px;
    font-size: 12px;
    text-decoration: none;
    padding-left: 10px;
  }

  #jingling {
    width: 23px;
    height: 30px;
    display: inline-block;
    /* line-height: 30px; */
    background-image: url('http://www.mcake.com/shop/theme/xth1/images/comm/icon.png');
      background-position: -49px -10px;
    vertical-align: middle;
  }

  #header_bottom {
    height: 70px;
    width: 1200px;
    /* background-color: royalblue; */
    margin: 0 auto;
  }

  #header_bottom > div {
    width: 930px;
    display: flex;
    /* padding-right: 10px; */
  }

  #header_bottom_left {
    width: 720px;
    height: 70px;
    /* background-color: aqua; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -70px;
  }

  #header_bottom_left>div {
    width: 180px;
    height: 70px;
  }

  #header_bottom_left>div > a {
    display: block;
    width: 180px;
    height: 37px;
    border-left: 1px solid rgb(234, 234, 234);
    text-decoration: none;
    font-size: 12px;
    color: #767676;
    font-family: "Microsoft YaHei", "微软雅黑", "黑体", "SimHei";
    margin-top: 15px;
  }

  #header_bottom_left>div > a:hover {
    color: #b19167;
  }

  #header_bottom_left>div > a > p {
    margin: 0;
  }

  #header_bottom_right {
    width: 295px;
    height: 58px;
    /* background-color: bisque; */
    /* float: right; */
    display: flex;
  }

  #phone {
    display: inline-block;
    width: 23px;
    height: 20px;
    background-image: url('http://www.mcake.com/shop/theme/xth1/images/comm/icon.png');
      background-position: -110px -15px;
    vertical-align: middle;
  }

  #home {
    display: inline-block;
    width: 23px;
    height: 20px;
    background-image: url('http://www.mcake.com/shop/theme/xth1/images/comm/icon.png');
      background-position: -139px -15px;
    vertical-align: middle;
  }

  #header_b_left {
    width: 195px;
    height: 58px;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    margin-top: 18px;
    color: #767676;
  }

  #header_b_right {
    width: 85px;
    height: 43px;
    background-image: url('http://edm.mcake.com/fangli/2017-pc/mcake/img/wz.png');
      background-repeat: no-repeat;
    margin-top: 19px;
    margin-left: 15px;
  }

  #header_b_right > a {
    display: inline-block;
    text-decoration: none;
    font-size: 13px;
    text-align: center;
    color: #767676;
  }

  #header_b_right > a:hover {
    color: #b99c7b;
  }

  #footer {
    width: 100%;
    height: 405px;
    background-color: #f2f6f7;
  }

  #footer_top {
    width: 1040px;
    height: 228px;
    margin: 0 auto;
    /* background-color: #ab977e; */
    padding: 40px 0 20px 0;
    box-sizing: border-box;
    display: flex;
    /* align-items: flex-start; */
  }

  #footer_top_left {
    width: 320px;
    height: 58px;
    margin-left: 10px;
    text-align: left;
    font-size: 14px;
  }

  #footer_top_left > p:nth-child(1) {
    margin-top: 10px;
    color: #b0916a;
  }

  #footer_top_left > p:nth-child(2) {
    margin-top: 10px;
    color: rgb(118, 118, 118);
  }

  #footer_top_right {
    width: 581px;
    height: 168px;
    margin-left: 40px;
    border-left: 1px solid rgb(187, 187, 187);
    display: flex;
    align-items: flex-start;
  }

  #footer_top_right > span {
    width: 191px;
    display: inline-block;
  }

  #footer_top_xin {
    margin-top: 10px;
    position: relative;
  }

  #footer_top_xin > a {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  #footer_top_xin > a:nth-child(1) {
    background-image: url('http://www.mcake.com/shop/theme/xth1/images/index/w_icon_hd.png');
      background-size: 55px 25px;
  }

  #footer_top_xin > a:nth-child(2) {
    background-image: url('http://www.mcake.com/shop/theme/xth1/images/index/w_icon_hd.png');
      background-position: 25px 0;
    background-size: 55px 25px;
  }

  .title {
    color: #767676;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
  }

  .title:hover {
    color: #b0916a;
  }

  .text {
    text-decoration: none;
    color: #767676;
    line-height: 24px;
    font-size: 12px;
  }

  .text:hover {
    color: #b0916a;
  }

  #footer_center {
    width: 576px;
    height: 92px;
    margin: 0 auto;
    /* background-color: aquamarine; */
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
  }

  #footer_center p {
    margin: 0;
    font-size: 12px;
    color: #767676;
    padding: 0 20px;
    line-height: 18px;
    text-align: left;
  }

  #footer_bottom {
    width: 100%;
    height: 65px;
    /* background-color: #ab977e; */
    padding: 18px 0 20px 0;
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(118, 118, 118);
    vertical-align: bottom;
  }

  #footer_bottom img {
    margin-bottom: -7px;
  }

  #saoma {
    width: 149px;
    height: 149px;
    background-image: url('http://wxpost.mcake.com/postsystem/docroot/images/channel/11/channel_286_9.jpg');
      background-size: 149px;
    position: absolute;
    top: -122px;
    left: 130px;
    display: none;
  }
</style>