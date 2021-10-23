import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        inputRef.current.focus();

    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default UseRef
