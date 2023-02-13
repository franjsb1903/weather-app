import type React from 'react'

interface CardContainerProps {
  additionalClasses?: string[]
  children: any
  col?: boolean
  nowrap?: boolean
  width?: string
  show?: boolean
}

function CardContainer({
  additionalClasses,
  children,
  col,
  nowrap,
  width,
  show,
}: CardContainerProps) {
  return (
    <section
      className={`
        flex
        ${col ? 'flex-col' : 'flex-row'}
        ${nowrap ? 'flex-nowrap' : 'flex-wrap'}
        bg-blue-500 
        bg-opacity-50
        rounded-md
        ${show ? 'visible opacity-100' : 'invisible opacity-0'}
        ${width ? `w-[${width}]` : 'w-full'}
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
