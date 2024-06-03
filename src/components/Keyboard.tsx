import Image from "next/image";
import React from "react";

type KeyBoardProps = {
    keyboard: { value: string; color: string; }[][],
    handleKeyBoardClicked: (value: string) => void
};

const Keyboard = ({keyboard, handleKeyBoardClicked}: KeyBoardProps) => {
	return (
		<div className="max-w-2xl mx-auto text-base md:text-2xl font-bold flex flex-col gap-y-1 my-5 px-3">
            {keyboard.map((row, i) => (
                <div key={i} className={`grid ${i === 0 ? "grid-cols-10" : i === 1 ? "grid-cols-9" : "grid-cols-11"} w-full text-center gap-1`}>
                    {row.map((key, j) => (
                        <div onClick={() => { handleKeyBoardClicked(key.value) }} key={j} className={`rounded-md cursor-pointer select-none py-1 md:py-3 ${key.color} transition-all duration-300 ${key.value.toUpperCase() === "BACKSPACE" || key.value.toUpperCase() === "ENTER" ? "col-span-2 group" : ""}`}>
                            {key.value.toUpperCase() === "BACKSPACE" ? (
                                <Image
                                    src="/images/backspace-dark.png"
                                    alt="backspace"
                                    width={40}
                                    height={40}
                                    className="h-6 md:h-8 w-auto mx-auto"
                                />
                            ):(key.value)}
                        </div>
                    ))}
                </div>
            ))}
		</div>
	);
};

export default Keyboard;
