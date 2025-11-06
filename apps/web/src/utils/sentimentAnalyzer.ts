const positiveWords = [
  'bom', 'ótimo', 'excelente', 'maravilhoso', 'feliz', 'alegre',
  'gostei', 'adorei', 'perfeito', 'incrível', 'fantástico', 'legal',
  'bem', 'melhor', 'ótima', 'genial', 'espetacular', 'sensacional'
]

const negativeWords = [
  'ruim', 'péssimo', 'horrível', 'triste', 'chato', 'odiei',
  'terrível', 'fraco', 'decepcionante', 'medíocre', 'pior',
  'detestei', 'infeliz', 'desastroso', 'fracasso', 'insuportável'
]

export function analyzeSentiment(text: string): 'Positivo' | 'Negativo' | 'Neutro' {
  const normalized = text.toLowerCase().replace(/[.,!?]/g, '')

  let positiveCount = 0
  let negativeCount = 0

  positiveWords.forEach(word => {
    if (normalized.includes(word)) positiveCount++
  })

  negativeWords.forEach(word => {
    if (normalized.includes(word)) negativeCount++
  })

  if (positiveCount > negativeCount) return 'Positivo'
  if (negativeCount > positiveCount) return 'Negativo'
  return 'Neutro'
}