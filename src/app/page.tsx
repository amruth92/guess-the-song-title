"use client";
import GetHint from "@/components/GetHint";
import GuessWord from "@/components/GuessWord";
import Keyboard from "@/components/Keyboard";
import PhysicalKeyBoardInput from "@/components/PhysicalKeyBoardInput";
import Link from "next/link";
import {useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const titleToBeGuessed = "RUN WITH ME";
  const words = useMemo(() => titleToBeGuessed.split(" "), [titleToBeGuessed]);
  const [currentWord, setCurrentWord] = useState(0);
  const [currentUserWord, setCurrentUserWord] = useState("");
  const NUMBER_OF_ATTEMPTS = 6;
  const [remainingAttempts, setRemainingAttempts] = useState(NUMBER_OF_ATTEMPTS);
  const [keyboard, setKeyBoard] = useState([
    [
      { value: "Q", color: "bg-neutral-300" },
      { value: "W", color: "bg-neutral-300" },
      { value: "E", color: "bg-neutral-300" },
      { value: "R", color: "bg-neutral-300" },
      { value: "T", color: "bg-neutral-300" },
      { value: "Y", color: "bg-neutral-300" },
      { value: "U", color: "bg-neutral-300" },
      { value: "I", color: "bg-neutral-300" },
      { value: "O", color: "bg-neutral-300" },
      { value: "P", color: "bg-neutral-300" },
    ],
    [
      { value: "A", color: "bg-neutral-300" },
      { value: "S", color: "bg-neutral-300" },
      { value: "D", color: "bg-neutral-300" },
      { value: "F", color: "bg-neutral-300" },
      { value: "G", color: "bg-neutral-300" },
      { value: "H", color: "bg-neutral-300" },
      { value: "J", color: "bg-neutral-300" },
      { value: "K", color: "bg-neutral-300" },
      { value: "L", color: "bg-neutral-300" },
    ],
    [
      { value: "Backspace", color: "bg-neutral-300" },
      { value: "Z", color: "bg-neutral-300" },
      { value: "X", color: "bg-neutral-300" },
      { value: "C", color: "bg-neutral-300" },
      { value: "V", color: "bg-neutral-300" },
      { value: "B", color: "bg-neutral-300" },
      { value: "N", color: "bg-neutral-300" },
      { value: "M", color: "bg-neutral-300" },
      { value: "Enter", color: "bg-neutral-300" },
    ],
  ]);

  const [tries, setTries] = useState<{ letter: string; color: string; }[][][]>([]);

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const array: { letter: string; color: string; }[][][] = [];
    words.forEach((word) => {
      const arr = Array.from({ length: 6 }, () => (
        Array.from({ length: word.length }, () => ({
            letter: '',
            color: 'border-gray-300',
        }))
      ))
      array.push(arr)
    })
    setTries(array)
  }, [words])

  const handleKeyBoardClicked = (value: string) => {
    if (currentWord <= 2) {
      if (value.toUpperCase() === "ENTER" &&
        currentUserWord.length === words[currentWord].length) {
          for (let i = 0; i < currentUserWord.length; i++) {
            let color = "border-gray-500 bg-gray-500 text-white";
            if (words[currentWord][i] === currentUserWord[i]) {
              color = "border-[#6AAA64] bg-[#6AAA64] text-white";
            } else if (words[currentWord].includes(currentUserWord[i])) {
              color = "border-[#C9B458] bg-[#C9B458] text-white";
            }
  
            tries[currentWord][NUMBER_OF_ATTEMPTS - remainingAttempts][i].color = color;
            // keyboard buttons
            keyboard.forEach((row) => {
              row.forEach((element) => {
                if (element.value === currentUserWord[i]) {
                  element.color = color;
                }
              })
            });
          }
          setRemainingAttempts((prev) => prev - 1);
          setTries([...tries]);
          setKeyBoard([...keyboard]);
          if (words[currentWord] === currentUserWord) {
            setTimeout(() => {
              alert("You Got It!");
              scrollToBottom();
              if (currentWord >= 2) {
                setCurrentWord((prev) => prev + 1);
              } else {
                guessNext();
              }
            }, 500)
            return;
          } else if (remainingAttempts <= 1) {
            setTimeout(() => {
              alert("You Lost! Try Again.");
              window.location.reload();
            }, 500)
            return;
          }
          setCurrentUserWord("");
        }
  
        if (value.toUpperCase() === "BACKSPACE" && currentUserWord.length !== 0) {
          const word_letter = tries[currentWord][NUMBER_OF_ATTEMPTS - remainingAttempts][currentUserWord.length - 1];
          word_letter.letter = "";
          word_letter.color = "border-gray-300";
          setCurrentUserWord(prev => prev.slice(0, -1));
        }
  
        if (currentUserWord.length === words[currentWord]?.length) return;
  
        if (
          value.toUpperCase() !== "BACKSPACE" &&
          value.toUpperCase() !== "ENTER"
        ) {
          setCurrentUserWord(prev => prev + value);
          const userWord = currentUserWord + value;
          const word_letter = tries[currentWord][NUMBER_OF_ATTEMPTS - remainingAttempts][userWord.length - 1];
          word_letter.letter = value;
          word_letter.color = "border-gray-400 bg-gray-400";
          setTries([...tries]);
        }
    }
  }

  const guessNext = () => {
    setCurrentWord((prev) => prev + 1);
    if (currentWord < words.length - 1) {
      setRemainingAttempts(NUMBER_OF_ATTEMPTS);
      setCurrentUserWord("");

      keyboard.forEach((row) => {
        row.forEach((element) => {
          element.color = "bg-neutral-300";
        })
      });

      setKeyBoard([...keyboard]);
    }
  }

  return (
    <main className="">
      {tries.length > 0 && words.map((word, index) => (
        <div key={index} className={`${index <= currentWord ? "" : "hidden"} mb-10`}>
          <div>
            <p className="text-2xl my-3 text-center">Guess Word {index + 1}</p>
            <GuessWord tries={tries[index]} isGuessed={currentWord >= index + 1}/>
          </div>
        </div>
      ))}

      {currentWord > 2 && <div className="my-10">
        <p className="text-3xl font-bold text-center">Congartulations! You Got it.</p>
        <p className="text-xl text-center font-semibold">Check the song <Link href={"/"} target="_blank" className="text-blue-500 underline hover:text-blue-600">here</Link>.</p>
      </div>}

      <div ref={scrollRef}></div>

      {currentWord <= 2 && <GetHint word={words[currentWord]}/>}

      <Keyboard keyboard={keyboard} handleKeyBoardClicked={handleKeyBoardClicked}/>
      <PhysicalKeyBoardInput handleKeyBoardClicked={handleKeyBoardClicked} />
    </main>
  );
}