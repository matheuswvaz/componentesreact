# ✨ AnimatedTitle

Componente React reutilizável que aplica animações suaves de entrada com blur e fade para títulos ou textos.

---

## 📦 Instalação

```bash
npm install @matheuswvaz/animated-title framer-motion react
```

---

## 🚀 Uso básico

```jsx
import { AnimatedTitle } from '@matheuswvaz/animated-title';

<AnimatedTitle>Olá, mundo!</AnimatedTitle>
```

---

## ⚙️ Props

| Propriedade | Tipo                        | Default    | Descrição                             |
| ----------- | --------------------------- | ---------- | ------------------------------------- |
| `children`  | `node`                      | —          | Conteúdo do título                    |
| `delay`     | `number`                    | `0.5`      | Atraso da animação                    |
| `duration`  | `number`                    | `0.3`      | Duração da animação                   |
| `fontSize`  | `string`                    | `"2.5rem"` | Tamanho da fonte                      |
| `color`     | `string`                    | `"#fff"`   | Cor do texto                          |
| `weight`    | `number` ou `string`        | `600`      | Peso da fonte                         |
| `spacing`   | `string`                    | `"normal"` | Espaçamento entre letras              |
| `blurStart` | `number`                    | `50`       | Valor inicial do desfoque             |
| `as`        | `string`                    | `"h2"`     | Elemento HTML (ex: `h1`, `p`, `span`) |
| `align`     | `"left"\|"center"\|"right"` | `"center"` | Alinhamento do texto                  |

---

## 📜 Licença

MIT © [Matheus William Vaz](https://github.com/matheuswvaz)
