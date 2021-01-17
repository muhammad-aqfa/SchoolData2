const http=require(`http`);
port=8081;
http.createServer((req,res)=>{
    console.log(`recevie request :`,req);
    res.writeHead(200,{"content-type": "text/plain"});
    res.write("dftgyjkjhgfd");
    res.end();
}).listen(port,'localhost')
console.log(`server listing to port ${port} `);