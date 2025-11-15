import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Divider, { DividerProps } from './Divider'

const meta = {
    title: 'Atoms/Divider',
    component: Divider,
    argTypes: {
        children: {
            type: 'string',
        },
    },
} satisfies Meta<DividerProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}

export const Default: Story = {
    args: {},
}

export const DivisorWithText: Story = {
    args: {
        children: 'Texto do divisor',
    },
}
