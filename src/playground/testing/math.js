export const divide = (x,y) => {
    if(y===0) throw new Error('Cannot divided by zero')
    return x/y
}