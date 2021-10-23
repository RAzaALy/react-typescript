import React from 'react'
type TestProps = {
    children : React.ReactNode
}

const Test = (props: TestProps) => {
    return (
        <div>
            <h1>Testing Code</h1>
            {props.children}
        </div>
    )
}

export default Test
