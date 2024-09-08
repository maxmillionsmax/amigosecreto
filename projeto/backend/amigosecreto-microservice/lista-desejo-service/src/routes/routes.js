const { Router } = require('express');

const listaDesejoController = require('../controllers/listaDesejoController');

const routes = Router();

routes.get('/listadesejo/grupo/:idGrupo/byParticipante/:idParticipante', listaDesejoController.getGruposByParticipante);
routes.post('/listadesejo', grupoController.create);
routes.post('/listadesejo/addItem', grupoController.addItem);
routes.delete('/listadesejo/grupo/:idGrupo/participante/:idParticipante/item/:item', listaDesejoController.delParticipante);

module.exports = routes;