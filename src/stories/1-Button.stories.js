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

export const Danger = Template.bind({})
Danger.args = {
    className: 'danger',
    children: 'The danger button',
    onClick: action("Danger bro!")
}

export const SmallButton = Template.bind({})
SmallButton.args = {
    className: 'primary small-button',
    children: 'The primary button',
    onClick: action("Danger bro!")
}