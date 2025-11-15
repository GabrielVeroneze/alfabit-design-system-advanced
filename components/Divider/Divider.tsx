export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    width?: string
    height?: string
    bgColor?: 'light' | 'dark' | 'black'
}

const Divider = ({
    children,
    width,
    height,
    bgColor,
    ...rest
}: DividerProps) => {
    return (
        <div>
            <div></div>
            {children && <div>{children}</div>}
            <div></div>
        </div>
    )
}

export default Divider
