import { WORD_LENGTH } from '../constants/gameConstants'

function Squares({ chars, status }) {
  return (
    <div className="flex gap-8 my-10">
      {Array.from({ length: WORD_LENGTH }).map((_, i) => (
        <div
          key={i}
          className={`w-12 h-12 flex items-center justify-center text-3xl bg-white text-gray-900 box-border border-2 ${
            status === 'success'
              ? 'border-green-500'
              : status === 'error'
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
        >
          {chars[i] || ''}
        </div>
      ))}
    </div>
  )
}

export default Squares 