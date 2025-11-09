// src/main.ts

import './style.css';
import { analyzeSentiment, type Sentiment } from './sentiment-analyzer.ts';

/**
 * Mapeia o sentimento para a classe CSS correspondente.
 * @param sentiment O sentimento classificado.
 * @returns A classe CSS.
 */
function getSentimentClass(sentiment: Sentiment): string {
  switch (sentiment) {
    case 'Positivo':
      return 'positive';
    case 'Negativo':
      return 'negative';
    case 'Neutro':
    default:
      return 'neutral';
  }
}

function setupSentimentApp() {
  // 1. Obter elementos da DOM
  const textInput = document.getElementById('text-input') as HTMLTextAreaElement | null;
  const analyzeButton = document.getElementById('analyze-button') as HTMLButtonElement | null;
  const resultElement = document.getElementById('sentiment-result') as HTMLParagraphElement | null;

  // 2. Adicionar o listener de evento
  analyzeButton?.addEventListener('click', () => {
    if (textInput && resultElement) {
      const text = textInput.value;
      
      // 3. Chamar a função de análise
      const sentiment = analyzeSentiment(text);

      // 4. Atualizar o resultado na tela
      resultElement.textContent = sentiment;
      
      // 5. Aplicar a classe de estilo
      resultElement.className = getSentimentClass(sentiment);
    }
  });
}

// Inicializa a aplicação quando a DOM estiver pronta
document.addEventListener('DOMContentLoaded', setupSentimentApp);