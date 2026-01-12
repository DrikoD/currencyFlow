# 💱 CurrencyFlow

CurrencyFlow é um projeto didático de conversão de moedas desenvolvido em JavaScript puro, com foco no aprendizado profundo de lógica, controle de estado, programação defensiva e organização arquitetural de código.

Mais do que um simples conversor funcional, o CurrencyFlow foi construído como um exercício consciente de pensamento em software, onde cada decisão técnica teve como objetivo entender o porquê das coisas — não apenas fazê-las funcionar.

---

## 🎯 Objetivo do Projeto

O objetivo do CurrencyFlow é consolidar fundamentos essenciais do desenvolvimento frontend, trabalhando de forma intencional conceitos como:

- Manipulação do DOM
- Gerenciamento e validação de estado
- Separação clara de responsabilidades
- Escrita de código previsível e defensiva
- Evolução gradual e consciente de arquitetura

O projeto prioriza entendimento real, clareza e leitura de código, acima de atalhos ou abstrações prematuras.

---

## 🧩 Etapas do Projeto

O CurrencyFlow foi pensado como um projeto evolutivo, dividido em etapas claras, onde cada fase representa um avanço específico no modo de pensar e estruturar código.

### 🟢 Etapa 1 — Construção Inicial (Didática)

Objetivo da etapa:

- Entender o fluxo completo de dados
- Trabalhar diretamente com eventos e inputs
- Observar o comportamento do código em tempo real
- Criar um conversor funcional sem preocupação arquitetural

Características:

- Lógica concentrada
- Escrita direta no DOM
- Validações simples
- Código mais acoplado

Nesta fase, a prioridade foi aprender como as coisas funcionam, não como organizá-las.

---

### 🟡 Etapa 2 — Refatoração e Arquitetura

Objetivo da etapa:

- Separar responsabilidades
- Tornar o código previsível
- Introduzir controle de estado consciente
- Reduzir efeitos colaterais

Características:

- Separação entre interface, estado, lógica e serviços
- Introdução de estado global controlado
- Criação de funções puras
- Validação centralizada
- Programação defensiva
- Uso de optional chaining para evitar erros silenciosos

Aqui o projeto deixa de ser apenas funcional e passa a ser arquitetado.

---

### 🔵 Etapa 3 — Integração com API

Objetivo da etapa:

- Trabalhar com dados externos reais
- Normalizar dados recebidos
- Tratar falhas de rede e estados inválidos
- Preparar o projeto para uso real

Características:

- Consumo de API de câmbio
- Normalização das taxas
- Controle de estados de carregamento e erro
- Integração entre dados externos e lógica interna

Essa etapa fecha o ciclo do projeto, conectando base sólida com o mundo real.

---

## ⚙️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

Sem uso de frameworks, para garantir domínio real dos fundamentos.

---

## 📁 Estrutura do Projeto

/
├─ state/
│  ├─ globalState.js
│  └─ ratesState.js
│
├─ core.js
├─ ratesService.js
├─ domHandlers.js
└─ index.html

---

## 🧱 Responsabilidade dos Arquivos

state/globalState.js  
Responsável por armazenar e centralizar o estado principal da aplicação, como moedas selecionadas, valores e resultado da conversão.

state/ratesState.js  
Responsável por armazenar o estado relacionado às taxas de câmbio, incluindo status de carregamento e dados normalizados.

ratesService.js  
Responsável por buscar os dados da API externa, validar a resposta e normalizar as taxas para o formato utilizado pelo sistema.

core.js  
Responsável pelas regras de negócio, validação de estado, conversão de valores e controle do fluxo da aplicação.

domHandlers.js  
Responsável por escutar eventos da interface e atualizar o estado com base nas interações do usuário.

index.html  
Estrutura base da interface do projeto.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório
2. Abra o arquivo index.html em qualquer navegador moderno
3. Utilize o conversor diretamente na interface

Não é necessário instalar dependências.

---

## 🧠 Aprendizados Envolvidos

- Lógica de conversão
- Programação defensiva
- Funções puras
- Parâmetros e responsabilidades
- Controle e validação de estado
- Separação de camadas
- Refatoração consciente
- Evolução arquitetural gradual
- Leitura e escrita de código com intenção

---

## 📌 Observação Final

O CurrencyFlow não foi criado para impressionar pela complexidade, mas para construir base técnica sólida.

Cada parte do código existe por um motivo claro, e cada etapa representou um avanço real no entendimento do desenvolvimento frontend.

---

## 👤 Autor

Adriel Ferreira  
Estudante de Desenvolvimento Full Stack  
Projeto criado com foco em aprendizado consistente e evolução contínua.
