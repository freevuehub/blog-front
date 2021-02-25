import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import IconComponent from '~/components/Icon'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Component/Icon',
  component: IconComponent,
} as Meta

const Template: Story = () => (
  <IconComponent icon={faSearch} />
)

export const Icon = Template.bind({})

Icon.args = {}
