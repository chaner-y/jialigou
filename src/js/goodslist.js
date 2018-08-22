jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.header').load('../html/base.html .header0');
    $('.nav').load('../html/base.html .nav0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    $( "#accordion" ).accordion();

   var $main_rb = $('.main_rb');
   var $main_gg = $('.main_gg');
   // var $page_g = $('.page_g');
   // console.log(page_g);
   var goods;
   var res='';
   var p='';


   $.ajax({
    url:'../api/index.php',
    type:"GET",
    datatype:"json",
    success:function(data){
        data = JSON.parse(data);
        console.log(data);
        goods = data;
        render();
        //左边
        var res0 = goods.slice(0,5);
        res0.map(function(item){
            res += `<div class="main_g">
                        <div class="main_lg">
                            <img src="../${item.imgurl}" alt="">
                        </div>
                        <p><a href="#"class="name">${item.titile}</a></p>
                        <p class="last">￥<span>${item.price}</span></p>
                    </div>`
        }).join('');
        $main_gg.html(res);

        //猜你喜欢
        var $goodslist = $('.goodslist');
        var guess = '';
        var gl = goods.slice(7,11);
        gl.map(function(item){
            guess += `<li>
                <div>
                    <img src="../${item.imgurl}" alt="">
                </div>
                <p><a>${item.titile}</a></p>
                <span class="fl">￥<span class="price">${item.price}</span></span><span class="fr" >已售：<span class="allsell">${item.sell}</span>件</span>
                <div class="add"><span class="addcar">加入购物车</span><span>收藏</span></div>
            </li>`
        }).join('');
        $goodslist.html(guess);
    }

   });
   function render(){
     var content='';
        goods.map(function(item){
            content += `<li>
                <div>
                    <img src="../${item.imgurl}" alt="">
                </div>
                <p><a>${item.titile}</a></p>
                <span class="fl">￥<span class="price">${item.price}</span></span><span class="fr" >已售：<span class="allsell">${item.sell}</span>件</span>
                <div class="add"><span class="addcar">加入购物车</span><span>收藏</span></div>
            </li>`
            
        }).join('');
      // p += `共<span>${goods.length}</span>记录`
        $main_rb.html(content);
        // $page_g.html(p);

   }

   //排序

   var $sellall = $('.sellall');
   var $times = $('.times');
   var $prices = $('.prices');
    //销量排序
   $sellall.on('click',function(){
    $main_rb.html('');
    goods = goods.sort(function(a,b){
        return b.sell-a.sell;
    });
    console.log(goods);
    render();
   });
    //上架时间排序
   $times.on('click',function(){
    $main_rb.html('');
    goods = goods.sort(function(a,b){
        return Date.parse(b.u_time)-Date.parse(a.u_time);
    });
    console.log(goods);
    render();
   });
    //价格排序
   $prices.on('click',function(){
    $main_rb.html('');
    goods = goods.sort(function(a,b){
        return b.price-a.price;
    });
    console.log(goods);
    render();
   });
});