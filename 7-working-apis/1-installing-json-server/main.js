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