jQuery($=>{
// $(document).ready(function(){ 
    // var a;
    // setTimeout(function(){
    // a =document.querySelector('.top_c');
    // },1000);
    //     console.log(a);
    
    var $top_c = $('.top_c');
    console.log($top_c);
    var obj = Cookie.get('obj');
    var content = '';
    if(obj){
            obj=JSON.parse(obj);
        }
        console.log(obj);
        if(obj===''){
            content +=`<a href="login.html">[登录]</a><a href="regrister.html">[免费注册]</a>`
        }
        else{
            var content = '';
            content += `<a href="#"><span>hi~&nbsp;${obj[0]}&nbsp;欢迎回嘉</span></a><a class="out">[退出]</a>`
        }
        // $top_c.html(content);
        // console.log($top_c.html());
    var $out = $('.out');
    console.log($out); 
    $out.on('click',function(){
       Cookie.remove('obj');
       location.reload();
    });

    //判断是否点击加入购物车车

    var num = Cookie.get('qty0');
    console.log(num);
    if(num){
        num = JSON.parse(num);
    // num +=num;
    console.log(num);
    $('.number').html('');
    $('.number').html(num);
    console.log($('.number').html());


} //点击购物车跳转
    console.log($('.gouwuche')); 
    $('.gouwuche').on('click',function(){
        console.log(666);
        location.href = '../html/shoppingcar.html';
    });
    //吸顶
    var $back = $('.back');
    var TIMER;//定义全局变量
    window.addEventListener('scroll',function(){
        clearTimeout(TIMER);//必须要有这句
        if( $(document).scrollTop() > 0 ){
            // console.log($(document).scrollTop());
            $(".header").addClass("actfixed");
        }else{
            $(".header").removeClass("actfixed");

        }
         // 滚动到一定距离，显示返回顶部效果
        if(window.scrollY>800){
            $back.show();
        }else{
            $back.hide();
        }
    });
     $back.on('click',()=>{
        console.log(666);
        let timer0 =setInterval(()=>{
            //计算缓冲速度
            let speed = Math.ceil(window.scrollY/5);
            scrollBy(0, -speed);

            if(window.scrollY<=0){
                clearInterval(timer0);
            }
        },30);
    });
});