Optei   pela utilização da lib fast-csv para a leitura do arquivo, poia
  Através da função getFromPath, é possível recuperar os dados do arquivo como um array. E pela utilização do mocha para os testes. 
  
Implementei as funções responsáveis pela leitura processamento dos dados do arquivo em um módulo específico ao qual chamei de Leitor, para que seja possível consumi-lo tanto no JS de execução quanto no JS de testes. 
  
Para os testes, achei importante focar nas funções que fazem a validação das notas preenchidas e da função que calcula as médias. 
