'use client'
import { useState } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

function rollDice(diceNotation) {
    const diceRegex = /(\d+)d(\d+)([\+\-\*]\d+)?/
    const match = diceNotation.match(diceRegex)

    if (match) {
        const numDice = parseInt(match[1])
        const numSides = parseInt(match[2])
        const modifierString = match[3] || ''
        let modifier = 0

        if (modifierString) {
            const operator = modifierString.charAt(0)
            const operand = parseInt(modifierString.slice(1))

            if (operator === '+') {
                modifier = operand
            } else if (operator === '-') {
                modifier = -operand
            } else if (operator === '*') {
                modifier = operand
            }
        }

        let total = 0
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * numSides) + 1
        }

        return total + modifier
    } else {
        throw new Error('Invalid dice notation!')
    }
}

export default function Dice() {
    const [diceNotation, setDiceNotation] = useState('')
    const [isNotationValid, setIsNotationValid] = useState(false)

    const handleRollButton = () => {
        console.log(diceNotation)
        const result = rollDice(diceNotation)
        console.log(result)
    }

    const handleChange = (event) => {
        setDiceNotation(event.target.value)
    }

    const handleDiceNotationChange = (event) => {
        const notation = event.target.value
        setDiceNotation(notation)

        // Perform validation check
        const diceRegex = /^(\d+)d(\d+)([\+\-\*]\d+)?$/
        setIsNotationValid(diceRegex.test(notation))
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header></Header>
            <main className="flex flex-grow flex-col items-center justify-between p-24 bg-gradient-to-r from-sky-500 to-indigo-500">
                <input
                    type="text"
                    className="appearance-none border border-gray-300 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                    value={diceNotation}
                    onChange={handleDiceNotationChange}
                />

                <button onClick={handleRollButton} disabled={!isNotationValid}>
                    Roll
                </button>
            </main>
            <Footer></Footer>
        </div>
    )
}
