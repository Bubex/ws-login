# WS Login

Este projeto é um backend para uma aplicação de serviço de login via WebSocket. Ele é implementado em Node.js e implantado em um cluster Kubernetes usando AWS EKS.

## Funcionalidades

- **Autenticação via WebSocket**: Permite que os usuários façam login usando o protocolo WebSocket.
- **Escalabilidade**: Implantado em Kubernetes para suportar escalabilidade horizontal.
- **CI/CD Automatizado**: Utiliza GitHub Actions para build, teste e deploy automáticos.

## Pré-requisitos

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/): Versão 16 ou superior
- [Docker](https://www.docker.com/): Para criação de imagens Docker
- [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/): Para interagir com o cluster Kubernetes
- [AWS CLI](https://aws.amazon.com/cli/): Para interagir com os serviços da AWS
- [Eksctl](https://eksctl.io/): Para gerenciar o cluster EKS

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/Bubex/ws-login
    cd ws-login
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

### Variáveis de Ambiente

Configure as seguintes variáveis de ambiente:

- `DOCKER_HUB_USERNAME`: Seu nome de usuário no Docker Hub.
- `DOCKER_HUB_PASSWORD`: Sua senha ou token de acesso no Docker Hub.
- `AWS_ACCESS_KEY_ID`: Seu Access Key ID da AWS.
- `AWS_SECRET_ACCESS_KEY`: Sua Secret Access Key da AWS.
- `KUBECONFIG`: Configuração do KUBECONFIG para acessar o cluster Kubernetes.

As variáveis de ambiente podem ser configuradas localmente usando um arquivo `.env` ou diretamente nas configurações do GitHub Actions.

### Criando Imagem Docker

Para criar a imagem Docker localmente:

```bash
docker build -t <nome_da_imagem> .
```

### Executando Localmente

Para executar o servidor localmente:

```bash
npm start
```

O servidor WebSocket estará disponível na porta 8080.

## Deploy

O projeto está configurado para ser implantado automaticamente em um cluster Kubernetes usando GitHub Actions. O pipeline de CI/CD é configurado para:

1. Realizar o build e teste da aplicação.
2. Criar e enviar a imagem Docker para o Docker Hub.
3. Implantar a aplicação no Kubernetes.

### Acesso à Aplicação

Após o deploy, a aplicação estará disponível através do Load Balancer provisionado pelo Kubernetes. Você pode obter o endereço com:

```bash
kubectl get svc
```

Acesse a aplicação via WebSocket usando:

```bash
ws://<external-ip>:8080
```

## Monitoramento e Logs

Para verificar os logs dos pods:

```bash
kubectl logs <nome-do-pod>
```

## Testes

Para rodar os testes unitários:

```bash
npm test
```