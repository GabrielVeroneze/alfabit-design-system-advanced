import { Meta, StoryObj } from '@storybook/nextjs-vite'
import TextBlock, { TextBlockProps } from './TextBlock'

const meta = {
    title: 'Molecules/TextBlock',
    component: TextBlock,
    argTypes: {
        className: {
            type: 'string',
        },
    },
} satisfies Meta<TextBlockProps>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Título de Exemplo',
        content: 'Este é um conteúdo de exemplo para o componente TextBlock.',
    },
}
