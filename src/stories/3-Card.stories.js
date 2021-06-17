import React from 'react'
import Card from '../components/Card'

export default {
    title: 'Card',
    component: Card
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
    title: "This Is Title Of The Card",
    className: "text-center primary",
    children: "This is Content"
}

export const WithTitle = Template.bind({})
WithTitle.args = {
    title: "This Is Title Of The Card",
    children: "This is Content"
}

export const CenteredText = Template.bind({})
CenteredText.args = {
    title: "This Is Center Title Of The Card",
    className: "text-center",
    children: "This is Center Content"
}

export const CardPrimary = Template.bind({})
CardPrimary.args = {
    title: "Card Primary",
    className: "primary",
    children: "This is Content"
}