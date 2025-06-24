# Landing Page - Angular
Projeto desenvolvido com Angular v20.19.3

## Recursos

Este projeto foi desenvolvido com base em práticas recomendadas para a criação de landing pages utilizando Angular:

- [Criando Landing Page do Zero com Angular 17](https://www.youtube.com/watch?v=O26fDEnAukY)

## Tecnologias utilizadas e requisitos:
- Angular 20.19.3
- Node.js 20.19.3
- npm 10.8.2
- SCSS
- Typescript

## Instalação

Instale as dependências:
```bash 
npm install 
```

Execute o servidor de desenvolvimento:
ng serve

Acesse a aplicação no navegador:
http://localhost:4200

Estrutura do Projeto:

src/
├── index.html                      # Arquivo HTML principal
├── main.ts                         # Ponto de entrada da aplicação
├── main.server.ts                  # Renderização do lado servidor (SSR)
├── server.ts                       # Servidor Angular Universal
├── app/
│   ├── app.ts                      # Componente principal da aplicação
│   ├── app.routes.ts               # Configurações de rotas
│   ├── app.config.ts               # Configurações gerais da aplicação
│   ├── color-variables.scss        # Variáveis globais de estilo (cores)
│   ├── components/                 # Componentes reutilizáveis da aplicação
│   │   ├── btn-primary/            # Botão estilizado reutilizável
│   │   │   ├── btn-primary.html
│   │   │   ├── btn-primary.scss
│   │   │   ├── btn-primary.spec.ts
│   │   │   └── btn-primary.ts
│   │   ├── header/                 # Cabeçalho da página
│   │   │   ├── header.html
│   │   │   ├── header.scss
│   │   │   ├── header.spec.ts
│   │   │   └── header.ts
│   │   ├── home/                   # Conteúdo principal da landing page
│   │   │   ├── home.html
│   │   │   ├── home.scss
│   │   │   ├── home.spec.ts
│   │   │   └── home.ts
│   │   ├── newsletter-form/        # Formulário para inscrição na newsletter
│   │   │   ├── newsletter-form.html
│   │   │   ├── newsletter-form.scss
│   │   │   ├── newsletter-form.spec.ts
│   │   │   └── newsletter-form.ts
│   │   └── services/           # Serviços da aplicação (ex: integração com backend)
│   │       ├── newsletter.service.ts
│   │       └── newsletter.service.spec.ts


Componentes
btn-primary: botão estilizado reutilizável
header: cabeçalho da página
home: conteúdo principal da landing page
newsletter-form: formulário para inscrição na newsletter
newsletter.service: serviço para integração com backend