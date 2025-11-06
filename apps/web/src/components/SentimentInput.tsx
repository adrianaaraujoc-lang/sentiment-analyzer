interface Props {
  value: string
  onChange: (value: string) => void
  onAnalyze: () => void
}

export default function SentimentInput({ value, onChange, onAnalyze }: Props) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <textarea
        placeholder="Digite uma frase ou texto curto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '1rem',
          fontSize: '1rem',
          border: '2px solid #ddd',
          borderRadius: '8px',
          resize: 'vertical'
        }}
      />
      <button
        onClick={onAnalyze}
        disabled={!value.trim()}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          background: value.trim() ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: value.trim() ? 'pointer' : 'not-allowed',
          width: '100%'
        }}
      >
        Analisar Sentimento
      </button>
    </div>
  )
}