# 🧹 React Card Display Component

Um componente React reutilizável e animado para exibir conteúdo (links ou imagens) em um modal responsivo.

---

## ✨ Funcionalidades

* ✅ Exibe links ou imagens em um modal
* 🎮 Animações de entrada e saída usando Framer Motion
* 🚫 Bloqueia o scroll da página enquanto o modal estiver aberto
* ❌ Fecha ao clicar fora (overlay) ou pressionar `Escape`
* 🎯 Botão de fechar personalizável
* 🔗 Opção para abrir links em nova aba

---

## 📦 Instalação

```bash
npm install @matheuswvaz/react-card-display framer-motion react react-dom
# ou com yarn
yarn add @matheuswvaz/react-card-display framer-motion react react-dom
```

---

## 🧠 Uso

Para utilizar o `CardDisplay`, importe-o junto com `AnimatePresence` do `framer-motion` para que as animações de saída funcionem corretamente:

```jsx
import { CardDisplay } from '@matheuswvaz/react-card-display';
import { AnimatePresence } from 'framer-motion';
```

---

## 🔧 Propriedades

| Propriedade   | Tipo                       | Obrigatório | Descrição                                                                                                                                        |
| ------------- | -------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `isOpen`      | `boolean`                  | ✅ Sim       | Controla a visibilidade do modal. Defina como `true` para abrir e `false` para fechar.                                                           |
| `tipo`        | `'link'` ou `'imagem'`     | ✅ Sim       | Determina o tipo de conteúdo que será exibido no modal.                                                                                          |
| `url`         | `string`                   | ✅ Sim       | URL do link (se `tipo` for `link`) ou caminho da imagem (se `tipo` for `imagem`).                                                                |
| `texto`       | `string`                   | ❌ Não       | Texto opcional para exibição no modal. Se omitido, usa "Visualizar Link" ou "Visualizar Imagem" por padrão.                                      |
| `aoFechar`    | `function`                 | ✅ Sim       | Função callback chamada ao fechar o modal (clicar no overlay, botão X ou pressionar `Escape`).                                                   |
| `ClickOrigin` | `{ x: number, y: number }` | ❌ Não       | Coordenadas do clique que originou o modal. Permite que a animação de entrada parta desse ponto. Se não fornecido, a animação será centralizada. |

---

## 🪪 Licença

MIT © 2025 [Matheus William Vaz](https://github.com/matheuswvaz)
