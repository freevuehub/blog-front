import { Story, Meta } from '@storybook/react/types-6-0'
import SnackbarComponent from '~/components/SnackBar'

export default {
  title: 'Component/Snackbar',
  component: SnackbarComponent,
} as Meta

const Template: Story = () => (
  <SnackbarComponent />
)

export const Snackbar = Template.bind({})

Snackbar.args = {}
