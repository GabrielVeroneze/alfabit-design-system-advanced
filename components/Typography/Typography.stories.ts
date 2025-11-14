import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Typography, { TypographyProps } from './Typography'

const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    argTypes: {
        className: {
            type: 'string',
        },
    },
} satisfies Meta<TypographyProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Texto',
    },
}
