## Clonando e executando em sua máquina

### Pré-requisito:
-Deve realizar as seguintes instalações:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
  
git clone https://github.com/gomesingrid/testeeduzz.git

cd testeeduzz

#### Para instalar as dependencias:

npm install 


#### Para executar em moodo Headlesss via console:

npx cypress run


#### Para executar via Dashboard:

npx cypress open 

Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

### Gerando relatórios:
npm run cy:report  

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.