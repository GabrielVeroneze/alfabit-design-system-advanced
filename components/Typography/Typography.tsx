export interface TypographyProps {
    children: React.ReactNode
    element?: keyof React.JSX.IntrinsicElements
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: string
}

const Typography = ({
    children,
    element = 'p',
    variant,
    size,
}: TypographyProps) => {
    const ElementTag = element

    return <ElementTag>{children}</ElementTag>
}

export default Typography
