<%--
  Created by IntelliJ IDEA.
  User: ObiLang
  Date: 2014/5/15
  Time: 18:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="DAO.UserDao" %>
<%@ page import="Entity.User" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <title>验证邮箱注册</title>
    <%-- 实现几秒自动跳转页面js--%>
    <script language=javascript>

        function countDown(secs, surl) {
            left_time.innerText=secs;
            if (--secs > 0) {
                setTimeout("countDown(" + secs + ",'" + surl + "')", 1000);
            } else {
                window.open(surl, '_parent');
            }
        }
    </script>

</head>

<body>
<%
    String requestKey;
    int rKey;
    requestKey=request.getParameter("key");
    if(requestKey==null){
        System.out.println(requestKey);
    }
    String user2=(String)session.getAttribute("registName");
    System.out.println(user2);

    String sessionKey="";
    try{
        sessionKey=(String)session.getAttribute("keyNum");
        System.out.println(sessionKey);
    }catch(Exception e){System.out.println("没有得到session中参数");}

    if(sessionKey.equals(requestKey)){
        UserDao	userDao=new UserDao();
        User user=new User();
        user.setUsername((String)session.getAttribute("registName"));
        user.setPassword((String)session.getAttribute("registPassword"));
        user.setEmail((String)session.getAttribute("registEmail"));
        userDao.createUser(user);
        Cookie cookie=new Cookie("username",(String)session.getAttribute("registName"));
        cookie.setMaxAge(60*60);
        response.addCookie(cookie);
%>
<div id="left">
    <h1>注册成功!
        <a id="left_time">3</a>秒后自动跳转到主界面。<br/>
        <script language=javascript>
            countDown(3,'main.html');
        </script>
        如果您的浏览器没有自动跳转，请点击<a href="main.html">这里</a></h1>
        <%} else{%>
    <div id="left">
        <h1>啊哦，注册失败，请<a href="regist.html">返回</a>重新注册<br/>
            或<a>联系网站管理员</a></h1>
        <%} %>
    </div>
    <div id="right"></div>

</body>
</html>
