var posts=["2025/04/07/php命令执行 /","2025/04/07/ctfshow web(php特性wp)/","2025/04/07/搭blog/","2025/04/07/php反序列化 /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };