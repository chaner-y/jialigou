jQuery(function($){
   var $tvhot_m = $('.sellhot .tvhot_m');
   console.log($tvhot_m);
    var content = '';
       $.ajax({
            url:"api/index.php",
            type:"GET",
            datatype:"json",
            success:function(data){
                data = JSON.parse(data);
                console.log(data);
                var res = data.slice(0,4);
                console.log(res);
                    res.map(function(item){
                        console.log(item);
                    content += `<li class="tvhot_g">
                    <div class="tv">
                        <img src="${item.imgurl}">
                    </div>
                    <h6 class="name">${item.titile}</h6>
                    <p>￥<span class="price">${item.price}</span></p>
                    <p class="last">已热销：<span class="allsell">${item.sell}</span>件</p>
                    </li>`
                }).join(''); 
                $tvhot_m.html(content);
            }  
       }); 
});