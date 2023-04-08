# Delivery-App / BeerFast :zap: :beer:

Neste projeto, o grupo desenvolveu um app de delivery para uma distribuidora de bebidas. Veja abaixo as seguintes funcionalidades:

Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria empresa, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes:  
 -  (1) A pessoa cliente, que compra da lista de produtos;  
 -  (2) A pessoa vendedora, que aprova, prepara e entrega;  
 -  (3) A pessoa administradora, que gerencia quem usa o aplicativo;  

Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;


## Instalação

```shell
git clone git@github.com:JovemAlex/BeerFast.git
```

### Dependências

`MySQL`  
`Node v16` 

## Utilização

Depois de fazer o clone do projeto:  

:warning: Inicie o projeto pela raiz, utilizando o comando `npm i`. Após isso, é possível fazer a instalação de ambos os aplicativos (back e front) através da raiz do projeto, utilizando o comando `npm run dev:prestart` (esse comando também restaurará o banco de dados, caso o `.env` esteja configurado corretamente).
