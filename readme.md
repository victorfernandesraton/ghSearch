# gsSearch: App para buscar usuário e repos com api do github

## Antes de começar

Para essa aplicação funcionar corretamente, se faz necessário o uso de um personal token do github, visto que a api GraphQL só pode ser acessada mediante token, [Saiba mais](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

- Instale as dependências

### NPM

```bash
npm i --save
```

### Yarn

```bash
yarn
```

- Crie um arquivo .env com base no arquivo .env.example
- Modifique o conteúdo da variável `VITE_GITHUB_TOKEN` para seu token gerado
- Inicie o projeto em modo de desenvolvimento

### NPM

```bash
npm start
```

### Yarn

```bash
yarn start
```

## Um pouco sobre o projeto

Além de usar a blibioteca [
[Apollo GrapQ](https://www.apollographql.com/docs/react/), foi usado a blibioteca [React Helmet](https://github.com/nfl/react-helmet#readme) para poder usar metatags como título e icone costumizados

### Design

Para o design concept foi usado o [Neo Brutalismo](https://blogs.perficient.com/2022/03/11/neo-brutalism-the-trendy-middle-child-of-web-design/)
, conceito adaptado de movimento artistico arquitetural pós segunda guerra que gira em torno da simpliciade, uso de cores fortes e objetos com demarcação

### Arquitetura

A arquitetura definida foi a de self component, onde cada componente é uma unidade atômica capaz de existir individualmente, assim cada um possuindo sua anatomia de estilo separado , todavia os componentes são livres para intercambear subcomponentes
