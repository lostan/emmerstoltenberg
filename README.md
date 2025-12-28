# Emmer Stoltenberg Styling

Landing page para a consultoria de estilo masculina **Emmer Stoltenberg** em Oslo.
O projeto é um site estático (HTML/CSS) otimizado para performance e design responsivo premium.

🔗 **Link do projeto online:** [https://emmerstoltenberg-4196751-8e03e.web.app](https://emmerstoltenberg-4196751-8e03e.web.app)

## 🚀 Como fazer o Deploy

O projeto está hospedado no **Firebase Hosting**. Siga os passos abaixo para atualizar o site online.

### Pré-requisitos
Você precisa ter o **Node.js** instalado para usar o comando `npx`.

### Passo a Passo

1.  **Login no Firebase**
    Se é a primeira vez que você está fazendo deploy desta máquina (ou se seu login expirou), execute:
    ```bash
    npx firebase-tools login
    ```
    Isso abrirá uma janela no navegador para você autorizar o acesso com sua conta Google.

2.  **Fazer o Deploy**
    Para enviar as alterações locais para o servidor de produção, na pasta raiz do projeto, execute:
    ```bash
    npx firebase-tools deploy
    ```

    Após a conclusão, o terminal mostrará o link onde a nova versão está disponível.

## 🛠️ Desenvolvimento Local

Como este é um projeto estático simples, você pode visualizá-lo localmente de duas formas:

1.  Abrindo o arquivo `index.html` diretamente no seu navegador.
2.  (Recomendado) Usando uma extensão como "Live Server" no VS Code.

## 📁 Estrutura do Projeto

*   `index.html`: Estrutura e conteúdo da página.
*   `style.css`: Estilização (design system, layouts, responsividade).
*   `assets/`: Imagens e recursos visuais.
*   `firebase.json` & `.firebaserc`: Arquivos de configuração do Firebase.
