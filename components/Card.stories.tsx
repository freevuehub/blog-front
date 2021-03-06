import { Story, Meta } from '@storybook/react/types-6-0'
import CardComponent from '~/components/Card'

export default {
  title: 'Component/Card',
  component: CardComponent,
} as Meta

const Template: Story = () => (
  <CardComponent />
)

export const Card = Template.bind({})

Card.args = {}
