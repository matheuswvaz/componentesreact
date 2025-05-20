# React Card Display Component

Um componente React reutilizável e animado para exibir conteúdo (links ou imagens) em um modal responsivo.

## Funcionalidades

* Exibe links ou imagens em um modal.
* Animações de entrada e saída usando Framer Motion.
* Controla o scroll do body da página quando aberto.
* Fechamento do modal ao clicar no overlay ou pressionar a tecla `Escape`.
* Botão de fechar personalizável.
* Opção para abrir links em nova aba.

## Instalação

```bash
npm install @seu-usuario-github/react-card-display framer-motion react react-dom
# ou com yarn
yarn add @seu-usuario-github/react-card-display framer-motion react react-dom
``` 

## Uso 

Para utilizar o CardDisplay, você precisará importá-lo junto com AnimatePresence do framer-motion, que é essencial para as animações de saída do modal.

## 
```
 ________________________________________________________________________________________________________________________________________________ 
|Propriedade___|_________Tipo_________|_Obrigatório_|_____________________________________Descrição______________________________________________|
|______________|______________________|_____________|____________________________________________________________________________________________|
|isOpen________|_______boolean________|____Sim______|Controla a visibilidade do modal. Defina como true para abrir e false para fechar.__________|
|______________|______________________|_____________|____________________________________________________________________________________________|
|tipo__________|___`'link \imagem'`___|____Sim______|____________________________________________________________________________________________|
|______________|______________________|_____________|____________________________________________________________________________________________|
|url___________|_______string_________|____Sim______|A URL específica para o link (se tipo for 'link') ou para a imagem (se tipo for 'imagem').__|
|______________|______________________|_____________|____________________________________________________________________________________________|
|texto_________|_______string_________|____Não______|Um texto opcional que será exibido como título ou descrição no modal. Se omitido, um texto  |
|______________|______________________|_____________|padrão ("Visualizar Link" ou "Visualizar Imagem") será utilizado.___________________________|
|______________|______________________|_____________|____________________________________________________________________________________________|
|aoFechar______|_____function_________|____sim______|Uma função de callback que será acionada sempre que o modal for solicitado a fechar (e.g.,  |
|______________|______________________|_____________|clique no overlay, no botão 'X' ou tecla Escape).___________________________________________|
|______________|______________________|_____________|____________________________________________________________________________________________|
clickOrigin____|_{x:number,y:number}__|____Não______|Um objeto contendo as coordenadas x e y (em pixels) do ponto onde o clique que abriu        |_______________|______________________|_____________|o modal ocorreu. Isso permite que a animação de entrada do modal comece a partir daquele    |_______________|______________________|_____________|ponto. Se não fornecido, a animação será centralizada.______________________________________|
```

## MIT License

Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

