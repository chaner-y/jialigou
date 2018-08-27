
jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');
    
    var $adddizhi = $('.adddizhi');
    $adddizhi.on('click',function(){
        $('.main_c2').fadeToggle();
    });

    //获取cookie
    var goodslist = Cookie.get('goodslist_l');
    var goodslist0 = Cookie.get('goodslist0');

    var $tbody = $('tbody');
    console.log($tbody);
    var content ='';
    var aprice = '';
    if(goodslist0){
        goodslist0 = JSON.parse(goodslist0);
        console.log(goodslist);
        goodslist0.map(function(item){
            content +=`
                <tr>
                <td>
                    <div class="td_l">
                        <img src="../${item.imgurl}">
                    </div>
                    <div class="td_r">
                        <h6>${item.title}</h6>
                        <p>颜色/尺码：<span>${item.title}</span></p>
                        <p>货号：0000<span>${item.id}</span></p>
                    </div>
                </td>
                <td><span>￥<span class="price">${item.price}</span></span></td>
                <td><span class="qty">${item.qty}</span></td>
                <td><span class="at">${item.price*1*item.qty}</span></td>
                <td>免费</td>
                </tr>
            `
            // aprice +=`<p>商品总计：<span class="aprice">${item.price*1*item.qty}</span>元+运费：<span class="yunfei">0.00</span>-优惠：<span>10.00</span>元<span class="mj">（满1000减20）<span class="manjian">20</span>元</span></p>
            //             <h4>应付总额：<span class="total">${item.price*1*item.qty-20}</span></h4>
            //             <p>收货地址：<span></span></p>
            //             <p>收件人：<span></span></p>
            //             <button type="button">提交订单</button>`;
        }).join('');
        console.log(content);
       $tbody.html(content); 
    }
    else if(goodslist){
        goodslist = JSON.parse(goodslist);
        console.log(goodslist);
        goodslist.map(function(item){
            content +=`
                <tr>
                <td>
                    <div class="td_l">
                        <img src="../${item.imgurl}">
                    </div>
                    <div class="td_r">
                        <h6>${item.title}</h6>
                        <p>颜色/尺码：<span>${item.title}</span></p>
                        <p>货号：0000<span>${item.id}</span></p>
                    </div>
                </td>
                <td><span>￥<span class="price">${item.price}</span></span></td>
                <td><span class="qty">${item.qty}</span></td>
                <td><span class="at">${item.price*1*item.qty}</span></td>
                <td>免费</td>
                </tr>
            `
            // aprice +=`<p>商品总计：<span class="aprice">${item.price*1*item.qty}</span>元+运费：<span class="yunfei">0.00</span>-优惠：<span>10.00</span>元<span class="mj">（满1000减20）<span class="manjian">20</span>元</span></p>
            //             <h4>应付总额：<span class="total">${item.price*1*item.qty-20}</span></h4>
            //             <p>收货地址：<span></span></p>
            //             <p>收件人：<span></span></p>
            //             <button type="button">提交订单</button>`;
        }).join('');
        console.log(content);
       $tbody.html(content); 
    }
       var $total =$('.total');
       var $aprice = $('.aprice');
       var allp = 0;
       console.log($tbody.children('tr'));
       for(var i=0;i<$tbody.children('tr').length;i++){
        var dp = $tbody.children('tr').eq(i).find('.at').html();
        // console.log(dp);
        allp +=dp*1;
       
        // console.log(allp);

       }
       var alltotal =0;
       alltotal +=allp;
       $aprice.html(alltotal);
       $total.html(alltotal);

       $('.gwc').on('click',function(){
        location.href = "../html/shoppingcar.html";
       });
       //填写用户信息
       $('.save').on('click',function(){
            var $_dizhi = $('#dizhi').val(); 
            var $_name = $('#name').val();
            var $_telnum = $('#telnum').val(); 
            if(!/^1[3-9]\d{9}$/.test($_telnum)){
                alert('手机号码不合法');
                return false;
            }
            $('.information').html(`
                <p>地址：${$_dizhi}</p>
                <p>姓名：${$_name}</p>
                <p>电话号码：${$_telnum}</p>
                `);
            $('.dz').html($_dizhi);
            $('.xm').html($_name);

            $('#dizhi').val('');
            $('#name').val('');
            $('#telnum').val('');

       });
});