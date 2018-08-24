jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.header').load('../html/base.html .header0');
    $('.nav').load('../html/base.html .nav0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    $( "#accordion" ).accordion();

   var $main_rb = $('.main_rb');
   var $main_gg = $('.main_gg');
   var goods;
   var res='';
   var p='';
   var _qty = 20;
   var _pageNo= 1;

   $.ajax({
    url:'../api/goodslist.php',
    type:"POST",
    datatype:"json",
    data:{
      qty:_qty,
      pageNo:_pageNo
    },
    success:function(result){
        result = JSON.parse(result);
        console.log(result);
        goods = result;
        render();
        //左边
        var res0 = goods.data.slice(0,5);
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
        var gl = goods.data.slice(7,11);
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
        goods.data.map(function(item){
            content += `<li data-guid="${item.id}">
                <div>
                    <img src="../${item.imgurl}" alt="" class="tupin">
                </div>
                <p><a class="title">${item.titile}</a></p>
                <span class="fl">￥<span class="price">${item.price}</span></span><span class="fr" >已售：<span class="allsell">${item.sell}</span>件</span>
                <div class="add"><span class="addcar">加入购物车</span><span>收藏</span></div>
            </li>`
            
        }).join('');
        $main_rb.html(content);
        //分页
        //计算分页数量
        var pageLen = Math.ceil(goods.total/goods.qty);
        var page = $('<div/>');
        page.addClass('page');
        var tol = $('<span/>');
        tol.addClass('one');
        tol.html(`共${goods.total}条记录`);
        page.append(tol);
        for(var i=0;i<pageLen;i++){
          var span = $('<span/>');
          span.addClass('fenye');
          span.html(i+1);
          //高亮当前分页
          if(i===goods.pageNo-1){
            span.addClass('active');
          }
          page.append(span);
        }

        page.appendTo($main_rb);


   }
    //点击事件
    $main_rb.on('click',function(e){
      var target = e.target;
      if(target.parentNode.className==='page'){
        //target 是得到节点
        _pageNo = $(target).html();
        console.log(_pageNo);
          
        $.ajax({
          url:"../api/goodslist.php",
          type:"POST",
          datatype:"json",
          data:{
            pageNo:_pageNo,
            qty:_qty
          },
          success:function(result){
            result = JSON.parse(result);
            console.log(result);
            goods = result;
            render();
          }
        });
      }
      if(target.className==="tupin" || target.className === 'title'){
        var guid = target.parentNode.parentNode.getAttribute('data-guid');
        console.log(guid);
        Cookie.set('goodslist',JSON.stringify(guid),{path:'/'});
        location.href = "../html/goodsdetails.html";
      }
      if(target.className="addcar"){
          var qty =  $('.number').html();
           $('.number').html(++qty);
            console.log($('.number').html());
            Cookie.set('qty',JSON.stringify(qty),{path:'/'});
      }
    });

   //排序

   var $sellall = $('.sellall');
   var $times = $('.times');
   var $prices = $('.prices');
    //销量排序
   $sellall.on('click',function(){
    $main_rb.html('');
    goods.data.sort(function(a,b){
        return b.sell-a.sell;
    });
    console.log(goods);
    render();
   });
    //上架时间排序
   $times.on('click',function(){
    $main_rb.html('');
    goods.data.sort(function(a,b){
        return Date.parse(b.u_time)-Date.parse(a.u_time);
    });
    console.log(goods);
    render();
   });
    //价格排序
   $prices.on('click',function(){
    $main_rb.html('');
    goods.data.sort(function(a,b){
        return b.price-a.price;
    });
    console.log(goods);
    render();
   });
});