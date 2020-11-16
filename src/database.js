const mongoose = require('mongoose');
let api = 'hurtados-App'; // nombre de la base de datos.

async function connect(){
    try {
        await mongoose.connect(`mongodb://localhost:27017/${api}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            useCreateIndex: true,
            useFindAndModify: true,
        });
    } catch (error) {
        throw error;
    }
    console.log(`Conexíon con la base de datos: ${api}`);
}

module.exports = { connect };

