import React, { useEffect } from 'react'

type PhysicalKeyBoardInputProps = {
    handleKeyBoardClicked: (value: string) => void
}

const key_board = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Backspace", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
];

const PhysicalKeyBoardInput = ({handleKeyBoardClicked}: PhysicalKeyBoardInputProps) => {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
        let pressedKey = event.key;
        if (!pressedKey) return;
        pressedKey =
            pressedKey === "Backspace"
                ? pressedKey
                : pressedKey === "Enter"
                ? pressedKey
                : pressedKey.toUpperCase();
        if (key_board.flat().includes(pressedKey)) {
            handleKeyBoardClicked(pressedKey);
        }
    }

    document.addEventListener("keyup", handleKeyUp);

    return () => {
        document.removeEventListener("keyup", handleKeyUp);
    }
  }, [handleKeyBoardClicked])
  
  return null
}

export default PhysicalKeyBoardInput
