import type React from 'react'

interface CardContainerProps {
  className?: string
  altIcon?: string
  icon?: string
  children: React.ReactElement | React.ReactElement[]
  col?: boolean
  nowrap?: boolean
  width?: string
  show?: boolean
  title?: string
}

function CardContainer({
  className,
  altIcon,
  icon,
  children,
  col,
  nowrap,
  width,
  show,
  title,
}: CardContainerProps) {
  return (
    <section
      className={`
        flex
        ${col ? 'flex-col' : 'flex-row'}
        ${nowrap ? 'flex-nowrap' : 'flex-wrap'}
        bg-blue-400 
        bg-opacity-50
        ${show ? 'visible opacity-100' : 'invisible opacity-0'}
        ${width ? `w-[${width}]` : 'w-full'}
        transition-opacity
        duration-300
        ease-in
        ${className}`}
    >
      {title && (
        <div className="flex gap-3 items-center w-full py-2 border-b-[1px] border-gray-400 border-opacity-70">
          <img
            src={icon}
            alt={altIcon}
            className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] opacity-50"
          />
          <h6 className="text-gray-400 opacity-70 text-[0.6rem] md:text-sm">
            {title.toUpperCase()}
          </h6>
        </div>
      )}
      {children}
    </section>
  )
}

export default CardContainer
