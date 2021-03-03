import { Story, Meta } from '@storybook/react/types-6-0'
import SwitchComponent from '~/components/Switch'

export default {
  title: 'Component/Switch',
  component: SwitchComponent,
} as Meta

const Template: Story = () => (
  <SwitchComponent />
)

export const Switch = Template.bind({})

Switch.args = {}
