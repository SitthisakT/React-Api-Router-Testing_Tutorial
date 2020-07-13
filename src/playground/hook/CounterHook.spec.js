import React from 'react'
import CounterHook  from './CounterHook.jsx'
import { render ,fireEvent, getByText} from '@testing-library/react' 

test('the counter should works is increase, decrase , and reset',() => {
    //Arrange
    const { getByText } = render(<CounterHook/>)
    const btnIncrease = getByText('+1')
    const btnDecrease = getByText('-1')
    const btnReset = getByText('reset')
    

    //Act        
    expect(getByText('Count : 999')).toBeInTheDocument()

    fireEvent.click(btnIncrease)
    fireEvent.click(btnIncrease)
    fireEvent.click(btnIncrease)
    expect(getByText('Count : 1002')).toBeInTheDocument()


    fireEvent.click(btnDecrease)
    fireEvent.click(btnDecrease)
    fireEvent.click(btnDecrease)
    fireEvent.click(btnDecrease)
    fireEvent.click(btnDecrease)
    expect(getByText('Count : 997')).toBeInTheDocument()

    fireEvent.click(btnReset)
    expect(getByText('Count : 0')).toBeInTheDocument()

    //Assert       

})