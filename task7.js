const http= require('http');

const server =http.createServer((req,res)=>{
    
    if(req.url==='/home'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title> My first Page </title></head>')
    res.write('<body><h1> Welcome Home</h1></body>')
    res.write('</html>')
    return res.end();
    }
    if(req.url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title> My first Page </title></head>')
        res.write('<body><h1> Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end();
        }
    if(req.url==='/node'){
            res.setHeader('Content-Type','text/html');
            res.write('<html>')
            res.write('<head><title> My first Page </title></head>')
            res.write('<body><h1> Welcome to my Node Js project</h1></body>')
            res.write('</html>')
            return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title> My First Page </title></head>')
    res.write('<body><h1> SomeThing goes wrong </h1><body>')
    res.write('</html>')
    res.end();
});


server.listen(4000);