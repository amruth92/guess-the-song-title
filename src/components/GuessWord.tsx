"use client"
import React, { useState } from 'react'

type GuessWordProps = {
    tries: { letter: string; color: string; }[][],
    isGuessed: boolean
}

const GuessWord = ({ tries, isGuessed }: GuessWordProps) => {
    return (
        <div className='my-5'>
            {tries.map((tryWord, index) => (    
                <div key={index} className={`${ isGuessed && tryWord[0].letter === "" ? "hidden" : ""} flex flex-col text-white`}>
                    <div className="flex gap-2 w-fit mx-auto my-1">
                        {tryWord.map((letter, i) => (
                            <div key={`${index}-${i}`} className={`h-14 w-14 border-2 ${letter.color} flex justify-center items-center text-3xl font-bold`}>{letter.letter}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GuessWord;
