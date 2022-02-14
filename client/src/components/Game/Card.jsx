import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import * as Components from '../../exports/exports';

export default function Card({cards}) {
    const [CardSvg, setCardSvg] = useState([
        [<Components.C2 />,<Components.C3 />,<Components.C4 />,<Components.C5 />,<Components.C6 />,<Components.C7 />,<Components.C8 />,<Components.C9 />,<Components.C10 />,<Components.CA />,<Components.CJ />,<Components.CK />,<Components.CQ />,],
        [<Components.D2 />,<Components.D3 />,<Components.D4 />,<Components.D5 />,<Components.D6 />,<Components.D7 />,<Components.D8 />,<Components.D9 />,<Components.D10 />,<Components.DA/>,<Components.DJ />,<Components.DK />,<Components.DQ />,],
        [<Components.H2 />,<Components.H3 />,<Components.H4 />,<Components.H5 />,<Components.H6 />,<Components.H7 />,<Components.H8 />,<Components.H9 />,<Components.H10 />,<Components.HA />,<Components.HJ />,<Components.HK />,<Components.HQ />,],
        [<Components.S2 />,<Components.S3 />,<Components.S4 />,<Components.S5 />,<Components.S6 />,<Components.S7 />,<Components.S8 />,<Components.S9 />,<Components.S10 />,<Components.SA />,<Components.SJ />,<Components.SK />,<Components.SQ />,]
    ])
    
    const cardSvgPicker = (cards) => {
        let card = cards.pop()
        if (card.type == "C") {
            return CardSvg[0][card.value]
        }
        else if (card.type == "D") {
            return CardSvg[1][card.value]
        }
        else if (card.type == "H") {
            return CardSvg[2][card.value]
        }
        else {
            return CardSvg[3][card.value]
        }
    }

    return (
        <div className='card-svg'>
            {cardSvgPicker(cards)}
        </div>
    )
}
