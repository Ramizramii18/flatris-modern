import { useEffect, useState } from 'react'

const WIDTH = 10
const HEIGHT = 15

const emptyGrid = () =>
  Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0))

export default function App() {
  const [grid, setGrid] = useState(emptyGrid)
  const [pos, setPos] = useState({ x: 4, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setPos(p => ({ ...p, y: p.y + 1 }))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setGrid(() => {
      const newGrid = emptyGrid()
      if (pos.y < HEIGHT) newGrid[pos.y][pos.x] = 1
      return newGrid
    })
  }, [pos])

  return (
    <div className="container">
      <h1>Flatris (Modern)</h1>
      <div className="grid">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div key={`${i}-${j}`} className={cell ? 'cell active' : 'cell'} />
          ))
        )}
      </div>
    </div>
  )
}
