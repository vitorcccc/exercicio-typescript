# CATÁLOGO DE PRODUTOS - INTRODUÇÃO AO TYPESCRIPT

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Console Application](https://img.shields.io/badge/Console_Application-FF8800?style=for-the-badge&logo=windows-terminal&logoColor=white)

## INTEGRANTES DO GRUPO

| Nome | RM |
|------|-----|
| **Vitor Couto Victorino** | 554965

---

## SOBRE O PROJETO

Este é um **exercício de introdução ao TypeScript** desenvolvido durante a aula do dia 19/02/2026. O projeto consiste em um catálogo simples de produtos que demonstra os conceitos fundamentais da linguagem TypeScript, incluindo tipagem estática, arrays tipados e funções com parâmetros e retornos tipados.

### Funcionalidades Implementadas

- Definição de tipos personalizados com `type`
- Criação de array fortemente tipado
- Função com parâmetro tipado e retorno tipado
- Formatação de valores monetários no padrão brasileiro (R$)
- Loop para percorrer e exibir todos os produtos
- Operador ternário para status baseado em booleano
- Template strings para formatação de saída

---

## 🧠 CONCEITOS DE TYPESCRIPT UTILIZADOS

Este exercício foi desenvolvido aplicando os conceitos fundamentais de TypeScript:

| Conceito | Descrição | Exemplo no Código |
|----------|-----------|-------------------|
| **Type Aliases** | Definição de tipos personalizados | `type Produto = { id: number; nome: string; ... }` |
| **Arrays Tipados** | Garantia que todos os elementos seguem o tipo | `const produtos: Produto[] = [...]` |
| **Tipagem de Parâmetros** | Parâmetros com tipo definido | `function exibirProduto(produto: Produto)` |
| **Tipagem de Retorno** | Funções com tipo de retorno explícito | `function exibirProduto(...): string` |
| **Propriedades opcionais** | Campos que podem ou não existir | (Conceito mencionado, embora não usado neste exercício) |
| **Template Strings** | Interpolação de variáveis em strings | `` return `[${produto.categoria}] ...` `` |
| **Métodos de Formatação** | toLocaleString para formatar números | `produto.preco.toLocaleString("pt-BR", {...})` |
| **Operador Ternário** | Condicional em uma linha | `produto.emEstoque ? "disponível" : "indisponível"` |
| **Loop for...of** | Iteração sobre elementos do array | `for (const produto of produtos) {...}` |

---

## ESTRUTURA DO PROJETO

```text
typescript-produtos/
│
├── index.ts                 # Código fonte TypeScript
├── index.js                 # Código compilado JavaScript
├── tsconfig.json            # Configurações do compilador TypeScript
└── README.md                # Documentação
```

## CONFIGURAÇÃO DO TYPESCRIPT (tsconfig.json)

O projeto inclui um arquivo `tsconfig.json` com as seguintes configurações:

```json
{
  "compilerOptions": {
    "target": "ES6",              // Gera JavaScript ES6
    "strict": true,                // Ativa verificações rigorosas
    "outDir": "./dist",            // Pasta de saída dos arquivos .js
    "rootDir": "./",               // Diretório raiz dos fontes
    "module": "commonjs",          // Sistema de módulos
    "esModuleInterop": true,       // Compatibilidade com módulos CommonJS
    "skipLibCheck": true,          // Ignora checagem em arquivos .d.ts
    "forceConsistentCasingInFileNames": true
  },
  "include": ["*.ts"],             // Inclui todos os arquivos .ts
  "exclude": ["node_modules", "dist"]
}
```

---

## COMO EXECUTAR O PROJETO

### Pré-requisitos
- [Node.js](https://nodejs.org/) (18.x ou superior)
- [TypeScript](https://www.typescriptlang.org/) (instalado globalmente ou via npx)
- Visual Studio Code / Qualquer editor de código
- Terminal ou Prompt de Comando

### Passos para executar

1. **Clone o repositório**
```bash
git clone https://github.com/isadorameneghetti/exercicio-typescript
```

2. **Acesse a pasta do projeto**
```bash
cd typescript-produtos
```

3. **Instale o TypeScript (caso não tenha)**
```bash
npm install -g typescript
# ou
npm install typescript --save-dev
```

4. **Compile o projeto**
```bash
tsc
# ou
npx tsc
```

5. **Execute o programa**
```bash
node index.js
# ou se configurou outDir:
node dist/index.js
```

## EXEMPLO DE EXECUÇÃO

```text
=== Catálogo de Produtos ===

[Eletrônicos] iPhone 15 - R$ 5.999,00 - disponível
[Eletrônicos] Cabo HDMI - R$ 39,90 - indisponível
[Esportes] Tênis Running Pro - R$ 349,90 - disponível
[Acessórios] Mochila Urbana - R$ 189,90 - indisponível
[Eletrônicos] Fone Bluetooth - R$ 229,90 - disponível
```

## DETALHAMENTO DO CÓDIGO

### Definição do tipo Produto
```typescript
type Produto = {
  id: number;          // Identificador único
  nome: string;        // Nome do produto
  preco: number;       // Preço em reais
  categoria: string;   // Categoria (ex: "Eletrônicos")
  emEstoque: boolean;  // Disponibilidade
};
```

### Função de exibição formatada
```typescript
function exibirProduto(produto: Produto): string {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const status = produto.emEstoque ? "disponível" : "indisponível";

  return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} - ${status}`;
}
```

### Loop principal
```typescript
for (const produto of produtos) {
  console.log(exibirProduto(produto));
}
```

## BENEFÍCIOS DO TYPESCRIPT DEMONSTRADOS

| Benefício | Exemplo no Código |
|-----------|-------------------|
| **Autocompletar** | Ao digitar `produto.` o editor sugere `id`, `nome`, `preco`, etc. |
| **Prevenção de erros** | Se tentar acessar `produto.peso`, o TypeScript aponta erro |
| **Documentação embutida** | O tipo define exatamente o que um produto deve ter |
| **Refatoração segura** | Alterar o tipo Produto atualiza todos os usos |
| **Intenção clara** | `function exibirProduto(produto: Produto): string` é auto-documentável |
