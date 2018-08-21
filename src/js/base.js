jQuery($=>{
    var top_c = $('.top_c');
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
            content += `<a href="#"><span>hi~&nbsp;${obj[0]}&nbsp;欢迎回嘉</span></a><a class="out">[退出]</a>`
        }
        top_c.html(content);
    var $out = $('.out');
    console.log($out); 
    $out.on('click',function(){
       Cookie.remove('obj');
       location.reload();
    });
});