/**
 * ARQUIVO: index.ts
 * DESCRICAO: Exercício de introdução ao TypeScript
 * CONCEITOS: type, arrays tipados, funções com tipos, loops
 * AUTOR: Aula 19/02/2026
 */

// =============================================
// PASSO 4.1 - Definindo o tipo Produto
// =============================================
// O type define a estrutura que todo produto deve seguir
// Garante que todos os campos obrigatórios existam com os tipos corretos
type Produto = {
  id: number;          // Identificador único numérico
  nome: string;        // Nome do produto
  preco: number;       // Preço em reais
  categoria: string;   // Categoria do produto (ex: "Eletrônicos")
  emEstoque: boolean;  // Disponibilidade (true = disponível, false = indisponível)
};

// =============================================
// PASSO 4.2 - Criando o array de produtos
// =============================================
// Produto[] significa "array de objetos do tipo Produto"
// O TypeScript vai verificar se cada objeto respeita a estrutura definida acima
const produtos: Produto[] = [
  {
    id: 1,
    nome: "iPhone 15",
    preco: 5999.0,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
  {
    id: 2,
    nome: "Cabo HDMI",
    preco: 39.9,
    categoria: "Eletrônicos",
    emEstoque: false,
  },
  {
    id: 3,
    nome: "Tênis Running Pro",
    preco: 349.9,
    categoria: "Esportes",
    emEstoque: true,
  },
  {
    id: 4,
    nome: "Mochila Urbana",
    preco: 189.9,
    categoria: "Acessórios",
    emEstoque: false,
  },
  {
    id: 5,
    nome: "Fone Bluetooth",
    preco: 229.9,
    categoria: "Eletrônicos",
    emEstoque: true,
  },
];

// =============================================
// PASSO 4.3 - Função para exibir produto formatado
// =============================================
// A função recebe um objeto do tipo Produto e retorna uma string
// : Produto indica o tipo do parâmetro de entrada
// : string indica o tipo do retorno da função
function exibirProduto(produto: Produto): string {
  // Formata o preço no padrão brasileiro: R$ 5.999,00
  // toLocaleString converte número para string com formatação local
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",    // Formato de moeda
    currency: "BRL",      // Real brasileiro
  });

  // Operador ternário para definir o status baseado no campo booleano
  // Se emEstoque for true, mostra "disponível", senão mostra "indisponível"
  const status = produto.emEstoque ? "disponível" : "indisponível";

  // Template string (``) permite interpolar variáveis com ${}
  // Retorna a string formatada com todos os dados do produto
  return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} - ${status}`;
}

// =============================================
// PASSO 4.4 - Executando o programa
// =============================================
// Exibe cabeçalho no console
console.log("=== Catálogo de Produtos ===\n");

// Loop for...of para percorrer todos os produtos do array
// Para cada produto, chama a função exibirProduto e imprime o resultado
for (const produto of produtos) {
  console.log(exibirProduto(produto));
}

/**
 * SAÍDA ESPERADA NO TERMINAL:
 * 
 * === Catálogo de Produtos ===
 * 
 * [Eletrônicos] iPhone 15 - R$ 5.999,00 - disponível
 * [Eletrônicos] Cabo HDMI - R$ 39,90 - indisponível
 * [Esportes] Tênis Running Pro - R$ 349,90 - disponível
 * [Acessórios] Mochila Urbana - R$ 189,90 - indisponível
 * [Eletrônicos] Fone Bluetooth - R$ 229,90 - disponível
 */
