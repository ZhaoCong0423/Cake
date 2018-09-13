<template>
    <div>
        <div id="eat">
            <div id="top_left">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-1.png" alt="">
            </div>
            <div id="top_right">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-2.png" alt="">
            </div>
            <div id="bottom_left">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-3.png" alt="">
            </div>
            <div id="bottom_right">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-4.png" alt="">
            </div>
            <div id="center">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-t.png" alt="">
            </div>
        </div>
        <div id="vip">
            <div id="vip_top">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/quanyi_bj.png" alt="">
            </div>
            <div id="vip_bottom">
                <div id="vip_move">
                    <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/hongbao.png" alt="">
                    <div class="vip_lingqu" style="left:220px;top:286px">立即领取</div>
                    <div class="vip_lingqu" style="left:535px;top:286px">立即领取</div>
                    <div class="vip_lingqu" style="left:847px;top:286px">立即领取</div>
                </div>
            </div>
        </div>
        <div id="tejia">
            <div id="tejia_logo">
                <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/hy-title-1_bj.png" alt="">
            </div>
            <div id="row1">
                <div id="row1_left">
                    <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/cake-2.png" alt="">
                </div>
                <div id="row1_right">
                    <div style="margin-bottom:10px;">
                        <img src="http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/t-2.png" alt="">
                    </div>
                    <h2 style="margin:0;">
                        <i style="font-size:14px;color:#9f0801">￥</i>
                        <span style="font-size:28px;color:#9f0801">{{price}}.00</span>
                    </h2>
                    <s style="font-size:16px;color:#9f0801">
                        原价 ￥{{old_price}}.00
                    </s>
                    <div style="width:45px;height:45px;border-radius: 50%;background: #e09091;margin: 0 auto;margin-top:10px;margin-bottom:10px;">
                        <span style="color: #fff; line-height:45px;font-size: 12px;">1.5磅</span>
                    </div>
                    <div style="margin:0 auto;display: flex; justify-content: center;margin-top: 10px; margin-bottom: 10px;">
                        <div @click="nick" id="click" style="width:22px;height:22px; background-image:url(http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/icon-2-h.png)"></div>
                        <span style="font-size:18px;color:#9f0801; padding-left: 5px;">+￥29.9购半熟芝士(原味)</span>
                    </div>
                    <div style="display:flex;justify-content: center;">
                        <div class="jian" @click="jian"></div>
                        <span style="display:block;width:55px;height:26px;line-height:
                        26px;font-size: 18px;color:#9f0801;">{{num}}</span>
                        <div class="jia" @click="jia"></div>
                    </div>
                    <div id="shop">
                        <span style="margin-right:5px">加入购物清单</span>
                        <span>立即购买</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="width:100%;height:527px;background-color: #feebdc;">
            <div style="width:1200px;height:527px;margin: 0 auto;">
                <div id="sport">
                    <h1>活动规则</h1>
                    <p>1、活动时间：2018年9月4日-2018年9月25日（每周二上午10：00）</p>
                    <p>2、活动城市：北京</p>
                    <p>3、支付方式：微信、支付宝、现金</p>
                    <p>
                        4、活动内容：
                        <br>
                        · 凡活动页面下单购买爱丽丝花境，沙布蕾芭菲，鲜莓印雪，尼诺
                        <br>
                        满198元立减20元，满298元立减50元，满428元立减80元
                    </p>
                    <p>5、单笔订单中立减商品不可与优惠券同享</p>
                    <p>6、本活动与会员等级制度、积分同享，但不与其他优惠同享</p>
                    <p>7、本活动最终解释权归MCAKE所有</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 1,
                price:248,
                old_price:298,
            }
        },
        methods: {
            nick() {
                if ($('#click').hasClass('xxx')) {
                    $('#click').css({ 'background-image': 'url(http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/icon-2-h.png)' });
                    $('#click').removeClass('xxx');
                }
                else {
                    $('#click').css({ 'background-image': 'url(http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/icon-2.png)' });
                    $('#click').addClass('xxx');
                }
            },
            jia() {
                // alert(this.num)
                this.num++
                this.price = 248 * this.num
                this.old_price = 298 * this.num
            },
            jian() {
                if (this.num > 1) {
                    this.num--
                    this.price = 248 * this.num
                    this.old_price = 298 * this.num
                }
            }


        },
        mounted() {

            $('#center').animate({ 'top': '240px', 'opacity': '1' }, 500, function () {
                $('#top_left').animate({ 'left': '250px', 'top': '100px', 'opacity': '1' }, 800)
                $('#top_right').animate({ 'right': '400px', 'top': '100px', 'opacity': '1' }, 800, function () {
                    $('#bottom_left').animate({ 'bottom': '-5px', 'left': '270px', 'opacity': '1' }, 800)
                    $('#bottom_right').animate({ 'right': '250px', 'bottom': '-5px', 'opacity': '1' }, 800)
                })
            });

            (window.onscroll = function (e) {
                if (document.documentElement.scrollTop > 0) {
                    $('#vip_top').animate({ 'top': '100px', 'opacity': '1' }, 400)
                }
                if (document.documentElement.scrollTop > 300) {
                    $('#vip_move').animate({ 'top': '300px', 'opacity': '1' }, 400)
                }
                if (document.documentElement.scrollTop > 900) {
                    $('#row1_left').animate({ 'left': '200px', 'opacity': '1' }, 500)
                    $('#row1_right').animate({ 'top': '140px', 'opacity': '1' }, 500)
                }
            })
        },
    }
