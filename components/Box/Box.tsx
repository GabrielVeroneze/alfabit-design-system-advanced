export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    rounded?: boolean
    border?: boolean
    filledBackground?: boolean
    type?: 'primary' | 'secondary' | 'dark' | 'alert' | 'success' | 'error'
}

const boxClassMap = {
    primary: 'bg-primary',
    secondary: 'bg-quaternary',
    dark: 'bg-dark',
    alert: 'bg-yellow-200 text-yellow-200',
    success: 'bg-green-200 text-green-200',
    error: 'bg-red-200 text-red-200',
}

const Box = ({
    children,
    rounded = false,
    border = false,
    filledBackground = false,
    type = 'primary',
    className,
    ...rest
}: BoxProps) => {
    return <div {...rest}>Box</div>
}

export default Box
