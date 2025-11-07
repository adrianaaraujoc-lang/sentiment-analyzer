import React, { useState, useMemo } from 'react';

// --- Dados de Regras (Base de Conhecimento) ---
// Em um ambiente real, esta lista viria de um pacote compartilhado ou API.
const POSITIVE_WORDS = ['ótimo', 'excelente', 'bom', 'maravilhoso', 'perfeito', 'incrível', 'feliz', 'amo', 'gostei', 'top', 'sucesso', 'alegria', 'fantástico'];
const NEGATIVE_WORDS = ['péssimo', 'ruim', 'terrível', 'odeio', 'triste', 'decepcionante', 'lento', 'bug', 'erro', 'fracasso', 'nunca', 'horrível', 'odeia'];

// Função para análise de sentimento baseada em regras
const analyzeSentiment = (text: string): 'Positivo' | 'Negativo' | 'Neutro' => {
  if (!text) return 'Neutro';

  const lowerCaseText = text.toLowerCase();
  // Regex para dividir o texto em palavras (simples)
  const words = lowerCaseText.match(/\b\w+\b/g) || [];

  let positiveScore = 0;
  let negativeScore = 0;

  words.forEach(word => {
    if (POSITIVE_WORDS.includes(word)) {
      positiveScore++;
    } else if (NEGATIVE_WORDS.includes(word)) {
      negativeScore++;
    }
  });

  const difference = positiveScore - negativeScore;

  if (difference > 0) {
    return 'Positivo';
  } else if (difference < 0) {
    return 'Negativo';
  } else {
    // Se a diferença for zero, mas houver algum score, ainda é neutro
    // a menos que queiramos um threshold mais alto
    return 'Neutro';
  }
};

// Componente principal
const App: React.FC = () => {
  const [text, setText] = useState('');

  const sentiment = useMemo(() => analyzeSentiment(text), [text]);

  const getColor = (sentiment: 'Positivo' | 'Negativo' | 'Neutro'): string => {
    switch (sentiment) {
      case 'Positivo':
        return 'text-green-600 bg-green-100 border-green-300';
      case 'Negativo':
        return 'text-red-600 bg-red-100 border-red-300';
      case 'Neutro':
      default:
        return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getEmoji = (sentiment: 'Positivo' | 'Negativo' | 'Neutro'): string => {
    switch (sentiment) {
      case 'Positivo':
        return '😄';
      case 'Negativo':
        return '😔';
      case 'Neutro':
      default:
        return '😐';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-[Inter]">
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Tailwind configuration for custom font/colors */}
      {/* CORREÇÃO: Usar dangerouslySetInnerHTML para injetar a configuração do Tailwind como uma string,
          evitando que o parser JSX tente interpretá-la como sintaxe JavaScript */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                  },
                },
              },
            };
          `,
        }}
      />

      <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-8 space-y-6 transform hover:scale-[1.01] transition duration-300">
        <h1 className="text-3xl font-extrabold text-gray-800 border-b pb-3 mb-4 flex items-center">
          Analisador de Sentimentos (Regras)
        </h1>
        
        <p className="text-sm text-gray-500">
          Digite uma frase ou texto curto para classificá-lo como Positivo, Negativo ou Neutro. Baseado em listas de palavras-chave.
          <br/>
          (Pronto para evoluir para Web Neural Network API no futuro!)
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex: 'Este produto é excelente e maravilhoso, mas a entrega foi lenta.'"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition duration-150 shadow-inner text-gray-700"
        />

        <div className="pt-4 border-t border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Resultado da Análise:</h2>
          <div className={`p-4 border-l-4 rounded-lg flex items-center justify-between transition duration-300 ${getColor(sentiment)}`}>
            <span className="text-2xl font-bold">
              {getEmoji(sentiment)} {sentiment}
            </span>
            <span className="text-sm font-medium">
              {text.length > 0 ? `Score: ${POSITIVE_WORDS.filter(w => text.toLowerCase().includes(w)).length - NEGATIVE_WORDS.filter(w => text.toLowerCase().includes(w)).length}` : 'Digite algo...'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;