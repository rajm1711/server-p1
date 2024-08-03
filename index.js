const http = require('http');
const fs = require('fs');

const PORT =3001;

const server = http.createServer((req,res)=>{

    const a = `${Math.floor(Math.random() * 100)}`;
    console.log(`${a} : New Request`);

    if(req.url =='/'){
        const path = `Request ${a} : ${req.url}\n`;

        fs.readFile('index.html','utf-8',(err,data)=>{

            fs.appendFile('home.text',path ,(err,data)=>{

                if(!err){
                    console.log(`${path} :  HTML request`);
                    res.statusCode = 200;
                    res.setHeader("Content-type",'text/html');
                    res.end('<h1 style="color:black; text-align:center;">Welcome To Home Page</h1>');
                    
                }
            })
        })
    }

    else if(req.url =='/about'){
        const path = `Request ${a} : ${req.url}\n`;

        fs.readFile('index.html','utf-8',(err,data)=>{

            fs.appendFile('about.text',path,(err,data)=>{

                if(!err){
                    console.log(`${path} :  HTML request`);
                    res.statusCode = 200;
                    res.setHeader("Content-type",'text/html');
                    res.end('<h2 style="color:blue; text-align:left;">Welcome To About</h2>');
                    
                }
            })
        })
    }
    
    else if(req.url =='/service'){
        const path = `Request ${a} : ${req.url}\n`;

        fs.readFile('index.html','utf-8',(err,data)=>{

            fs.appendFile('service.text',path,(err,data)=>{

                if(!err){
                    console.log(`${path} :  HTML request`);
                    res.statusCode = 200;
                    res.setHeader("Content-type",'text/html');
                    res.end('<h4 style="color:green; text-align:right;">We are Happy to Serve You</h4>');
                    
                }
            })
        })
    }
    else {
        const path = `Request ${a} : ${req.url}\n`;

        fs.readFile('index.html','utf-8',(err,data)=>{

            fs.appendFile('error.text',path,(err,data)=>{

                if(!err){
                    console.log(`${path} :  HTML request`);
                    res.statusCode = 400;
                    res.setHeader("Content-type",'text/html');
                    res.end('<h3 style="color:red;"> Error 400 : Page Not Found</h3>');
                    
                }
            })
        })
    }

})

server.listen(PORT, (err) => {
        if (!err) {
             console.log(`server running on http://localhost:${PORT}`);
         }
     })
    


