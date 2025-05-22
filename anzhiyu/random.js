var posts=["2025/04/04/abc/","2025/04/06/ctfshow web(php特性wp) /","2025/04/07/ctfshow web(php特性wp)/","2025/04/04/hello (copy)/","2025/04/02/hello-world/","2025/04/04/hello/","2025/04/29/ctfshow_web-ssti/","2025/04/07/php反序列化/","2025/04/07/php命令执行/","2025/04/07/搭blog/","2025/05/21/轩辕杯wp/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };