import React from 'react'
import TextArea from '../components/TextArea'

export default {
    title: "TextArea",
    component: TextArea
}

const Template = (args) => <TextArea {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    cols: 20,
    rows: 3,
    className: "form-control",
    placeholder: "Input Address",
    label: "Your Address"
}