jQuery(function($){
    //显示用户信息
    var $top_c = $('.top_c');
    var obj = Cookie.get('obj');
    var content = '';
    if(obj){
            obj=JSON.parse(obj);
        }
        console.log(obj);
        if(obj===''){
            content +=`<a href="html/login.html">[登录]</a><a href="html/regrister.html">[免费注册]</a>`
        }
        else{
            var content = '';
            content += `<a href="#"><span>hi~&nbsp;${obj[0]}&nbsp;欢迎回嘉</span></a><a class="out">[退出]</a>`
        }
        $top_c.html(content);
        console.log($top_c.html());
    var $out = $('.out');
    console.log($out); 
    $out.on('click',function(){
       Cookie.remove('obj');
       location.reload();
    });
    // 获取数据
   var $sellhot_m = $('.sellhot .tvhot_m');
   var $tvhot_m = $('.tvhot .tvhot_m');
   var goods;
   console.log($tvhot_m);
    var content = '';
    var content1 = '';

       $.ajax({
            url:"api/index.php",
            type:"GET",
            datatype:"json",
            success:function(data){
                data = JSON.parse(data);
                console.log(data);
                //热销
                var res = data.slice(0,4);
                console.log(res);
                    res.map(function(item){
                    content += `<li class="tvhot_g" data-guid="${item.id}">
                    <div class="tv">
                        <img src="${item.imgurl}"class="tupian">
                    </div>
                    <h6 class="name"><a class="title">${item.titile}</a></h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    <p class="last">已热销：<span class="allsell">${item.sell}</span>件</p>
                    </li>`
                }).join(''); 
                $sellhot_m.html(content);
                //热播
                var res1 = data.slice(4,8);
                console.log(res1);
                    res1.map(function(item){
                    content1 += `<li class="tvhot_g" data-guid="${item.id}">
                    <div class="tv">
                        <span>[00:53~01:31]</span>
                        <img src="${item.imgurl}" class="tupian">
                    </div>
                    <h6 class="name"><a class="title">${item.titile}</a></h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    </li>`
                }).join(''); 
                    $tvhot_m.html(content1);
                //two;
                var content10 ='';
                var res10 = data.slice(8,12);
                res10.map(function(item){
                    content10 += `<li class="tvhot_g" data-guid="${item.id}">
                    <div class="tv">
                        <span>[00:53~01:31]</span>
                        <img src="${item.imgurl}" class="tupian">
                    </div>
                    <h6 class="name"><a class="title">${item.titile}</a></h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    </li>`
                }).join(''); 
                    $('.two').html(content10);

                //main_br1数据
                var $main_br1 = $('.main_br1');
                var res2 = data.slice(0,6);
                var content2 = '';
                res2.map(function(item){
                    content2 +=`<li data-guid = "${item.id}">
                        <div class="main_brt">
                            <img src="${item.imgurl}" class="tupian" alt="">
                        </div>
                        <h6><a class="title">${item.titile}</a></h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br1.html(content2);
                //main_br2数据
                var $main_br2 = $('.main_br2');
                var res3 = data.slice(6,12);
                var content3 = '';
                 res3.map(function(item){
                    content3 +=`<li data-guid = "${item.id}">
                        <div class="main_brt">
                            <img src="${item.imgurl}" class="tupian" alt="">
                        </div>
                        <h6><a class="title">${item.titile}</a></h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br2.html(content3);
                //main_br3数据
                var $main_br3 = $('.main_br3');
                var res4 = data.slice(6,12);
                var content4 = '';
                 res4.map(function(item){
                    content4 +=`<li data-guid="${item.id}">
                        <div class="main_brt">
                            <img src="${item.imgurl}" class="tupian" alt="">
                        </div>
                        <h6><a class="title">${item.titile}</a></h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br3.html(content4);
                //main_br4数据
                var $main_br4 = $('.main_br4');
                var res5 = data.slice(12,18);
                var content5 = '';
                 res5.map(function(item){
                    content5 +=`<li data-guid = "${item.id}">
                        <div class="main_brt">
                            <img src="${item.imgurl}" class="tupian" alt="">
                        </div>
                        <h6><a class="title">${item.titile}</a></h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br4.html(content5);
            } 

       }); 
        $('#shouye').on('click',function(e){
            var target = e.target;
            if(target.className==="tupian" || target.className === 'title'){
            var guid = target.parentNode.parentNode.getAttribute('data-guid');
            console.log(guid);
            Cookie.set('goodslist',JSON.stringify(guid),{path:'/'});
            location.href = "html/goodsdetails.html";
            }
            if(target.className === "shouwan"){
              var imgurl0 = target.src;
              console.log(imgurl0);
              Cookie.set('imgurl0',JSON.stringify(imgurl0),{path:'/'});
                location.href = "html/goodsdetails.html";
            }
        });
        $('.btn').on('click',function(){
            location.href = "../html/shoppingcar.html";
        });
        //点击购物车跳转
           $('.car').on('click',function(){
               location.href = 'html/shoppingcar.html';
           });
        //上下按钮
        //获取每个ul元素的宽度
        var liW = $(".pages ul").width();
        //获取ul元素的长度(个数)
        var len = $(".pages ul").length;
        //计算ul的总宽度
        var ulW = len*liW;
        //设置pages的宽度
        $(".pages").css("width",ulW);
        var index = 0 ;
        $(".prev").click(()=>{
        console.log(liW,len,ulW);         
            index --;  //索引自加
            if(index == -1){//判断如果索引为-1了，就让它为最后一个ul元素的索引
                index = len - 1
            }
            showLi(index);
        })
        $(".next").click(()=>{
            console.log(liW,len,ulW);         

            index ++;  //索引自减
            if(index == len){//判断如果索引超过长度了，就让它为第一个lu元素的索引
                index = 0;
            }
            showLi(index);
        })
        
        function showLi(index){
            var move = -index * liW 
            $(".pages").stop().animate({"left":move},950);
        }


});