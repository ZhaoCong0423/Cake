<template>
    
        <div id="load">
            <router-view></router-view>
            <!-- <div id="onload">
                <div id="load_left">
                    <form action="">
                        <h1>登录</h1>
                        <div id="two">
                            <span id="iphone" @click="ipsw">手机验证码登录</span>
                            <span id="psw">账号密码登录</span>
                        </div>
                        <div>
                            <div id="name">
                                <input type="text" placeholder="请输入用户名">
                                <label for="">请输入用户名</label>
                            </div>
                        </div>
                        <div>
                            <div id="name">
                                <input type="text" placeholder="请输入密码">
                            </div>
                        </div>
                        <div id="forget">
                            <a href="">忘记密码</a>
                        </div>
                        <div id="but">
                            <span>登录</span>
                        </div>
                    </form>
                </div>
                <div id="load_left_2">
                    <form action="">
                        <h1>登录</h1>
                        <div id="two">
                            <span id="iphone1">手机验证码登录</span>
                            <span id="psw2" @click="phone">账号密码登录</span>
                        </div>
                        <div>
                            <div id="name">
                                <input type="text" placeholder="请输入手机号码">
                                <label for="">请输入手机号码</label>
                            </div>
                        </div>
                        <div>
                            <div id="name">
                                <input type="text" placeholder="请输入短信验证码">
                                <div id="yanzheng">
                                    <a href="">发送验证码</a>
                                </div>
                            </div>
                        </div>
                        <div id="forget">
                            
                        </div>
                        <div id="but">
                            <span>登录</span>
                        </div>
                    </form>
                </div>
                <div id="load_right">
                    <h2>其他登录方式</h2>
                    <div id="fangshi">
                        <span id="fangshi_left" @mouseenter="zhifubao"></span>
                        <span id="fangshi_right" @mouseenter="xinlang"></span>
                    </div>
                    <div id="zhuce">
                        <p>还没有账号？</p>
                        <a href="">
                            <span>立即注册</span>
                        </a>
                    </div>
                </div>
            </div> -->
        </div>

</template>

<script>
    export default {
        name: 'Mon',
        data() {
            return {

            }
        },
        methods: {
            // phone(){
            //     $('#load_left_2').css({'display':'none'});
            //     $('#load_left').css({'display':'block'})
            // },
            // ipsw(){
            //     $('#load_left_2').css({'display':'block'});
            //     $('#load_left').css({'display':'none'})
            // },

            // zhifubao(){
            //     $('#fangshi_left').css({'background-image':'url(http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-zfb-on.png)'});
            //     $('#fangshi_right').css({'background-image':'url(http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-wb.png)'})
            // },
            // xinlang(){
            //     $('#fangshi_left').css({'background-image':'url(http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-zfb.png)'});
            //     $('#fangshi_right').css({'background-image':'url(http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-wb-on.png)'})
            // }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    #load {
        width: 100%;
        height: 690px;
        padding-top: 100px;
        background-image: url('http://edm.mcake.com/fangli/2017-pc/mcake/login/images/login-bg.jpg');
        background-position: 0 90px;
    }

    /* #onload {
        width: 960px;
        height: 500px;
        background-color: #ffffff;
        margin: 0 auto;
        margin-top: 95px;
        margin-bottom: 95px;
        position: relative;
        border-radius: 5px;
    }

    #load_left {
        width: 586px;
        height: 500px;
        padding: 40px 90px 60px 90px;
        box-sizing: border-box;
        border-right: #dddddd 1px solid;
        display: none;
    }
    #load_left_2{
        width: 586px;
        height: 500px;
        padding: 40px 90px 60px 90px;
        box-sizing: border-box;
        border-right: #dddddd 1px solid;
        position: absolute;
        top: 0;
        left: 0;
    }
    #iphone1 {
        padding-right: 68px;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: rgb(0, 0, 0);
    }

    #psw2 {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: rgb(163, 163, 163);
    }
    #yanzheng{
        width: 100px;
        height: 36px;
        background-color: #b0916a;
        border-radius: 3px;
        position: absolute;
        top: 19px;
        right: 0;
    }
    #yanzheng:hover{
        background-color: #755124;
    }
    #yanzheng>a{
        font-size: 12px;
        color: rgb(255, 255, 255);;
        text-decoration: none;
        line-height: 36px;
    }

    form>h1 {
        margin: 0;
        padding: 10px 0 10px 0;
        text-align: left;
        font-size: 34px;
        font-weight: 400;
        line-height: 30px;
    }

    #two {
        padding: 20px 0 10px 0;
        text-align: left;
    }

    #iphone {
        padding-right: 68px;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: rgb(163, 163, 163);
    }

    #psw {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: rgb(0, 0, 0);
    }

    #name {
        width: 405px;
        height: 71px;
        position: relative;
        padding: 10px 0 10px 0;
        box-sizing: border-box;
        border-bottom-color: #2c3e50;
    }

    #name>input {
        border-bottom-color: rgb(205, 205, 205);
        width: 405px;
        height: 51px;
        padding: 5px 135px 5px 0;
        box-sizing: border-box;
        border-left: none;
        border-right: 0;
        border-top: 0;
    }

    #name>label {
        position: absolute;
        right: 0;
        top: 20px;
        font-size: 12px;
        line-height: 30px;
        color: rgb(127, 127, 127)
    }

    #forget {
        text-align: right;
        padding: 10px 0 10px 0;
    }

    #forget>a {
        text-decoration: none;
        color: rgb(140, 140, 140);
        font-size: 12px;
    }

    #but {
        width: 405px;
        height: 78px;
        margin-top: 30px;
        padding: 10px 0 10px 0;
        box-sizing: border-box;
    }

    #but>span {
        width: 405px;
        height: 54px;
        display: block;
        background-color: #b0916a;
        border-radius: 3px;
        line-height: 54px;
        color: rgb(255, 255, 255);
        font-size: 17px;
    }

    #but>span:hover {
        background-color: #755124;
    }
    #load_right{
        width: 370px;
        height: 312px;
        margin-top: 100px;
        position: absolute;
        top: 0;
        right: 0;
    }
    #load_right>h2{
        color: rgb(118, 118, 118);
        font-size: 12px;
        margin: 10px 0;
    }
    #fangshi{
        width: 370px;
        height: 51px;
        margin: 75px 0;
    }
    #fangshi_left{
        width: 48px;
        height: 48px;
        display: inline-block;
        margin: 0 15px;
        background-image: url('http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-zfb.png');
    }
    #fangshi_right{
        width: 48px;
        height: 48px;
        display: inline-block;
        margin: 0 15px;
        background-image: url('http://edm.mcake.com/fangli/2017-pc/mcake/login/images/icon-wb.png');
    }
    #zhuce{
        width: 370px;
        height: 66px;
    }
    #zhuce>p{
        margin: 0;
        color: rgb(118, 118, 118);
        font-size: 12px;
    }
    #zhuce>a{
        text-decoration: none;
        width: 90px;
        height: 73px;
        display: block;
        margin: 0 auto;
    }
    #zhuce>a>span{
        display: block;
        width: 90px;
        height: 30px;
        margin: 20px 0;
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 400;
        line-height: 30px;
        background-color: #b0916a;
        border-radius: 50px;
    }
    #zhuce>a>span:hover{
        background-color:#755124;
    } */
</style>