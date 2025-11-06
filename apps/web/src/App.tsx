import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SentimentInput from './components/SentimentInput'
import SentimentResult from './components/SentimentResult'
import { analyzeSentiment } from './utils/sentimentAnalyzer'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<'Positivo' | 'Negativo' | 'Neutro' | null>(null)

  const handleAnalyze = () => {
    const sentiment = analyzeSentiment(text)
    setResult(sentiment)
  }

  return (
    <>
      <Header />
      <main style={{ flex: 1, padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Analisador de Sentimentos
        </h1>
        <SentimentInput
          value={text}
          onChange={setText}
          onAnalyze={handleAnalyze}
        />
        {result && <SentimentResult sentiment={result} />}
      </main>
      <Footer />
    </>
  )
}

export default App