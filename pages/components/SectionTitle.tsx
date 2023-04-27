import { Text } from '@nextui-org/react'

export default function SectionTitle({
  title,
  color,
}: {
  title: string
  color?: string
}) {
  return (
    <Text
      h1
      css={{
        color: color ?? 'black',
        display: 'grid',
        placeContent: 'center',
        placeSelf: 'center',
        padding: '100px 0',
      }}
    >
      {title}
    </Text>
  )
}
