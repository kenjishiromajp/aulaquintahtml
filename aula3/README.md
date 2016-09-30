# Aula 3 - aulaquintahtml
-------------
### para instalar o browser-sync primeiro
- Instale o NodeJS
- Acesse o site https://www.browsersync.io/
- Execute o comando no cmd -> npm install -g browser-sync
    
    ```
    $ npm install -g browser-sync
    ```
- Execute o comando no cmd para rodar a aplicação com hot reload 
    
    ```
    $ browser-sync start --server --files css/*.css,*.html, js/*.js
    ```
- utilize o package.json para não ter que ficar decorando o comando gigante (browser-sync yadayday...), na propriedade scripts insira o valor
    
    ```
    {
      "name": "exercicio_frontend",
      "version": "1.0.0",
      "description": "",
      "main": "",
      "scripts": {
        "start": "browser-sync start --server --files css/*.css,*.html, js/*.js "
      },
      "author": "7",
      "license": "ISC"
    }
    ```
- Para executar o script "start" execute no cmd o comando
    
    ```
    $ npm run start
    ```
