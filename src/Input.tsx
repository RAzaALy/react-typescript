import React, { useRef } from 'react'
type InputProps = {
    value: string,
    hanldeChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    const [value, setValue] = React.useState(props.value)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    const resetText = () => {
        setValue('');    
    }
    return (
        <div>
            <input   type="text" value={value} onChange={handleInputChange} />
            <button onClick={resetText}>Clear</button>
        </div>
    )
}

export default Input
