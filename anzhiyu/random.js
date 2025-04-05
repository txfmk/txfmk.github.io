var posts=["2025/04/04/hello (copy)/","2025/04/02/hello-world/","2025/04/04/hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };