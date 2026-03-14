const{createServer} = require('http');
let server = createServer((request, response) => {
response.writeHead(200, {"Content-Type":"text/html"});
response.write('<h2>Projeto Desenvolvimento Web III</h2><p>Banco de dados com node express</p>');
response.end();
});
server.listen(8000);
console.log("Rodando");