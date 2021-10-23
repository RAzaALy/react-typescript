import React from 'react'

type InputProps = 
React.ComponentProps<'input'>

const Input = (props: InputProps) => {
    return (
        <div>
            <input type="text" {...props} />
        </div>
    )
}

export default Input
