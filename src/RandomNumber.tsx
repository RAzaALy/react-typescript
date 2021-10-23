import React from 'react'
type RandomNumberType = {
    value: number
}
type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?:never,
    isZero?: never
}
type NegativeNumber = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never,

}
type ZeroNumber = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never,
}
type RandomProps =  PositiveNumber | NegativeNumber | ZeroNumber

const RandomNumber = ({value,isPositive,isNegative, isZero}: RandomProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}
            {''}
            {isZero && 'zero'}
        </div>
    )
}

export default RandomNumber
