# Micro-Aplicações & Micro-Frontend

- Teste de aplicação micro-frontend e micro-aplicações;
- Micro-frontend: geralmente são componentes compartilhados;
- Micro-aplicações: são aplicações mais complexas que envolvem até rotas;
- Testando versões diferentes de libs como: `react-router-dom` e `tailwindcss` entre as aplicações.


## Aplicações

### MFE 
- Aplicação que exporta componente de `Button` e aplicação que exporta as rotas (`Router`);
- Button: `src/components/Button/web-component.ts`;
- Router: `src/routes/web-component.ts`.

### Shell 
- Projeto principal;
- Projeto "casca", onde importamos outras aplicações. 


## Utils

#### web-component-base
- Classe utilizada para facilitar a implementação de web-component;
- Recomenda-se o uso de [shadow-dom](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM).


##### Exemplos (sem estilização)

- Sem propriedades.

```tsx
function Button() {
   return <button>Button</button>
}

class Component extends WebComponentBase {
  shadow = this.attachShadow({ mode: "open" });

  render() {
    const root = createRoot(this.shadow);
    root.render(<Button />);
  }
}
```

- Com propriedades.

```tsx
type ButtonProps = {
   text?: string,
}

function Button({ text }: ButtonProps) {
   return <button>{text}</button>
}

class Component extends WebComponentBase<ButtonProps> {
  shadow = this.attachShadow({ mode: "open" });

   attributesSchema?: PropSchema<ButtonProps>[] = [
    {
      name: "text",
      type: "string",
      required: false,
      defaultValue: "Empty Text Value",
    },
  ];

  render() {
    const root = createRoot(this.shadow);
    const props = this.getProps();

    root.render(<Button text={props.text} />);
  }
}
```

##### Exemplos (com estilização)
- Existem várias formas de estilização.

```css
.button {
   background-color: #FF4444;
   color: #FFFF;
   border: 0;
}
```

```tsx
import css from './styles.css?inline';

function Button() {
   return (
      <>
         <style mfe-button>{css}</style>

         <button class="button">
            Button
         </button>
      </>
   )
}

class Component extends WebComponentBase {
   shadow = this.attachShadow({ mode: "open" });

   //1a opção:
   css = css 

   //2a opção:
   css = '.button { background-color: red; }'

   //3a opção
   styles = ["style[mfe-button]"];

   render() {
      const root = createRoot(this.shadow);
      root.render(<Button />);
   }
}
```

_Observação: Depois de criado nós precisamos configurar o `vite-config` para exportar esse arquivo na hora do build_

```ts
const port = 5002

export default defineConfig({
   //... sua configuração
   preview: {
      port,
   },
   build: {
      target: "esnext",
      cssCodeSplit: false,
      rollupOptions: {
      input: {
         "mfe-button": "./src/components/Button/web-component.tsx",
      },
      output: {
         entryFileNames: `assets/[name].js`,
         chunkFileNames: `assets/[name].js`,
         assetFileNames: `assets/[name].[ext]`,
      },
      },
   },
});

```
- Após esse ajuste no arquivo de configuração do Vite, agora só escrever os seguintes comandos no terminal:

> npm run build && npm run preview 

- Vai ser criado em sua pasta raiz os arquivos adicionados na seção de `input` do arquivo de configuração do Vite.

#### define-web-transformer
- Onde definimos o componente `React` para web-component.

Exemplo: 

```ts
// Component foi criado na seção anterior 
defineWebComponent("mfe-button", Component);
```

#### load-web-component
- Função utilizada para carregar um componente para ser utilizado em outra aplicação;
- Vamos utilizar o exemplo do componente criado na seção do `web-component-base`.

Exemplo

```tsx
type ButtonProps = {
   text?: string
}

const tagName = "mfe-button"; //tag definida no defineWebComponent
const path = `${tagName}.js`; // nome do arquivo gerado no build do vite.config.ts
const port = 5002
const src = `http://localhost:${port}/assets/${path}`;

export const Button = loadWebComponent<ButtonProps>({
  src,
  tagName,
  type: "module", //caso utilize importações
});

function MainApplication() {
   return(
      <section>
         <Button text="Click here" />
      </section>
   )
}
```