/**
 * Created by ObiLang on 2014/5/18.
 */
$(document).ready(function () {
    //点击搜索键
    $("#search").bind("click", function () {
        var searchContent = $.trim($("#searchContent").val());
        if (searchContent != "") {
            window.location.href = "http://localhost:8080/TroubleShooting/advise.html?content=" + searchContent;
        }
    });
});

//按下回车键

$(document).ready(function (){
        document.onkeydown = function (e) {
            var ev = document.all ? window.event : e;
            if (ev.keyCode == 13) {
                var searchContent = $.trim($("#searchContent").val());
                if (searchContent != "") {
                    window.location.href = "http://localhost:8080/TroubleShooting/advise.html?content=" + searchContent;
                }
                return false;
            }
        }
});

