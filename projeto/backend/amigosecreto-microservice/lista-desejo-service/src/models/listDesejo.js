const mongoose = require('mongoose');

const listaDesejoSchema = new mongoose.Schema({    
    _idParticipante : ObjectId,
    _idGrupo        : ObjectId,
    itensDesejo : [String]
});
module.exports = mongoose.model('Grupo',grupoSchema);