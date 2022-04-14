const elenco = [
  {
    id: 1,
    personagem: 'Fabien Marchal',
    descricao:
      'Fabien Marchal was Louis XIV Chief of Police and functions as the King s eyes and ears both within and outside the palace.',
  },
  {
    id: 2,
    personagem: 'Claudine Masson',
    descricao:
      'Claudine Masson was the daughter of Dr. Masson and Louis XIV s personal doctor who later assumed the position herself.',
  },
  {
    id: 3,
    personagem: 'Phelippe of France',
    descricao:
      'Philippe of France is the Duke of Orléans, Louis XIVs younger brother and commander of the King’s army.',
  },
  {
    id: 4,
    personagem: 'Chevalier of Lorraine',
    descricao:
      'The Chevalier de Lorraine is the favourite of Philippe of France and a member of Louis XIV‘s court.',
  },
  {
    id: 5,
    personagem: 'Louis XIV of France',
    descricao:
      'He is the King of France and Navarre, the son of Louis XIII of France and Anne of Austria, the husband of Marie-Thérèse of Spain and the elder brother of Philippe. He does whatever needed to be done to make his country great.',
  },
  {
    id: 6,
    personagem: 'Marie-Thérèse of Spain',
    descricao:
      'Marie-Thérèse of Spain was the Queen of France and Navarre and the wife of Louis XIV.',
  },
  {
    id: 7,
    personagem: 'Princess Palatine',
    descricao:
      'Princess Palatine is a German princess who was placed in an arranged marriage with Philippe as part of Louiss new alliance - so she became the Duchesse d’Orléans.',
  },
  {
    id: 8,
    personagem: 'Princess Palatine',
    descricao:
      'Madame de Montespan was one of Louis XIVs mistresses and a member of his court.',
  },
  {
    id: 9,
    personagem: 'Sophie of Clermont',
    descricao:
      'Sophie de Clermont is the daughter of Béatrice, Madame de Clermont, the former Lady-In-Waiting of Henriette of England and Princess Palatine and a member of Louis XIVs court. In Season Two she was the wife of the Duke of Cassel, so she became the Duchess of Cassel.',
  },
  {
    id: 10,
    personagem: 'Madame Agathe',
    descricao:
      'Madame Agathe is the leader of a satanic coven who are behind the Affair of the Poisons. She is a witch and a tarot reader with a large clientele among the nobles of Versailles, particularly her old friend Madame de Montespan.',
  },
];

const findElencoService = () => {
  return elenco;
};

const findElencoByIdService = (id) => {
  return elenco.find((personagem) => personagem.id == id);
};

const createElencoService = (newElenco) => {
  const newId = elenco.length + 1;
  newElenco.id = newId;
  elenco.push(newElenco);
  return newElenco;
};

const updateElencoService = (id, personagemEdit) => {
  personagemEdit['id'] = id;
  const personagemIndex = elenco.findIndex((personagem) => personagem.id == id);
  elenco[personagemIndex] = personagemEdit;
  return personagemEdit;
};

const deleteElencoService = (id) => {
  const personagemIndex = elenco.findIndex((elenco) => elenco.id == id);
  return elenco.splice(personagemIndex, 1);
};

module.exports = {
  findElencoService,
  findElencoByIdService,
  createElencoService,
  updateElencoService,
  deleteElencoService,
};
