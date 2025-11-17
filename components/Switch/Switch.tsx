import { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import {
    Switch as HeadlessSwitch,
    SwitchProps as HeadlessSwitchProps,
} from '@headlessui/react'

export interface SwitchProps {
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
            {...rest}
        >
            {variant === 'common' && <span></span>}
            {variant === 'contract' && (
                <span>
                    {enabled ? (
                        <CheckIcon aria-disabled={disabled} />
                    ) : (
                        <XMarkIcon aria-disabled={disabled} />
                    )}
                </span>
            )}
        </HeadlessSwitch>
    )
}

export default Switch
