import { KEYS } from '../constants/gameConstants'

function Keyboard({ onKey }) {
  return (
    <div className="flex flex-col gap-2 items-center mt-8">
      {KEYS.map((row, i) => (
        <div key={i} className="flex gap-2">
          {row.map((key) => (
            <button
              key={key}
              className={`rounded bg-gray-200 text-gray-800 font-semibold flex items-center justify-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition min-h-10 ${
                key === 'ENTER' || key === 'BACK' ? 'w-20' : 'w-10'
              }`}
              onClick={() => onKey(key)}
            >
              {key === 'BACK' ? <span>&#9003;</span> : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard 