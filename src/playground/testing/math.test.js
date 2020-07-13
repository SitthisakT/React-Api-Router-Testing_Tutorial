import { divide } from './math.js'



describe('พิมพ์ภาษาไทยได้ไหม',() =>{
    test('given x=4 y=2, when divide x by x ,then it should be 2',() => {
        //Arrange
        const x = 4
        const y = 2
        const expected = 2
    
        //Act
        const actual = divide(x,y)
    
        //Assert
        expect(actual).toBe(expected)
    })

    test('กำหนดให้ x = 22 , y = 7 เมื่อหาร x ด้วย y ดังนั้นคำตอบควรใกล้เคียง 3.14',() => {
        //Arrange
        const x = 22
        const y = 7
        const expected = 3.14
    
        //Act
        const actual = divide(x,y)
    
        //Assert
        expect(actual).toBeCloseTo(expected)
    })

    test('given y = 0 , x= 2 , when divide x by y then it should throw an error',()=>{
        //Arrange
        const x = 2
        const y = 0
        const expected = /Cannot divided by zero/i
    
        //Act
        const actual = () => divide(x,y)
    
        //Assert
        expect(actual).toThrow(expected)
    })
})
