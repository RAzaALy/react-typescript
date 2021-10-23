import React from 'react'
type Stylesprops = {
    styles : React.CSSProperties
}

const Styles = ({styles} : Stylesprops) => {
    return (
        <div>
            <h1 style={styles}>hello styles Props</h1>
        </div>
    )
}

export default Styles
