import { cva } from 'class-variance-authority'
import { SwitchProps } from './Switch'
import classNames from 'classnames'

const createSwitchVariants = ({
    variant,
    enabled,
    disabled,
}: SwitchProps & { enabled: boolean }) => {
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
}

export default createSwitchVariants
