const {app, port} = require('./app');
const { connect } = require('./database');

async function main(){
    await Promise.all([connect(), app.listen(port)]); // [connect()==database connection], [app.listen(port)==Express aplication]
    console.log(`Servidor conectado al puerto: ${port}`);
}

void main();
