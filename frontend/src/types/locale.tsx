export type TLocale = {
  'en': { [key: string]: string | number },
  'pt-BR': { [key: string]: string | number }
}

export const formatter = (content: string | number) => {
  if (typeof content === 'number') return <span>{content}</span>

  const data = content.split('/')
  const text = []
  for (let i = 0; i < data.length; i++) {
    text.push(data[i])

    if (i < data.length - 1) { text.push(<br key={`${data[i]}-key`} />) }
  }

  return (
    <>
      {text}
    </>
  )
}
