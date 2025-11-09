// src/sentiment-analyzer.ts

/**
 * Palavras-chave para classificação de sentimentos (em português).
 */
const POSITIVE_WORDS: string[] = [
    "bom", "ótimo", "excelente", "incrível", "maravilhoso", "feliz", "amo",
    "gostei", "perfeito", "fantástico", "recomendo", "sucesso"
];

const NEGATIVE_WORDS: string[] = [
    "ruim", "péssimo", "horrível", "triste", "odeio", "detestei",
    "terrível", "fraco", "desapontado", "problema", "lento", "caro"
];

/**
 * Tipos de sentimento que o analisador pode retornar.
 */
export type Sentiment = 'Positivo' | 'Negativo' | 'Neutro';

/**
 * Analisa o sentimento de um texto curto ou frase com base em regras de contagem de palavras.
 * @param text O texto a ser analisado.
 * @returns O sentimento classificado ('Positivo', 'Negativo' ou 'Neutro').
 */
export function analyzeSentiment(text: string): Sentiment {
    if (!text) return 'Neutro';

    // 1. Pré-processamento: Normalizar o texto para facilitar a correspondência
    const normalizedText = text.toLowerCase()
                               .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove pontuação
                               .trim();
    
    const words = normalizedText.split(/\s+/); // Divide o texto em palavras
    
    let positiveScore = 0;
    let negativeScore = 0;

    // 2. Contagem de Palavras
    for (const word of words) {
        if (POSITIVE_WORDS.includes(word)) {
            positiveScore++;
        } else if (NEGATIVE_WORDS.includes(word)) {
            negativeScore++;
        }
    }

    // 3. Classificação Baseada em Regras
    if (positiveScore > negativeScore) {
        return 'Positivo';
    } else if (negativeScore > positiveScore) {
        return 'Negativo';
    } else {
        // Se as contagens forem iguais (ou ambas zero)
        return 'Neutro';
    }
}

// Exemplo de teste (opcional, pode ser removido ao integrar com o app)
// console.log(`'Este produto é excelente!' -> ${analyzeSentiment('Este produto é excelente!')}`); // Positivo
// console.log(`'Entrega lenta e produto fraco.' -> ${analyzeSentiment('Entrega lenta e produto fraco.')}`); // Negativo
// console.log(`'A caixa é cinza.' -> ${analyzeSentiment('A caixa é cinza.')}`); // Neutro