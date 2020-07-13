import React from 'react'
import SwitchButtonHook  from './SwitchButtonHook.jsx'
import { render , fireEvent } from '@testing-library/react' 

test('given switch button is turned-off , when clicks, then it should turn on ',() => {
    //Arrange
    const { debug , getByText } = render(<SwitchButtonHook />) 
    const btn = getByText('TURN ON')

    //Act        
    fireEvent.click(btn)

    //Assert       
    expect(btn.textContent).toBe('TURN OFF')
    debug()
 

})