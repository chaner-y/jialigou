jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    //获取cookie
    var goods = Cookie.get('goodslist0');
    console.log(goods);
    var content0 = '';
    var $tbody = $('tbody');
    console.log($tbody);
        if(goods){
            goods = JSON.parse(goods);
            goods.map(function(item){
                content0 +=`
                    <tr>
                        <td>
                            <input type="checkbox" class="checkbox"><img src="../${item.imgurl}" alt="">
                        </td>
                        <td>
                            <h3>${item.title}</h3>
                            <p>货号：0000<span>${item.id}</span></p>
                            <p>颜色尺码：<span>M、随机</span></p>
                            <p>${item.title}</p>
                        </td>
                        <td>
                            <p> ￥<span>${item.price}</span></p>
                        </td>
                        <td>
                            <span class="jian">-</span>
                            <input type="text" name="" value="${item.qty}" class="num">
                            <span class="jia">+</span>
                        </td>
                        <td><p class="jiali">￥<span>${item.price*1*item.qty}</span></td></p>
                        <td>
                            <span class="adds">加入收藏夹</span>
                            <span class="del">删除</span>
                        </td>
                    </tr>
                `
            }).join('');
            $tbody.html(content0);
        }
    var content = '';
    $.ajax({
        url:'../api/index.php',
        type:'POST',
        datatype:'JSON',
        success:function(data){
            data = JSON.parse(data);
            console.log(data);
            var res = data.slice(50,54);
            console.log(res);
            res.map(function(item){
                content += `<li>
                <div>
                    <img src="../${item.imgurl}" alt="">
                </div>
                <p><a>${item.titile}</a></p>
                <p class="fl">￥<span class="price">${item.price}</span></p>
                <span class="addche">加入购物车</span>
                </li>`
            }).join('');
            $('.cai').html(content);
        }
    });
    var $jian = $('.jian');
    $tbody.on('click',function(e){
        var target = e.target;
        if(target.className ==='jian'){
            var num = $('.num').val();
            $jian.
        }
    });

    var $checkbox = $('.checkbox');
    //全选
    $('#checkall').click(function(){
        $checkbox.prop('checked',this.checked);
    });
    $checkbox.on('click',function() {   
      $("#checkall").prop("checked" , $checkbox.length == $checkbox.filter(":checked").length ? true :false);  
});
   
});