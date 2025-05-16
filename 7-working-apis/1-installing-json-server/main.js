// const response = fetch("http://localhost:3000")

// console.log(response)

fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => console.log(data))

/*
    Documentação para:
        • Levantar o container docker: "docker-compose up -d"
        • Executar o node e abrir um terminal bash: "docker-compose exec node bash"
        • Instalar o json-server: "npm install json-server" (caso não tenha o json-server instalado)
        • Executar o server: "npm run server"
        • Antes de derrubar o container é preciso sair do terminal bash usando CONTROL + D
        • Derrubar o container: "docker-compose down --remove-orphans" (a flag remove orphans é para derrubar os container que estão rodando em segundo plano e que muitas vezes não aparecem ao dar um docker-compose down)

        No arquivo package.json é possível mudar a porta usando a flag --port=3333
        (ao usar esse recurso, não esquecer de mudar a porta também no arquivo docker-compose.yml, se deixar sem nada na flag a porta usada será a determinada no docker-compose.yml)
*/

/*
    TROCAR A VERSÃO
    • Para garantir que as funcionalidades do pacote "json-server" funcionem exatamente como demonstrado no curso é necessário usar a mesma versão do professor.
    Para trocar a versão é só entrar no npmjs.com ver as versões e instalar dessa forma:

    npm install json-server@1.0.0-alpha.17
    (versão 1.0.0-alpha.17 é apenas um exemplo de versão)
*/