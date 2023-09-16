const http = require('http')
const server = http.createServer((req,res)=>{
  //our home page
  if(req.url === '/'){
    res.end('hi')
  }//this is our about page: localhost/about
  else if(req.url === '/about'){
    res.end('here is our shorts')
  }
  //this is our error page: localhost/err
  else {res.end(`
  <h1>oops!</h1>
  <p>we can't seem to find the page u are looking for</p>
  <a href = "/">back home</a>
  `)
}
  
})
server.listen(5000)