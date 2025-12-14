import React from 'react'

interface Props {
  id: string
  title: string
  department?: string
  completedDate?: string
  satisfactionScore?: number
  category?: string
  categoryColor?: string
  categoryIcon?: string
  onClick?: () => void
}

export default function ReportCard({ id, title, department, completedDate, satisfactionScore, category, categoryColor, categoryIcon, onClick }: Props) {
  return (
    <article
      onClick={onClick}
      className="h-full cursor-pointer transform-gpu transition-all duration-300 hover:shadow-lg flex"
    >
      <div className="relative w-full h-full">
        <div className="sticky-note h-full flex flex-col p-6">
          <div className="note-pin" aria-hidden />

          <div className="flex-1 flex items-start justify-start">
            <div className="w-full note-lines p-4 rounded-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#333333] leading-tight mb-2">{title}</h3>
              {category ? (
                <div className="text-base font-semibold text-[#2D3F7B] mb-2">{category}</div>
              ) : (
                <div className="text-sm text-slate-700 mb-2">{department}</div>
              )}
              <div className="text-sm text-slate-600">{completedDate}</div>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}
