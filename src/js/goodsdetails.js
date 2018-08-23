jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.header').load('../html/base.html .header0');
    $('.nav').load('../html/base.html .nav0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    //获取Cookie
    var str = Cookie.get('goodslist');
    console.log(str);
    if(str){
        str = JSON.parse(str);
    }
    var $goods = $('.goods');
    var $glist = $('.glist');

    var content = '';
    var content0 = '';
    var content1 = '';

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
                   $('.ttl').text(item.titile);
                   $('.chicun').text(item.titile);
                   $('.goodsid').text(`[商品号：000${item.id}]`);
                   $('.goods_max').attr("src",`../${item.imgurl}`);
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
            $goods.html(content0);

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
});