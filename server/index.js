const express = require("express")
const app = express();
const mysql = require("mysql");
const cors = require("cors")

//CONEXÃO COM O BANCO DE DADOS.
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "51027489",
    database: "cadastro",
});

app.use(cors())
app.use(express.json())

//OUVIR DADOS NA PORTA 3001 (QUALQUER OUTRA PORTA)
app.listen(3001, () => {
    console.log("Servidor Online")
})

//INSERIR DADOS NO BANCO DE DADOS.
app.post("/register", (req, res) => {

    const { nome } = req.body;
    const { email } = req.body;
    const { endereco } = req.body;
    const { numero } = req.body;
    const { cpf } = req.body;
    const { nascimento } = req.body;
    const { telefone } = req.body;
    const { celular } = req.body;
    const { mensagem } = req.body;

    let sql = "INSERT INTO pessoas (`id`, `nome`, `email`, `endereco`, `numero`, `cpf`, `nascimento`, `telefone`, `celular`, `mensagem`) VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    console.log(sql)
    db.query(sql, [nome, email, endereco, parseInt(numero), cpf, nascimento, telefone, celular, mensagem], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    });
})

//LER DADOS DO BANCO DE DADOS E MOSTRA NA TABELA
app.get("/getDados", (req, res) => {

    let sql = "SELECT * FROM pessoas"

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

//DELETAR DADOS PELO ID.
app.delete("/delete/:id?", (req, res) => {

    const { id } = req.params;

    console.log(id)

    let sql = "DELETE FROM pessoas WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

//BUSCAR DADOS PELO ID PASSADO PELO USUARIO.
app.get("/buscarDados/:id", (req, res) => {
    const { id } = req.params;

    console.log(id);

    let sql = "SELECT * FROM pessoas WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.post("atualizarDados/:id", (req, res) => {

    const { id } = req.params;
    const { nome } = req.body;
    const { email } = req.body;
    const { endereco } = req.body;
    const { numero } = req.body;
    const { cpf } = req.body;
    const { nascimento } = req.body;
    const { telefone } = req.body;
    const { celular } = req.body;
    const { mensagem } = req.body;

    alert(id)
    let sql = " UPDATE pessoas SET nome = '?', email = '?', endereco = '?', numero = '?', cpf = '?', nascimento = '?', telefone = '?', celular = '?', mensagem = '?' WHERE ID = ?";

    db.query(sql, [id, nome, email, endereco, parseInt(numero), cpf, nascimento, telefone, celular, mensagem], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    });

})