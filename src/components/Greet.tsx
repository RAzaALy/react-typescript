import React from 'react'
type GreetProps = {
    name: string,
    message?: number,
    // message: number,
    login: boolean
}

const Greet = ({ name, message, login }: GreetProps) => {
    const msg = message;
    return (
        <div>
            <h1>

                {
                    login ?
                        ` Hello world of coding ${name} and 
                ${msg}   ` :
                        'welcom guest'
                }
            </h1>

        </div>
    )
}

export default Greet
