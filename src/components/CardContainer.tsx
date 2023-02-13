import type React from 'react'

interface CardContainerProps {
  additionalClasses?: string[]
  children: any
  col?: boolean
  nowrap?: boolean
  gap?: number
  justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
  items?: 'center' | 'start' | 'end' | 'stretch' | 'baseline'
  width?: string
  maxWidth?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  overflowX?: string
  overflowY?: string
  show?: boolean
}

function CardContainer({
  additionalClasses,
  children,
  col,
  nowrap,
  gap,
  justify,
  items,
  width,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  overflowX,
  overflowY,
  show,
}: CardContainerProps) {
  return (
    <section
      className={`
        flex
        ${col ? 'flex-col' : 'flex-row'}
        ${nowrap ? 'flex-nowrap' : 'flex-wrap'}
        ${gap && `gap-${gap}`}
        ${justify && `justify-${justify}`}
        ${items && `items-${items}`}
        bg-blue-500 
        bg-opacity-50
        rounded-md
        ${show ? 'visible opacity-100' : 'invisible opacity-0'}
        ${width ? `w-${width}` : 'w-full'}
        ${maxWidth && `max-w-[${maxWidth}]`}
        ${height && `h-${height}`}
        ${maxHeight && `max-h-[${maxHeight}]`}
        ${minHeight && `min-h-[${minHeight}]`}
        ${overflowY && `overflow-y-${overflowY}`}
        ${overflowX && `overflow-x-${overflowX}`}
        mt-10
        p-5
        transition-opacity
        duration-300
        ease-in
        ${additionalClasses && additionalClasses.join(' ')}`}
    >
      {children}
    </section>
  )
}

export default CardContainer
