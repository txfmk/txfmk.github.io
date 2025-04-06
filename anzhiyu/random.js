var posts=["2025/04/06/php反序列化 1 /","2025/04/07/ctfshow web(php特性wp)/","2025/04/06/php命令执行 /","2025/04/06/搭blog /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };