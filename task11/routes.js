const fs= require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
    
        
        fs.readFile('message.txt',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>')
            res.write('<head><title> Enter Message </title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>')
            res.write('</html>')
            return res.end();
        })

    
    }
    else if(url==='/message'&& method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const message= parseBody.split('=')[1];

    
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();
            })
            
            
            })
        
        
    }
    else {res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title> My First Page </title></head>')
    res.write('<body><h1> SomeThing goes wrong </h1><body>')
    res.write('</html>')
    res.end();
    }
};

// module.exports={
//     handler:requestHandler,
//     someText:"Some text"
// }

// module.exports.handler =requestHandler;
// module.exports.someText="Some text";

exports.handler =requestHandler;
exports.someText="Some text";
