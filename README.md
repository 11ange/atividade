## Teste de Conhecimento

### TESTE DE AUTOMAÇÃO:

> _**Avaliação – Busca CEP**_
> 
> _Utilizando uma linguagem de automação, preferência, C#(Specflow e NUnit), crie um script que realize os seguintes passos:_
> 
> _1\.  Entre no site dos correios;_
> 
> _2\.  Procure pelo CEP 80700000;_
> 
> _3\.  Confirmar que o CEP não existe;_
> 
> _4\.  Voltar a tela inicial;_
> 
> _5\.  Procure pelo CEP 01013-001_
> 
> _6\.  Confirmar que o resultado seja em “Rua Quinze de Novembro, São Paulo/SP”_
> 
> _7\.  Voltar a tela inicial;_
> 
> _8\.  Procurar no rastreamento de código o número “SS987654321BR”_
> 
> _9\.  Confirmar que o código não está correto;_
> 
> _10\. Fechar o browser;_
> 
> _Detalhes do script:_
> 
> _•   Um check por id;_
> 
> _•   Um check por xpath;_
> 
> _•   Um check por css;_
> 
>   
>  
> 
> _Desejável:_
> 
> _Otimizar o código para rodar no menor tempo possível_

### Resolução:

  
Foi utilizado na resolução do teste o framework Playwright rodando com JavaScript.

**Passos para rodar os testes no Playwright:**

_Site oficial: https://playwright.dev/_

1.  Criar o diretório para o projeto;
2.  Clonar ou fazer o download do código do github o diretório acima;
3.  Rodar dentro do diretório:

 `npm install -D @playwright/test`

4.  Executar o commando para rodar os testes:

 `npx playwright test`
