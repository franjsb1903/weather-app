import type React from 'react'

interface CardContainerProps {
  className?: string
  altIcon?: string
  icon?: string
  children: React.ReactElement | React.ReactElement[]
  col?: boolean
  width?: string
  title?: string
  between?: boolean
  largeHeight?: boolean
}

function CardContainer({
  className,
  altIcon,
  icon,
  children,
  col,
  width,
  title,
  between,
  largeHeight,
}: CardContainerProps) {
  return (
    <section
      className={`
        bg-blue-400 
        bg-opacity-50
        ${width ? `w-[${width}]` : 'w-full'}
        transition-opacity
        duration-300
        ease-in
        ${className?.concat(' animate-fade')}`}
    >
      {title && (
        <div className="flex gap-3 items-center w-full py-2 border-b-[1px] border-gray-400 border-opacity-70">
          <img
            src={icon}
            alt={altIcon}
            className="w-[15px] h-[15px] md:w-[20px] md:h-[20px] opacity-50"
          />
          <h6 className="text-gray-400 opacity-70 text-[0.6rem] md:text-sm">
            {title.toUpperCase()}
          </h6>
        </div>
      )}
      <section
        className={`
        flex
        ${col ? 'flex-col' : 'flex-row'}
        flex-nowrap
        items-center
        ${between ? 'justify-evenly' : 'justify-center'}
        ${
          largeHeight
            ? 'min-h-[150px] md:min-h-[200px]'
            : 'min-h-[100px] max-h-[100px] md:min-h-[150px] md:max-h-[150px]'
        }`}
      >
        {children}
      </section>
    </section>
  )
}

export default CardContainer
