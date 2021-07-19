import React from 'react'
import Input from '../components/Input'

export default {
    title: "Input",
    component: Input,
    argTypes: {
        type: {
            options: ["text", "email", "tel", "password"],
            control: { type: "select" }
        }
    }
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: "text",
    placeholder: "Fullname",
    className: "form-control",
    label: "Input your name"
}