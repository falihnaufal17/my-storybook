import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '../components/Button'

export default {
    title: "Button",
    component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { 
    className: 'primary', 
    children: 'This is Primary',
    onClick: action('clicked')
}