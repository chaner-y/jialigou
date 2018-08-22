jQuery(function($){
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
                    content += `<li class="tvhot_g">
                    <div class="tv">
                        <img src="${item.imgurl}">
                    </div>
                    <h6 class="name">${item.titile}</h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    <p class="last">已热销：<span class="allsell">${item.sell}</span>件</p>
                    </li>`
                }).join(''); 
                $sellhot_m.html(content);
                //热播
                var res1 = data.slice(4,8);
                console.log(res1);
                    res1.map(function(item){
                    content1 += `<li class="tvhot_g">
                    <div class="tv">
                        <span>[00:53~01:31]</span>
                        <img src="${item.imgurl}">
                    </div>
                    <h6 class="name">${item.titile}</h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    </li>`
                }).join(''); 
                    $tvhot_m.html(content1);

                //main_br1数据
                var $main_br1 = $('.main_br1');
                var res2 = data.slice(0,6);
                var content2 = '';
                res2.map(function(item){
                    content2 +=`<li>
                        <div class="main_brt">
                            <img src="${item.imgurl}"  alt="">
                        </div>
                        <h6>${item.titile}</h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br1.html(content2);
                //main_br2数据
                var $main_br2 = $('.main_br2');
                var res3 = data.slice(6,12);
                var content3 = '';
                 res3.map(function(item){
                    content3 +=`<li>
                        <div class="main_brt">
                            <img src="${item.imgurl}"  alt="">
                        </div>
                        <h6>${item.titile}</h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br2.html(content3);
                //main_br3数据
                var $main_br3 = $('.main_br3');
                var res4 = data.slice(6,12);
                var content4 = '';
                 res4.map(function(item){
                    content4 +=`<li>
                        <div class="main_brt">
                            <img src="${item.imgurl}"  alt="">
                        </div>
                        <h6>${item.titile}</h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br3.html(content4);
                //main_br4数据
                var $main_br4 = $('.main_br4');
                var res5 = data.slice(12,18);
                var content5 = '';
                 res5.map(function(item){
                    content5 +=`<li>
                        <div class="main_brt">
                            <img src="${item.imgurl}"  alt="">
                        </div>
                        <h6>${item.titile}</h6>
                        <p>￥<span>${item.price}</span></p>
                    </li>`
                }).join('');
                $main_br4.html(content5);
            } 

       }); 

});