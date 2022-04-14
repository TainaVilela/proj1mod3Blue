const express = require('express');
const port = 3000;
const cors = require('cors');
const personagensRoutes = require('./src/routes/personagens.routes.js');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.use(cors());

app.use('/personagens', personagensRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
