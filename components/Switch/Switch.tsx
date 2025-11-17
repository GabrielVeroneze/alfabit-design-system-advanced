import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {
    Switch as HeadlessSwitch,
    SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react'
import useStyle from './Switch.style'

export interface SwitchProps extends HeadlessSwitchProps {
    defaultEnable?: boolean
    variant?: 'common' | 'contract'
    disabled?: boolean
    onChange?: (enabled: boolean) => void
}

const Switch = ({
    defaultEnable: enabledByDefault,
    variant = 'common',
    disabled,
    onChange,
    ...rest
}: SwitchProps) => {
    const [enabled, setEnabled] = useState(enabledByDefault)
    const style = useStyle({ variant, enabled, disabled })

    const toggle = () => {
        const newState = !enabled

        setEnabled(newState)

        if (onChange) {
            onChange(newState)
        }
    }

    return (
        <HeadlessSwitch
            checked={enabled}
            onChange={toggle}
            disabled={disabled}
            className={style.Container}
            {...rest}
        >
            <span className="sr-only">switch toggle</span>
            {variant === 'common' && <span className={style.Switch} />}
            {variant === 'contract' && (
                <span>
                    {enabled ? (
                        <CheckIcon
                            className={style.Icon}
                            aria-disabled={disabled}
                        />
                    ) : (
                        <XMarkIcon
                            className={style.Icon}
                            aria-disabled={disabled}
                        />
                    )}
                </span>
            )}
        </HeadlessSwitch>
    )
}

export default Switch
