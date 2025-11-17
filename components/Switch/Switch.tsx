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
}: SwitchProps) => {
    return <HeadlessSwitch>Switch</HeadlessSwitch>
}

export default Switch