</script>

<style scoped>
    #eat {
        padding-top: 100px;
        width: 100%;
        height: 550px;
        position: relative;
        overflow: hidden;
        background-image: url('http: //edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/banner-bg.jpg');
    }

    #top_left {
        position: absolute;
        left: 100px;
        top: -150px;
        opacity: 0;
    }

    #top_right {
        position: absolute;
        right: 250px;
        top: -100px;
        opacity: 0;
    }

    #bottom_left {
        position: absolute;
        left: 100px;
        bottom: -200px;
        opacity: 0;
    }

    #bottom_right {
        position: absolute;
        right: 100px;
        bottom: -300px;
        opacity: 0;
    }

    #center {
        position: absolute;
        left: 700px;
        top: 340px;
        opacity: 0;
    }

    #vip {
        width: 1200px;
        height: 889px;
        margin: 0 auto;
        padding: 100px 0 80px 0;
        box-sizing: border-box;
        position: relative;
    }

    #vip_top {
        width: 1200px;
        height: 280px;
        position: absolute;
        top: 200px;
        opacity: 0;
    }

    #vip_bottom {
        width: 1200px;
        height: 329px;
        margin: 80px 0 20px 0;
        box-sizing: border-box;
    }

    #vip_move {
        position: relative;
        top: 400px;
    }

    .vip_lingqu {
        width: 133px;
        height: 43px;
        color: rgb(255, 255, 255);
        font-size: 20px;
        line-height: 43px;
        position: absolute;
        text-align: center;
    }

    #tejia {
        width: 1200px;
        padding-top: 20px;
        margin: 0 auto;
    }

    #tejia_logo {
        margin-bottom: 50px;
    }

    #row1 {
        width: 1200px;
        height: 560px;
        position: relative;
    }

    #row1_left {
        position: absolute;
        left: 0;
        opacity: 0;
    }

    #row1_right {
        position: absolute;
        right: 200px;
        top: 340px;
        opacity: 0;
    }

    .jian {
        background-image: url('http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/reduce-2.png');
        width: 28px;
        height: 28px;
    }

    .jia {
        background-image: url('http://edm.mcake.com/fangli/2018-pc/memberDay-9yue/images/add-2.png');
        width: 28px;
        height: 28px;
    }

    #shop {
        width: 280px;
        height: 40px;
        margin: 10px 0;
        box-sizing: border-box;
        font-size: 17px;
        color: #fff;
    }

    #shop>span {
        display: inline-block;
        width: 130px;
        height: 30px;
        background-color: #e09091;
        border-radius: 15px;
        line-height: 28px;
    }

    #sport {
        width: 645px;
        height: 527px;
        box-sizing: border-box;
        padding: 100px 0 100px 55px;
        margin: 0 auto;
        text-align: left;
    }

    #sport>h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 5px;
    }

    #sport>p {
        margin: 0;
        font-size: 18px;
        line-height: 1.8em;
        padding-left: 1.5em;
        text-indent: -1.5em;
        box-sizing: border-box;
    }
</style>