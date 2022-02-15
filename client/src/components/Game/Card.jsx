import React from 'react'
import { useEffect,useState } from 'react';
import * as Components from '../../exports/exports';
import * as img from '../../exports/imgexports';

export default function Card({card,id}) {
    const [showCard, setShowCard] = useState()

    // let CardSvg = [
    //     [<Components.C2 />,<Components.C3 />,<Components.C4 />,<Components.C5 />,<Components.C6 />,<Components.C7 />,<Components.C8 />,<Components.C9 />,<Components.C10 />,<Components.CJ />,<Components.CQ />,<Components.CK />,<Components.CA />],
    //     [<Components.D2 />,<Components.D3 />,<Components.D4 />,<Components.D5 />,<Components.D6 />,<Components.D7 />,<Components.D8 />,<Components.D9 />,<Components.D10 />,<Components.DJ />,<Components.DQ />,<Components.DK />,<Components.DA />],
    //     [<Components.H2 />,<Components.H3 />,<Components.H4 />,<Components.H5 />,<Components.H6 />,<Components.H7 />,<Components.H8 />,<Components.H9 />,<Components.H10 />,<Components.HJ />,<Components.HQ />,<Components.HK />,<Components.HA />],
    //     [<Components.S2 />,<Components.S3 />,<Components.S4 />,<Components.S5 />,<Components.S6 />,<Components.S7 />,<Components.S8 />,<Components.S9 />,<Components.S10 />,<Components.SJ />,<Components.SQ />,<Components.SK />,<Components.SA />]
    // ]
    let cardImg = [
        [img.C2,img.C3,img.C4,img.C5,img.C6,img.C7,img.C8,img.C9,img.C10,img.CJ,img.CQ,img.CK,img.CA],
        [img.D2,img.D3,img.D4,img.D5,img.D6,img.D7,img.D8,img.D9,img.D10,img.DJ,img.DQ,img.DK,img.DA],
        [img.H2,img.H3,img.H4,img.H5,img.H6,img.H7,img.H8,img.H9,img.H10,img.HJ,img.HQ,img.HK,img.HA],
        [img.S2,img.S3,img.S4,img.S5,img.S6,img.S7,img.S8,img.S9,img.S10,img.SJ,img.SQ,img.SK,img.SA]
    ]
    // let arr = [
    //     [2,3,4,5,6,7,8,9,10,11,12,13,14],
    //     [2,3,4,5,6,7,8,9,10,11,12,13,14],
    //     [2,3,4,5,6,7,8,9,10,11,12,13,14],
    //     [2,3,4,5,6,7,8,9,10,11,12,13,14],
    // ]
    
    useEffect(() => {
        if (card.type == "C") {
            setShowCard(cardImg[0][card.value-2])
        }
        else if (card.type == "D") {
            setShowCard(cardImg[1][card.value-2])
        }
        else if (card.type == "H") {
            setShowCard(cardImg[2][card.value-2])
        }
        else if(card.type == "S") {
            setShowCard(cardImg[3][card.value-2])
        }
    },[])
    

    return (
        <div className='card-svg'>
            <img src={showCard} />
        </div>
    )
}
