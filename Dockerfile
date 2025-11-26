# syntax=docker/dockerfile:1

#Ùltima versão do node
FROM node:latest  

WORKDIR /api-rep-docker

# ' . . ' = tudo que tem dentro da pasta raiz(onde esta o dockerfile),
#copia para pasta do WORKDIR (api-rep-docker)
COPY . . 

#Apaga o node_module   
RUN rm -rf node_modules

#Cria o node_modules
RUN npm i

##Rodar nossa imagem = Executa o caminho config no start no package-json
CMD ["npm", "start"]

#Expôe meu projeto na porta 5002 após start-lo 
EXPOSE 5502