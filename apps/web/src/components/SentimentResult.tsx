interface Props {
  sentiment: 'Positivo' | 'Negativo' | 'Neutro'
}

const colors = {
  Positivo: '#28a745',
  Negativo: '#dc3545',
  Neutro: '#ffc107'
}

export default function SentimentResult({ sentiment }: Props) {
  return (
    <div style={{
      padding: '1.5rem',
      background: colors[sentiment],
      color: 'white',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      animation: 'fadeIn 0.5s ease-in'
    }}>
      {sentiment === 'Positivo' && 'Positivo'}
      {sentiment === 'Negativo' && 'Negativo'}
      {sentiment === 'Neutro' && 'Neutro'}
    </div>
  )
}