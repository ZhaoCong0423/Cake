<template>
    <div>
        <div id="xunwei">
            <div id="xunwei1">
                <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/xunwei_03.png" alt="">
            </div>
            <div id="xunwei2">
                <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Napoleon.png" alt="">
            </div>
            <div id="xunwei3">
                <div>
                    <a href="" id="xc" class="three">
                        <div id="xc_none">
                            <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Vanilla_wz_01.png" alt="">
                            <p style="margin:0">经典香草拿破仑</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="" id="npl" class="three">
                        <div id="npl_none">
                            <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Blueberry_wz_01.png" alt="">
                            <p style="margin:0">蓝莓轻乳拿破仑</p>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="" id="n1893" class="three">
                        <div id="n1893_none">
                            <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/npl1893_wz_01.png" alt="">
                            <p style="margin:0">拿破仑1893</p>
                        </div>
                    </a>
                </div>
            </div>
            <div id="xunwei4">
                <a href="">
                    <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Secret.png" alt="">
                </a>
            </div>
        </div>
        <div id="blue">
            <div id="blue_box">
                <div id="blue_left"></div>
                <div id="blue_right"></div>
                <div id="blue_text">
                    <a href="" style="text-decoration: none">
                        <p id="text_top">
                            <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Blueberry_wz_02.png" alt="">
                            <span>蓝莓清乳拿破仑</span>
                        </p>
                        <p id="text_center">
                            Myrtilles fraiches, bio, feuilletage au goût de beurre frais, marmelade de myrtilles, crème chantilly, et tout celà dans
                            le plaisir du palais .
                            <br> 精选野生蓝莓的清爽可口/芝士的香浓/优质奶油的醇厚
                            <br> 起酥皮的香脆可口/内层轻乳芝士的松软 层层美味/回味无穷
                        </p>
                        <p id="text_bottom">+ 点击购买  Click to buy +</p>
                    </a>
                </div>
            </div>
            <div id="blue_box2">
                <span>
                    <a href="###" @click="none">
                        <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Blueberry_Button.png" alt="">
                    </a>
                </span>
            </div>
        </div>
        <div id="n4096">
            <div id="npm_4096">
                <h1 style="font-size: 22px;font-weight: 400;margin:0;padding: 45px 15px 6px 15px;color: rgb(255, 255, 255);text-align: left;">
                    拿破仑4096的秘密 
                    <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Footer_fw.png" alt="">
                </h1>
                <p style="font-size: 12px;line-height: 24px;margin: 0;color: rgb(255, 255, 255);text-align: left;padding-left: 15px;">GMP制药标准的5°C恒温车间完美实现对制作温度的把握，独家创新的4096层酥皮极尽味觉诱惑</p>
                <div id="animent">
                    <div class="animent_three" @mouseenter="domup($event)" @mouseleave="domdwon($event)">
                        <div>
                            <p class="up">
                                <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Napoleon_001.png" alt="">
                                <br>
                                GMP标准质量管控独创4096层酥皮
                            </p>
                        </div>
                    </div>
                    <div class="animent_three" @mouseenter="domup($event)" @mouseleave="domdwon($event)">
                        <div>
                            <p class="up">
                                <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Napoleon_002.png" alt="">
                                <br>
                                延续法国百年手艺
                            </p>
                        </div>
                    </div>
                    <div class="animent_three" @mouseenter="domup($event)" @mouseleave="domdwon($event)">
                        <div>
                            <p class="up">
                                <img src="http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Napoleon_003.png" alt="">
                                <br>
                                精选天然原材料
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Napoleon',
        data() {

            return {

            }
        },
        methods: {
            none() {
                $('#blue_box2').animate({ 'top': '630px' }, 500);
            },

            domup(e){
                // alert('xxx')
                // $('.animent_three>div').css({'display':'block'})
                $(e.target).find('div').stop().animate({top:"0"},500);
            },

            domdwon(e){
                $(e.target).find('div').stop().animate({'top':'230px'},500);
            }
        },
        mounted() {
            $('#xc').hover(function () {
                $('#xc').css({ 'background-image': 'url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Pro_cp_01.png)' });
                $('#xc_none').css({ 'display': 'none' });
            }, function (e) {
                $('#xc').css({ 'background-image': 'url()' });
                $('#xc_none').css({ 'display': '' });
            })

            $('#npl').hover(function () {
                $('#npl').css({ 'background-image': 'url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Pro_cp_02.png)' });
                $('#npl_none').css({ 'display': 'none' });
            }, function (e) {
                $('#npl').css({ 'background-image': 'url()' });
                $('#npl_none').css({ 'display': '' });
            })

            $('#n1893').hover(function () {
                $('#n1893').css({ 'background-image': 'url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Pro_cp_03.png)' });
                $('#n1893_none').css({ 'display': 'none' });
            }, function (e) {
                $('#n1893').css({ 'background-image': 'url()' });
                $('#n1893_none').css({ 'display': '' });
            })
        }
    }
