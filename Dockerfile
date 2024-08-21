# Use a imagem oficial do Node.js como base
FROM node:20-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Exponha a porta do WebSocket
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "start"]
