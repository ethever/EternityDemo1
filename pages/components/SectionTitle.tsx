import { Text } from '@nextui-org/react'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Text
      h1
      css={{
        color: 'black',
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
