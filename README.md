# Quiz Interativo

Projeto de quiz simples e responsivo em HTML, CSS e JavaScript puro.

## Funcionalidades

- Tela inicial com de boas-vindas e botão *Iniciar*.
- Apresentação sequencial de perguntas com 4 alternativas cada.
- Indicação visual de alternativa correta e incorreta após seleção.
- Contagem de acertos.
- Botão *Próxima* após perguntas.
- Botão para *reiniciar* o quiz após finalização.
- Layout responsivo e estilizado com CSS.

## Tecnologias usadas

- HTML5 — marcação da aplicação (index.html).
- CSS3 — estilos e responsividade (style.css).
- JavaScript (Vanilla) — lógica do quiz e manipulação do DOM (script.js).

## Como funciona:

- Perguntas declaradas no arquivo script.js em um array questions, cada um dos itens com *question* e *answers* (cada answer possui id, text, correct).
- O quiz exibe a pergunta atual e cria botões com alternativas em cada tela.
- Quando o usuário clica numa alternativa o botão muda para *correct* ou *incorrect*.
- Não é possível seleção múltipla.
- O botão correto é destacado.
- Se a resposta estiver correta, a variável *score* é atualizada.
- O botão *Próxima* avança até o final. 
- Ao finalizar, a pontuação e a opção de reiniciar são exibidas.
