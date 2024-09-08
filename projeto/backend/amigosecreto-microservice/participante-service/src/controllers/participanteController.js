const ParticipanteRepository = require('../repositories/participanteRepository');


module.exports = {
  async create(request, response) {
    try {
      let { _id } = await ParticipanteRepository.create(request.body);
      return response.json({
        "mensagem": "Participante criado com sucesso!",
        "status": 200,
        "idParticipante": _id
      });
    } 
    catch (err) {
      return response.json({
        "mensagem": "Erro " + err,
        "status": 500,
        "idParticipante": null
      });
    }
  },

  async edit(request, response) {
    try {
        let participante = await ParticipanteRepository.edit(request.body);
        return response.json({
            "mensagem": "Participante criado com sucesso!",
            "status": 200,
            "participante": participante
        });
    } catch (err) {
        return response.json({
            "mensagem": "Erro " + err,
            "status": 500,
            "participante": null
        });
    }
},


async delete(request, response) {
    let { id } = request.params;
    const participante = await ParticipanteRepository.delete(id);
    return response.json({
        "mensagem": "Participante removido com sucesso!",
        "status": 200
    });
},

async getById(request, response) {
    let { id } = request.params;
    let participante = await ParticipanteRepository.getById(id);

    if (participante === null) {
        response.status(404);
        return response.json({
            "mensagem": "Participante não encontrado!",
            "status": 404,
            "participante": participante
        });
    }

    return response.json({
        "mensagem": "Participante encontrado com sucesso!",
        "status": 200,
        "participante": participante
    });
},

};
