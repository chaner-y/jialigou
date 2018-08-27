jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.header').load('../html/base.html .header0');
    $('.nav').load('../html/base.html .nav0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    //获取Cookie
    //
    var str = Cookie.get('goodslist');
    console.log(str);
    var imgu = Cookie.get('imgurl0');
    // if(imgu){
    //     console.log(imgu);
    //     imgu = JSON.parse(imgu);
    //     $('.goods_max').attr("src",imgu);
    //     $('.goods_max').attr("height",400);

    //     $('.goods_min').attr("src",imgu);
    //     $('.main0_r').html('此产品已售空');

    // }
    if(str){
        str = JSON.parse(str);
    }
    var $goods0 = $('.goods0');
    var $glist = $('.glist');

    var content = '';
    var content0 = '';
    var content1 = '';
    var goods;
    $.ajax({
        url:'../api/index.php',
        type:'POST',
        datatype:'json',
        success:function(data){
            data = JSON.parse(data);
            console.log(data);
            //判断cookie拿到的id是否跟数据库的id一致
            data.map(function(item){
                if(str===item.id){
                    goods = item;
                   $('.ttl').text(item.titile);
                   $('.chicun').text(item.titile);
                   $('.goodsid').text(`[商品号：000${item.id}]`);
                   $('.goods_max').attr("src",`../${item.imgurl}`);
                   $('.goods_max').attr("data-big",`../${item.imgurl}`);
                   $('.goods_min').attr("data-big",`../${item.imgurl}`);
                   $('.goods_min').attr("src",`../${item.imgurl}`);
                   $('strong').html(item.price);
                }
            }).join('');
            var res = data.slice(20,25);
            console.log(res);
            res.map(item=>{
                content0 +=`
                <li>
                <div>
                    <img src="../${item.imgurl}" alt="">
                </div>
                <p><a>${item.titile}</a></p>
                <span class="fl">￥<span class="price">${item.price}</span></span>
                </li>
                `
            }).join('');
            $goods0.html(content0);

            var res1 = data.slice(0,4);
            res1.map(item=>{
               content1 +=`
                <li>
                <div>
                    <img src="../${item.imgurl}" alt="">
                </div>
                <p><a>${item.titile}</a></p>
                <span class="fl">￥<span class="price">${item.price}</span></span>
                </li>
                `
            }).join('');
            $glist.html(content1);
        }
    });
  
    //标签切换
   $('.main_br').on('click','li.tab',function(){
    var index = $(this).index();
    console.log($(this).find($('.main_br .meun ul li .menu_logo')).siblings());
         $(this).find($('.menu_logo')).addClass("curr")
         $(this).siblings().find('.menu_logo').removeClass("curr");
        $(".meun_list .main").eq(index).addClass("selected").siblings().removeClass("selected");
   });

   // 放大镜
    $('.goods').lxzoom();
        $('.small').on('click','img',function(){
            $('.goods img').attr({
                'src':this.src,
                'data-big':this.dataset.big
            });
        });
    // cookie操作
    var goodslist = Cookie.get('goodslist0');
        if(goodslist === ''){
            goodslist = []
        }else{
            goodslist = JSON.parse(goodslist);
        }
    $('.jg').on('click',function(){
        console.log(goods);
       createcookie();
       var qty0 =  $('.number').html();
        $('.number').html(++qty0);
        console.log($('.number').html());
       Cookie.set('qty0',JSON.stringify(qty0),{path:'/'});
    });
    $('.lm').on('click',function(){
       createcookie();
       location.href = "../html/pay.html";
    });
    function createcookie(){
        var _qty = $('.qty').val()*1;
        var res = {
            id:goods.id,
            price:goods.price,
            title:goods.titile,
            imgurl:goods.imgurl,
            qty:_qty
        };
         var isshow = false;
         var index = '';
         for(var i=0;i<goodslist.length;i++){
            if(goodslist[i].id === str){
                isshow = true;
                index = i ;
                break;
            }
         }
         if(!isshow){
                goodslist.push(res);
         }else{
            goodslist[i].qty += _qty;
         }
         console.log(goodslist);

        Cookie.set('goodslist0',JSON.stringify(goodslist),{path:'/'});
    }
});