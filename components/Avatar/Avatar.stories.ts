import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Avatar, { AvatarProps } from './Avatar'

const meta = {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            control: 'radio',
            options: ['xs', 'sm', 'md', 'lg'],
        },
        className: {
            type: 'string',
        },
    },
} satisfies Meta<AvatarProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
}
