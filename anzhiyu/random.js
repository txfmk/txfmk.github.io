var posts=["2025/04/05/ctfshow web(php特性wp)/","2025/04/05/php反序列化 /","2025/04/05/php命令执行/","2025/04/05/搭blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };