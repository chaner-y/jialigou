jQuery(function($){
    //加载links和footer页面
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');

    //验证注册用户名是否存在
    var $username = $('#username');
    var $password = $('#password');
    var $rpassword = $('#rpassword');
    var $checkbox = $('#checkbox');

    var $rbtn = $('.rbtn');

    //失去焦点时
    $username.on('blur', function(){
        var _username = $username.val();
        // console.log(_username);
        $.ajax({
            url: "../api/check.php",
            type: "GET",
            data: {"username":_username},
            success:function(data){
                console.log(data);
                if(data==="no"){
                    alert('该用户名已被注册，请重新输入');
                    $username.css("borderColor","#F00");
                }else if(data==="yes"){
                    $username.css("borderColor","#58bc58");
                }
            }
        });
    });

    //注册，写进页面
    $rbtn.on('click',function(){
        var _username = $username.val();
        var _password = $password.val();
        var _rpassword = $rpassword.val();
        var res = $checkbox.is(':checked');
            console.log(res);
       // if(!res){
       //      alert('请阅读条款，并打钩');
       //      // return false;
       //  }
        // if(_username=''|| _password=''|| _rpassword=''){
        //     alert('用户名或密码不能为空');
        //     return false;
        // }
        $.ajax({
            url: "../api/register.php",
            type: "POST",
            data: {
                "username":_username,
                "password":_password,
                "rpassword":_rpassword
            },
            success:function(data){
                console.log(data);
                if (data==='不一致'){
                        alert('两次密码输入不一致，请重新输入');
                    return false;
                }
                if(data==="success"){
                    alert("注册成功！正在跳转。。。");
                    setTimeout(function(){
                        location.href= "../index.html";
                }, 300);
              }
            }
        });

        //保存cookie
        var date = new Date();
        date.setDate(date.getDate()+1);
        var arr = [_username];
        // var username=+_username;
        Cookie.set('obj',JSON.stringify(arr),{path:'/',expires:date});    
    });
    
   
    
});