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

### 🔵 GET /properties/query
- **Descrição**: Filtro para pesquisa
```javascript 
{
http://localhost:3333/properties/query?titulo=praia&suite=1 
}
```


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
}
```


