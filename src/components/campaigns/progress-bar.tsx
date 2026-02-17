"use client"

import { useEffect, useState } from "react"
import { getProgressColor } from "@/lib/mock-data"

export function ProgressBar({ percentage }: { percentage: number }) {
  const [width, setWidth] = useState(0)
  const colors = getProgressColor(percentage)

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(Math.min(percentage, 100)), 100)
    return () => clearTimeout(timeout)
  }, [percentage])

  return (
    <div className="w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full ${colors.bg} transition-all duration-700 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
