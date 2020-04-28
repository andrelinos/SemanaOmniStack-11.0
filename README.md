# SemanaOmniStack-11.0

## Descrição
Esta aplicação desenvolvida com base em uma ideia que o Diego teve para uma ONG que cuida de animais feridos. No qual as ONGS podem cadastrar os casos e assim disponibilizar para que usuários da aplicação possam assumir os casos por estarem custeando o tratamento, como uma cirugia relacionado a um caso (incidente) específico. 

### Rotas
**Backend**: http://localhost:3333 (ou ip da sua máquina local no lugar do localhost)

**Frontend**: http://localhost:3000 (ou ip da sua máquina local no lugar do localhost

**Mobile**: http://locahost:8081 (ou http://10.0.2.2:3333 { emulador Android } | ou ip da sua máquina local para dispositivo físico | ou seguir os passos da tela do expo caso vá usar o expo no projeto)

**Nota**: Em alguns casos, pode precisar rodar o comando no terminal para funcionar todas as rotas corretamente para emulador Android. 
```bash
adb reverse tcp:3333 tcp:3333
```

## Para clonar o projeto, basta seguir os passos:
1. Crie uma pasta qualquer em teu computador 
2. Dê um git clone nesta como abaixo:
```bash 
git clone git@github.com:andrelinos/SemanaOmniStack-11.0.git
```
3. Execute o yarn ou npm dentro de cada uma das pastas (backend, frontend, mobile)
```bash
yarn
```
Ou 
```bash 
npm install
```


### Executando o backend
- Após para deixe o backend UP: Entre dentro da pasta do backend e execute o comando baixo:
```bash
yarn dev
```
- Com o backend rodando, você pode testar o frontend ou o mobile. 


### Executando o frontend
- Entre na pasta do frontend.
- Execute o comando abaixo: 
```bash
yarn start
```
- Para acessar o frontend, basta acessar a rota especificada acima. 

### Executando o mobile com expo
- Entre na pasta do frontend.
- Execute o comando abaixo: 
```bash
yarn start
```
- Basta seguir os passos da tela do expo
