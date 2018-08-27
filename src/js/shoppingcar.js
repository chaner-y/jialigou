jQuery(function($){
    $('.top').load('../html/base.html .top0');
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

     render();
    // //获取列表页cookie
    // var goodsl = Cookie.get('goodsl');
    //     console.log(goodsl);
    //     if(goodsl.length<=0){
    //             goodsl = [];
    //     }
    //     else{
    //             goodsl = JSON.parse(goodsl);
    //             // goodsl.map(function(item){
    //              render(goodsl);
    //             // }).join('');
    //             $tbody.html(content0);
    //     }
    //加入购物车渲染
    function render(){
        // 获取详情页cookie
        var goods = Cookie.get('goodslist0');
        console.log(goods);
        if(goods.length<=0){
            goods = [];
        }else{
            goods = JSON.parse(goods);
        }
        var content0 = '';
        var $tbody = $('tbody');
        goods.map(function(item){
        $tbody.html('');
                content0 +=`
                    <tr data-guid ="${item.id}">
                        <td>
                            <input type="checkbox" class="checkbox"><img src="../${item.imgurl}" alt="">
                        </td>
                        <td>
                            <h3 class="title0">${item.title}</h3>
                            <p>货号：0000<span>${item.id}</span></p>
                            <p>颜色尺码：<span>M、随机</span></p>
                            <p>${item.title}</p>
                        </td>
                        <td>
                            <p> ￥<span class="danjia">${item.price}</span></p>
                        </td>
                        <td>
                            <span class="jian">-</span>
                            <input type="text" name="" value="${item.qty}" class="num">
                            <span class="jia">+</span>
                        </td>
                        <td><p class="jiali">￥<span class="zongjia">${item.price*1*item.qty}</span></td></p>
                        <td>
                            <span class="adds">加入收藏夹</span>
                            <span class="del">删除</span>
                        </td>
                    </tr>
                `
            }).join('');
            $tbody.html(content0);
            // var $jian = $('.jian');
            $tbody.on('click',function(e){
                var target = e.target;
                //减减
                if(target.className ==='jian'){
                    var $curr = $(target).next('.num');
                    //获取当前行的数量
                    var num = $curr.val();
                    $curr.val(--num); 
                    if($curr.val()<1){
                    $curr.val(1);
                  }
                  //修改价格
                  //获取当前行的单价
                 var $price = $(target).closest('tr').find('.danjia').text();
                 var zongjia = $(target).closest('tr').find('.zongjia');
                 zongjia.html($price*1*$curr.val());
                  
                }
                //加加
                if(target.className ==='jia'){
                    var $curr = $(target).prev('.num');
                    var num = $curr.val();
                    $curr.val(++num);
                    //修改价格
                    //获取当前行的单价
                    var $price = $(target).closest('tr').find('.danjia').text();
                    var zongjia = $(target).closest('tr').find('.zongjia');
                    zongjia.html($price*1*$curr.val());
                }

                
               //删除单个商品
               if(target.className === 'del'){
                    var currentLi = $(target).closest('tr');
                    console.log(currentLi);

                    var guid = currentLi.attr('data-guid');
                    
                    //找出数组中对应商品并移除
                    for(var i=0;i<goods.length;i++){
                        console.log(goods[i].id,guid);
                        if(goods[i].id === guid){
                            goods.splice(i,1);
                            break;
                        }
                    }
                     console.log(goods);

                    //重写cookie
                    Cookie.set('goodslist0',JSON.stringify(goods),{path:'/'});
                    //重写渲染页面
                    render();
                    console.log($tbody);
                }
               
               
            });
            $('.clearcar').on('click',e=>{
                    //清空cookie
                    Cookie.remove('goodslist0');
                    //清空goodslist0数组
                    goods = [];
                    // goodss = [];
                    console.log(goods);
                    
                    render();
               });

            var $checkbox = $('.checkbox');
            //全选
            $('#checkall').click(function(){
                $checkbox.prop('checked',this.checked);
                renderjiege();
            });
            $checkbox.on('click',function() {   
              $("#checkall").prop("checked" , $checkbox.length == $checkbox.filter(":checked").length ? true :false);  
              renderjiege();

            });
            function renderjiege(){
                 var $checked = $checkbox.filter(':checked');
                 var apri = 0;
                 for(let i=0;i<$checked.length;i++){
                 var zj = $($checked[i]).closest('tr').find('.zongjia').html();
                 apri +=zj*1;
               }
               $('.gj').html(apri.toFixed(2));
               $('.total').html(apri.toFixed(2));
            }
    }

    //猜您喜欢
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

   
        //cookiet操作
        var $checkbox = $('.checkbox');
        var goodslist_g = Cookie.get('goodslist_l');
        if(goodslist_g === ''){
            goodslist_g = [];
        }else{
            goodslist_g = JSON.parse(goodslist_g);
        }
            $('.jiesuan').on('click',function(){
                if($checkbox.is(':checked')){
                var goods = {};
                var currDiv = $(this).closest('.main_b').prev('.main_c').find('tbody');
                    console.log($(currDiv).children('tr'));
                    for(let i=0 ;i<$(currDiv).children('tr').length;i++){

                    (function(i){
                        var guid = $(currDiv).children('tr').eq(i).attr('data-guid');
                    console.log(guid);

                        goods = {
                            guid:guid,
                            imgurl:currDiv.children('tr').find('img').eq(i).src,
                            price:currDiv.children('tr').find('.danjia').eq(i).html(),
                            title:currDiv.children('tr').find('.title0').eq(i).html(),
                            qty:currDiv.children('tr').find('.num').eq(i).val(),
                            zongj:currDiv.children('tr').find('.zongjia').eq(i).html(),
                        }
                    
                    
                    })(i);
                }
                        goodslist_g.push(goods);
                    
                
                Cookie.set('goodslist_l',JSON.stringify(goodslist_g),{path:'/'});
                location.href = "../html/pay.html";
            }
        });
    
       $('.tijiao').on('click',function(){
            location.href = "../html/pay.html";
       });
});