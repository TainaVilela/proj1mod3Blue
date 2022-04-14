const elencoService = require('../services/elenco.services');

const homePersonagensController = (req, res) => {
  res.send('Veja os personagens da série Versailles');
};

const findPersonagensController = (req, res) => {
  res.send(elencoService.findElencoService());
};

const findPersonagensByIdController = (req, res) => {
  res.send(elencoService.findElencoByIdService(req.params.id));
};

const createPersonagensController = (req, res) => {
  const elenco = req.body;
  const newElenco = elencoService.createElencoService(elenco);
  res.send(newElenco);
};

const updatePersonagensController = (req, res) => {
  const idParam = +req.params.id;
  const personagemEdit = req.body;
  const updatePersonagens = elencoService.updateElencoService(
    idParam,
    personagemEdit,
  );
  res.send(updatePersonagens);
};

const deletePersonagensController = (req, res) => {
  const idParam = req.params.id;
  elencoService.deleteElencoService(idParam);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  homePersonagensController,
  findPersonagensController,
  findPersonagensByIdController,
  createPersonagensController,
  updatePersonagensController,
  deletePersonagensController,
};
