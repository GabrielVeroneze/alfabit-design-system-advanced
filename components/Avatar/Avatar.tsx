import classNames from 'classnames'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const avatarSizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-9 h-9',
}

const Avatar = ({ size = 'xs', className, ...rest }: AvatarProps) => {
    const avatarSizeClass = avatarSizeMap[size]

    return (
        <div
            className={classNames(
                'relative flex items-center justify-center rounded-full bg-disabled text-disabled',
                avatarSizeClass,
                className,
            )}
            {...rest}
        ></div>
    )
}

export default Avatar
