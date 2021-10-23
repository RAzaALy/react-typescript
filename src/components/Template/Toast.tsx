import React from 'react'

type HorizontalPosition = 
    'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type PositionProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}

const Toast = ({ position }: PositionProps) => {
    return (
        <div>
            Toast Notification {position}
        </div>
    )
}

export default Toast
