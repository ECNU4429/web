/**
 * Created by ObiLang on 2014/5/5.
 */


$(document).ready(function () {
    //异步提交表单信息，完成登录操作
    $("#doLogin").bind("click",function(){
        var usernameVal=$.trim($("#username").val());
        var passwordVal=$.trim($("#password").val());
        var infomation={username:usernameVal,password:passwordVal};
        $.ajax({
            type: "POST",
            url: "/TroubleShooting/userlog",
            dataType: "json",
            data:JSON.stringify(infomation),
            success: function(data,status){
                var result=data.result;
                if(result=="nameNotPresent")
                    $("#info").html("用户名不存在");
                else if(result=="wrongPassword")
                    $("#info").html("密码不正确");
                else if(result=="success"){
                   // $.cookie("username", usernameVal, {expires: 0.1, path:'/'});
                    $("#info").html("登录成功，请稍等");
                    window.location.href="http://localhost:8080/TroubleShooting/main.html";
                }
            }
        });
    });
});