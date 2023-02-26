function Input({
  value = '',
  setValue,
}: {
  value: string
  setValue: (value: string) => void
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => {
        setValue(e.target.value)
      }}
      className="p-2 text-xl md:text-2xl text-black rounded-md border-none w-full"
      placeholder="Escribe una localización..."
    />
  )
}

export default Input
