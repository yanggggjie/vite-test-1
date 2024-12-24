import React from 'react'

interface TooltipProps {
  x: number
  y: number
  content: string
  visible: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, content, visible }) => {
  if (!visible) return null

  return (
    <div
      className="absolute bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg z-50"
      style={{ top: y, left: x }}
    >
      {content}
    </div>
  )
}

export default Tooltip
