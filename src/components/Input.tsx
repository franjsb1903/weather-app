export const Input = ({
  value = '',
  setValue,
  locations,
}: {
  value: string
  setValue: (value: string) => void
  locations: Array<{
    id: number
    name: string
  }>
}) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => {
          console.log({ value: e.target.value })
          setValue(e.target.value)
        }}
        className="p-2 text-2xl text-black rounded-md border-none w-full"
        placeholder="Escribe una localización..."
        list="locations"
      />
      <datalist id="locations">
        {locations.map(location => (
          <option key={location.id} value={location.name} />
        ))}
      </datalist>
    </>
  )
}
