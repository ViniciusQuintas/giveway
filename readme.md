# Sorteador
Este exemplo de projeto foi inspirado em uma playlist sobre Clean Architecture do canal [Otávio Lemos](https://www.youtube.com/@otaviolemos). O projeto é uma aplicação simples que implementa a Clean Architecture em TypeScript. A aplicação consiste em um sistema que seleciona aleatoriamente participantes de um sorteio a partir de uma lista carregada de um arquivo CSV. O objetivo é desse projeto é colocar em prática a Clean Architecture e entender como ela pode ser aplicada em um projeto de software para facilitar a manutenção e a escalabilidade.

# Funcionalidades
- **Leitura de Participantes:** Os participantes são lidos de um arquivo CSV utilizando o repositório CsvParticipantRepository.
- **Adição de Participantes ao Sorteio:** A classe AddParticipantToGiveway adiciona todos os participantes ao sorteio.
- **Sorteio de Vencedores:** A classe DrawWinnersFromGiveaway permite a seleção aleatória de vencedores a partir dos participantes cadastrados.

# Tecnologias Utilizadas
- Node.js
- TypeScript
- Clean Architecture

# Como Executar o Projeto

Clone o repositório:
```
    git clone https://github.com/ViniciusQuintas/giveway
    cd giveway
```

Instale as dependências:
```
    npm install
```

Crie um arquivo **participants.csv** no diretório raiz com a seguinte estrutura:
```
    name,email
    Nome1,email1@example.com
    Nome2,email2@example.com
```
Execute a aplicação:
```
    npm start
```

<br />

Os participantes sorteados serão armazenados no arquivo **winners.txt**, que será gerado após a execução do projeto.
