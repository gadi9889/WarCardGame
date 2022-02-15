import anime from 'animejs';
import React, { useEffect, useRef, useState } from "react";
import * as img from '../../exports/imgexports';
import Card from "./Card";

export default function Game({playerCards, opponentCards}) {

    // let cardImg = [
    //     [img.C2,img.C3,img.C4,img.C5,img.C6,img.C7,img.C8,img.C9,img.C10,img.CJ,img.CQ,img.CK,img.CA],
    //     [img.D2,img.D3,img.D4,img.D5,img.D6,img.D7,img.D8,img.D9,img.D10,img.DJ,img.DQ,img.DK,img.DA],
    //     [img.H2,img.H3,img.H4,img.H5,img.H6,img.H7,img.H8,img.H9,img.H10,img.HJ,img.HQ,img.HK,img.HA],
    //     [img.S2,img.S3,img.S4,img.S5,img.S6,img.S7,img.S8,img.S9,img.S10,img.SJ,img.SQ,img.SK,img.SA]
    // ]
    useEffect(() => {
        anime({
            targets: '#card-opponent',
            opacity: [0, 1],
            keyframes: [
                {translateY: '30vh'},
                {translateX: 320,translateY: 50,rotate:"-0.25turn"},
              ],
            duration: 2500,
            easing:'easeOutInQuad'
        })
        anime({
            targets: '#card-player',
            opacity: [0, 1],
            keyframes: [
                {translateY: '-30vh'},
                {translateX: -320,translateY: -60,rotate:"-0.25turn"},
                
              ],
            duration: 2500,
            easing:'easeOutInQuad'
        })
    })
    

    return (
        <div id="card-plane">
            
            <div id="card-opponent">
                <div>
                    <Card card={opponentCards[0]} />
                </div>
            </div>

            {/* <div>
                <img src={img.C2} style={{height:'27vh'}}/>
            </div> */}

            <div id="card-player">
                <div id='player'>
                    <Card card={playerCards[0]} id={'player'}/>
                </div>
            </div>
        </div>
    );
}
