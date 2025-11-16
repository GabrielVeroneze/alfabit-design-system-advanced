import { Meta, StoryObj } from '@storybook/nextjs-vite'
import Avatar, { AvatarProps } from './Avatar'

const meta = {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        image: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
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

export const Default: Story = {
    args: {},
}

export const AvatarWithImage: Story = {
    args: {
        image: 'https://placehold.co/400x400.png',
        size: 'lg',
    },
}