</script>

<style scoped>
    #xunwei {
        padding-top: 100px;
        width: 100%;
        height: 630px;
        background-color: #e6faf9;
        position: relative;
    }

    #xunwei1 {
        width: 100%;
        height: 284px;
        padding-top: 100px;
        box-sizing: border-box;
    }

    #xunwei2 {
        width: 100%;
        height: 106px;
        padding-top: 60px;
        box-sizing: border-box;
    }

    #xunwei3 {
        width: 1100px;
        height: 160px;
        margin: 0 auto;
        display: flex;
    }

    #xunwei3>div {
        width: 366px;
        height: 160px;
    }

    .three {
        display: block;
        padding: 60px 0;
        color: rgb(118, 118, 118);
        font-size: 12px;
        text-decoration: none;
        height: 40px;
    }

    #xc {
        background-size: 75px 164px;
        background-repeat: no-repeat;
        background-position: center;
    }

    #npl {
        background-repeat: no-repeat;
        background-position: center;
    }

    #n1893 {
        background-repeat: no-repeat;
        background-position: center;
    }

    #xunwei4 {
        position: absolute;
        bottom: -130px;
        left: 830px;
        z-index: 100;
    }

    #blue {
        width: 100%;
        height: 630px;
        background-color: #f5eef7;
        position: relative;
        overflow: hidden;
    }

    #blue_box {
        width: 1200px;
        height: 630px;
        margin: 0 auto;
        position: relative;
    }

    #blue_left {
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Pro_lm.png);
        width: 597px;
        height: 458px;
        position: absolute;
        bottom: 20px;
        left: 50px;
    }

    #blue_right {
        width: 505px;
        height: 283px;
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Blueberry.png);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    #blue_box2 {
        width: 100%;
        height: 630px;
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/Blueberry.jpg);
        background-size: auto auto;
        background-position: center;
        position: absolute;
        top: 0;
        background-repeat: no-repeat;
    }

    #blue_box2>span {
        width: 129px;
        height: 59px;
        position: absolute;
        bottom: 0;
        left: 910px;
    }

    #blue_text {
        width: 393px;
        height: 234px;
        /* background-color: antiquewhite; */
        position: absolute;
        right: 100px;
        top: 110px;
        border: 4px solid rgb(255, 255, 255);
        box-sizing: border-box;
    }

    #text_top {
        display: block;
        width: 385px;
        height: 78px;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;
    }

    #text_top>span {
        text-align: left;
        color: rgb(176, 145, 106);
        display: block;
        font-size: 14px;
        padding-left: 10px;
        box-sizing: border-box;
    }
    #text_center{
        display: block;
        border-top: 2px solid rgb(255, 255, 255);
        color: rgb(155, 155, 155);
        font-size: 12px;
        padding: 20px;
        text-align: left;
        margin: 0;
    }
    #text_bottom{
        display: block;
        background-color: rgb(255, 255, 255);
        color: rgb(165, 0, 47);
        font-size: 12px;
        margin: 0;
        height: 28px;
        line-height: 28px;
    }
    #n4096{
        width: 100%;
        height: 395px;
        background-color: #b1916a;
    }
    #npm_4096{
        width: 1200px;
        height: 395px;
        margin: 0 auto;
    }
    #animent{
        width: 1200px;
        height: 290px;
        padding: 30px 0 30px 0;
        box-sizing: border-box;
        /* background-color: aqua; */
        display: flex;
        justify-content: space-around;
    }
    #animent>div:nth-child(1){
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/napoleon_pro_01.jpg);
    }
    #animent>div:nth-child(2){
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/napoleon_pro_02.jpg);
    }
    #animent>div:nth-child(3){
        background-image: url(http://www.mcake.com/shop/theme/xth1/images/activity/napoleon/napoleon_pro_03.jpg);
    }
    .animent_three{
        width: 370px;
        height: 230px;
        position: relative;
        overflow: hidden;
    }
    .animent_three>div{
        width: 370px;
        height: 230px;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: 230px;
    }
    .up{
        padding-top: 85px;
        box-sizing: border-box;
        margin: 0;
        color: rgb(177, 145, 106);
        font-size: 14px;
        line-height: 24px;
    }
</style>