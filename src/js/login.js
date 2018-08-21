jQuery(function($){
    $('.links').load('../html/base.html .links0');
    $('.footer').load('../html/base.html .footer0');


    var $username = $('.lusername');
    var $password = $('.lpassword');
    var $createCode = $('.createCode');
    var $lbtn = $('.lbtn');

    $lbtn.on('click',function(){
        var _username = $username.val();
        var _password = $password.val();

        $.ajax({
            url:"../api/login.php",
            type:"POST",
            data:{
                "username":_username,
                "password":_password
            },
            success:function(data){
                console.log(data);
                if (data==='yes') {
                    alert('登录成功，正在跳转。。。');
                    setTimeout(function(){
                        location.href='../index.html';
                    },1000);
                }
                if(data === 'no'){
                    alert('帐号或密码不匹配，请从新输入');
                            return false;
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
    // createCode();
    // function createCode(){
    //         var res = '';
    //         for(var i=0;i<4;i++){
    //             var num = parseInt(Math.random()*10);
    //             res +=num;
    //         }
    //         showcode.html(res);
    //     }

});