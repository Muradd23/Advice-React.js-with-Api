import './HomePage.css'

import { useEffect, useState } from 'react'
import axios from 'axios'
export function HomePage() {
    const [advice, setAdvice] = useState(null)

    const fetchAdviceData = async () => {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice')
            setAdvice(response.data)
        } catch (err) {
            console.error('Error fetching advice:', err)
        }
    }

    useEffect(() => {
        (async () => {
            await fetchAdviceData()
        })()
    }, [])
    console.log(advice);

    return (
        <>
            <div className="advice-container">
                <div className="advice-number-container">
                    {advice && `ADVICE # ${advice.slip.id}`}
                </div>
                <div className='advice-text-container'>
                    {advice && `"${advice.slip.advice}"`}
                    
                </div>
                <div className='pattern-divider-container'>
                    <img src="/images/pattern-divider-desktop.svg" className='pattern-divider' alt="" />
                </div>
                <button className='random-advice-button' onClick={fetchAdviceData}>
                    <img src="/images/icon-dice.svg" alt="" />
                </button>

            </div>

        </>
    )
}