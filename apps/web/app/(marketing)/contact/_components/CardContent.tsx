import React from 'react'

export default function CardContent({children}: {children: React.ReactNode}) {
  return (
      <div className='bg-primary border-2 border-gray-300 p-6 min-h-[600px] max-h-[600px]'>
        {children}
      </div>
  )
}
