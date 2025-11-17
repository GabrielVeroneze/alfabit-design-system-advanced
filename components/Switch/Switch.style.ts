import { cva } from 'class-variance-authority'
import { SwitchProps } from './Switch'
import classNames from 'classnames'

const useStyle = ({
    variant,
    enabled,
    disabled,
}: SwitchProps & { enabled: boolean | undefined }) => {
    const containerVariant = cva(
        classNames(
            'relative inline-flex items-center h-6 w-16 rounded-full outline-none disabled:bg-disabled',
            { 'pointer-events-none': disabled },
        ),
        {
            variants: {
                variant: {
                    common: classNames({
                        'bg-primary': enabled,
                        'bg-primary hover:bg-hover': !enabled,
                    }),
                    contract: classNames({
                        'bg-success': enabled,
                        'bg-error': !enabled,
                    }),
                },
            },
            defaultVariants: {
                variant: 'common',
            },
        },
    )

    const containerClasses = containerVariant({ variant })

    const switchClasses = classNames(
        'inline-block bg-white h-5 w-5 rounded-full transform transition-transform duration-200 ease-in-out',
        enabled ? 'translate-x-[2.1rem]' : 'translate-x-1',
    )

    const iconClasses = classNames('aria-disabled:text-disabled', {
        'text-success': enabled && !disabled,
        'text-error': !enabled && !disabled,
        'text-disabled': disabled,
    })

    return {
        Icon: iconClasses,
        Switch: switchClasses,
        Container: containerClasses
    }
}

export default useStyle
