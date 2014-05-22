/**
 * Created by ObiLang on 2014/5/18.
 */
$(document).ready(function () {
    //这里暂时必须保持传递的参数名是content且只有一个参数
    var url = location.href;
    var para = url.substring(url.indexOf("=")+1,url.length);;
    $("#problemName").html(decodeURI(para));

    //专家建议
    $.ajax({
        type: "GET",
        url: "/TroubleShooting/search?content="+para,
        dataType: "json",
        success: function(data,status){
            var arrayObj2 = new Array();
            arrayObj2=data.advices;
            var proContent="<span class='stress'>advise</span>";
            if(data.result=="success") {
                for (var i = 0; i < arrayObj2.length; i++) {
                    var advice = "<li>" + arrayObj2[i] + "</li>";
                    proContent = proContent + advice;
                }
            }
            else{
                proContent = proContent + "抱歉,未找到任何结果,试试看看网友提问或者点此提问";
            }
            $("#proAdvice").html(proContent);
            return true;
        }
    });

    //网友互助
    $.ajax({
        type: "GET",
        url: "/TroubleShooting/searchRele?content="+para,
        dataType: "json",
        success: function(data) {
            var result = data.result;
            var arrayObj = new Array();
            var quesContent="<span class='stress'>question</span>";


            if(result=="success") {
                arrayObj = data.relaQues;

                for (var i = 0; i < arrayObj.length; i++) {
                    var quesLii="<li><a href='question.html?questionID="+arrayObj[i].questionID+"'>"+arrayObj[i].question+"</a></li>";
                    quesContent=quesContent+quesLii;
                }

                $("#relevantQuestions").html(quesContent);
            }
            return true;
        }
    });

});

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

