import React from 'react'
type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string,
} & Omit<React.ComponentProps<'button'>, 'childern'>

const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <div>
            <button className={`class-${variant}`} {...rest}>{children}</button>
        </div>
    )
}

export default Button
