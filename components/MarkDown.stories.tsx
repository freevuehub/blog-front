import { Story, Meta } from '@storybook/react/types-6-0'
import MarkDownComponent from '~/components/MarkDown'

export default {
  title: 'Component/MarkDown',
  component: MarkDownComponent,
} as Meta

const Template: Story = () => (
  <MarkDownComponent md="## markdown" />
)

export const MarkDown = Template.bind({})

MarkDown.args = {}
