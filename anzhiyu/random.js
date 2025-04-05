var posts=["2025/04/05/php反序列化 1/","2025/04/05/搭blog/","2025/04/05/ctfshow web(php特性wp)/","2025/04/05/php命令执行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };