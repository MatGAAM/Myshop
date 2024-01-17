

import { render, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from "@testing-library/user-event"


describe('Counter > Unit Tests', () => {
    it('should render Counter component correctly', () => {
        render(<Counter />)
    
        const counterValueElement = screen.getByRole('heading', { level: 1 })
        const increaseButtonElement = screen.getByRole('button', { name: 'Aumentar' })
        const decreaseButtonElement = screen.getByRole('button', { name: 'Diminuir' })
    
        expect(counterValueElement).toHaveTextContent('0')
        expect(increaseButtonElement).toBeInTheDocument()
        expect(decreaseButtonElement).toBeInTheDocument()
    })
    
    it('should increase counter value when increase button is cliked', () => {
        render(<Counter />)
    
        const counterValueElement = screen.getByRole('heading', { level: 1 })
        const increaseButton = screen.getByRole('button', {name: 'Aumentar'})
    
        userEvent.click(increaseButton)
    
    
        expect(counterValueElement).toHaveTextContent('1')
    })
    
    it('should decrease counter value when decrease button is cliked', () => {
        render(<Counter />)
    
        const decreaseButton = screen.getByRole('button', {name: 'Diminuir'})
    
        userEvent.click(decreaseButton)
    
        const counterValueElement = screen.getByText('-1', { exact: true })
    
        expect(counterValueElement).toBeInTheDocument()
    })
})

