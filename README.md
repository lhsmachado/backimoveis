# 🚀 API Projeto Imobiliária  

## 👨‍💻 Entidades utilizadas no projeto até o momento
```bash
- # Auth
- $ cuida da autenticação da api.
- # Photos
- $ Registra as fotos no Sistema.
- # Properties
- $ É a entidade responsavel por criar os imóveis.
- #  User
- $ E por último a entidade de user que é responsavel pelo usuário.
```

## 🛣️ Rotas da API até o momento

### 🔵 GET /properties
- **Descrição**: Retorna todas os imóveis cadastrados no sistema.

<<<<<<< HEAD
### 🔵 GET /user/register
- **Descrição**: Registra um usuario
```javascript 
{
	"name": "gah",
	"email": "gah@adm.com.br",
	"password": "senha123"
}
```

### 🔵 POST /auth
- **Descrição**: Autenticação de usuário (se precisar...)
- **Corpo da Requisição**
```javascript 
{
	"email": "gah@adm.com.br",
	"password": "senha123"
}
```
=======
### 🔵 GET /properties/query
- **Descrição**: Filtro para pesquisa
```javascript 
{
http://localhost:3333/properties/query?titulo=praia&suite=1 
}
```

>>>>>>> master

### 🟡 PATCH /properties/edit/id
- **Descrição**: Edita um imóvel ja cadastrado
- **Corpo da Requisição**
```javascript 
{
	"titulo": "editando casa por id"
}
```


### 🟢 POST /properties
- **Descrição**: Cria uma vaga no bando de dados.
- **Corpo da Requisição**:
```javascript
{
<<<<<<< HEAD
		titulo": "Casa gigante de ricooooooo",
		tipo": "locação",
		codigo": 99353005,
		cidade": "São Paulo",
		UF": "SP",
		descricao": "Apartamento- 3 dormitórios sendo 1 suíte, sala, cozinha, banheiro, área de serviço, churrasqueira, sacada e garagem",
		suite": 1,(por padrão começa como 0 mas pode ser adicionado ao criar o imobel, o tipo é number)
		quartos": 30,(por padrão começa como 1 mas pode ser adicionado ao criar o imobel, o tipo é number)
		vagagaragem": 10,(por padrão começa como 0 mas pode ser adicionado ao criar o imobel, o tipo é number)
		banheiros": 55,(por padrão começa como 1 mas pode ser adicionado ao criar o imobel, o tipo é number)
		valorCondominio": null,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		IPTU": null,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		precoAluguel": 20000,(por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		precoVenda": null, (por padrão começa como null mas pode ser adicionado ao criar o imobel, o tipo é number)
		fotos: [](as fotos enviadas seram armazenadas aqui, somenteo id delas)
=======
Schema
    titulo: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, enum: ['locação', 'venda']},
    codigo: { type: Number, default:0, unique: true},
    cidade: { type: String, required: true },
    UF: { type: String, required: true },
    metros2: { type: String, defaul: 0 },
    descricao: { type: String, required: true },
    suite: { type: String, default: 0 },
    quartos: {type: String, required: true, default: 1},
    vagagaragem: {type: String, default: 0},
    banheiros: { type: String, default: 1},
    valorCondominio: { type: String, default: null},
    IPTU: { type: String, default: null},
    precoAluguel: {type: String, default: null},
    precoVenda: {type: String, default: null},
    fotos: []
>>>>>>> master
}
```


# BackImoveisAtualizado
