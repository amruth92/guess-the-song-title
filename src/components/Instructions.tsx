import Image from "next/image";
import React from "react";

const Instructions = ({ show, onClose }: { show: boolean; onClose: React.Dispatch<React.SetStateAction<boolean>> }) => {
	return (
		<div className={`${show ? "" : "hidden"} fixed top-0 left-0 w-full h-full bg-black/50 z-20 overflow-y-auto`}>
			<div className="max-w-2xl bg-white mx-auto my-5 rounded-md">
				<div className="p-3 bg-blue-50 rounded-md relative">
					<Image
						src="/images/cross.png"
						alt=""
						width={50}
						height={50}
						className="absolute top-2 right-2 w-10 h-10 cursor-pointer"
                        onClick={() => onClose(false)}
					/>
					<p className="text-center text-2xl font-bold">
						How to play
					</p>
				</div>
				<div className="px-3 max-w-lg mx-auto pb-5">
					<p className="text-center my-3 text-lg">
						You have to guess the hidden word in 6 tries and the
						color of the letters changes to show how close you are.
					</p>
					<p className="text-center my-3 text-lg">
						To start the game, just enter any word, for example:
					</p>
					<div className="flex gap-2 w-fit mx-auto my-3">
						<div className="h-14 w-14 border-2 border-gray-500 bg-gray-500 text-white flex justify-center items-center text-3xl font-bold">
							T
						</div>
						<div className="h-14 w-14 border-2 border-[#C9B458] bg-[#C9B458] text-white flex justify-center items-center text-3xl font-bold">
							A
						</div>
						<div className="h-14 w-14 border-2 border-gray-500 bg-gray-500 text-white flex justify-center items-center text-3xl font-bold">
							B
						</div>
						<div className="h-14 w-14 border-2 border-[#C9B458] bg-[#C9B458] text-white flex justify-center items-center text-3xl font-bold">
							L
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							E
						</div>
					</div>

					<div className="bg-gray-200 rounded-lg p-3 my-5">
						<p className="my-2">
							<span className="px-2 py-1 bg-gray-500 text-white rounded">
								T
							</span>{" "}
							,{" "}
							<span className="px-2 py-1 bg-gray-500 text-white rounded">
								B
							</span>{" "}
							are not in the target word at all.
						</p>
						<p className="my-2">
							<span className="px-2 py-1 bg-[#C9B458] text-white rounded">
								A
							</span>{" "}
							,{" "}
							<span className="px-2 py-1 bg-[#C9B458] text-white rounded">
								L
							</span>{" "}
							is in the word but in the wrong spot.
						</p>
						<p className="my-2">
							<span className="px-2 py-1 bg-[#6AAA64] text-white rounded">
								E
							</span>{" "}
							is in the word and in the correct spot.
						</p>
					</div>

					<p className="text-center">
						Another try to find matching letters in the target word.
					</p>

					<div className="flex gap-2 w-fit mx-auto my-3">
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							F
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							L
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							A
						</div>
						<div className="h-14 w-14 border-2 border-gray-500 bg-gray-500 text-white flex justify-center items-center text-3xl font-bold">
							S
						</div>
						<div className="h-14 w-14 border-2 border-gray-500 bg-gray-500 text-white flex justify-center items-center text-3xl font-bold">
							H
						</div>
					</div>

					<p className="text-center">So close!</p>

					<div className="flex gap-2 w-fit mx-auto my-3">
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							F
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							L
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							A
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							M
						</div>
						<div className="h-14 w-14 border-2 border-[#6AAA64] bg-[#6AAA64] text-white flex justify-center items-center text-3xl font-bold">
							E
						</div>
					</div>

					<p className="text-center">Got it! 🏆</p>
				</div>
			</div>
		</div>
	);
};

export default Instructions;
