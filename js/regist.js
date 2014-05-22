$(document).ready(function () {
    //注册按钮事件，提交表单信息
    $("#doRegist").bind("click",function(){
        if($("#password").val()!=$("#confirmPassword").val())
            $("#wrong_info").html("两次密码不相同");
        else{
            var usernameVal=$.trim($("#username").val());
            var passwordVal=$.trim($("#password").val());
            var emailVal=$.trim($("#email").val());
            var infomation={username:usernameVal,password:passwordVal,email:emailVal};
            $.ajax({
                type: "POST",
                url: "/TroubleShooting/userRegist",
                dataType: "json",
                data:JSON.stringify(infomation),
                success: function(data,status){
                    var result=data.result;
                    if(result=="nameHavePresent")
                        $("#wrong_info").html("用户名已经被注册");
                    else if(result=="success")
                        $("#wrong_info").html("成功，请登录邮箱验证");
                   /* else if(result=="success"){
                        $.cookie("username", usernameVal, {expires: 0.1, path:'/'});
                        $("#header").css("height","100px");
                        $("#login_form").hide();
                        $("#have_login").show();
                        $("#username").html(usernameVal);
                    }*/
                }
            });
        }
    });
});