import express, { request, response } from "express";
const app = express();
app.use(express.json());

// GET:    Buscar uma ou mais informacoes do back-end
// POST:   Criar uma nova informacao no back-end
// PUT:    Atualizar uma informacao existente no back-end
// DELETE: Remover uma inforamcao do back-end

//Request Param: Parametro que vem na propria rota que identifcia um recurso
//Query Param:   Parametro que vem na propria rota que geralmente opcional para filtrar, paginar.
//Request BOdy:  Paramentro para criacao/atualizacao de informacoes

const users = [
  "Marco",
  "Artur",
  "Jocas",
  "Lopes"
];
/*
//Query Param
app.get("/users", (request, response) => {
  const search = String(request.query.search);
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

  console.log("Listagem de users");
  response.json(filteredUsers);
});

//Request Param:
app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id); //coloca-se number pq vem em string
  const user = users[id];
  return response.json(user);
});

//Request Body
app.post('/users', (request, response) => {
  const data = request.body;
  console.log(data);

  const user = {
    name: data.name,
    email: data.email
  };
  return response.json(user);
});
*/
app.listen(3333);