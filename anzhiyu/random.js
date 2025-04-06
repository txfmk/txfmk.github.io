var posts=["2025/04/06/ctfshow web(php特性wp) /","2025/04/06/搭blog /","2025/04/06/php命令执行 /","2025/04/06/php反序列化 1 /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };