"use client";
import Image from "next/image";
import React from "react";
import Instructions from "./Instructions";

const Navbar = () => {
	const [showInstructions, setShowInstructions] = React.useState(false);
	return (
		<div>
			<Instructions show={showInstructions} onClose={setShowInstructions} />
			<div className="my-5 border bg-white shadow-sm relative">
				<Image
					src="/images/question-mark.png"
					alt=""
					width={80}
					height={80}
					className="absolute top-3 right-3 w-14 h-14 cursor-pointer"
					onClick={() => setShowInstructions(!showInstructions)}
				/>
				<div className="container mx-auto py-5">
					<div className="justify-center items-center text-center">
						<img
							src="http://ravi.am/wp-content/uploads/2024/06/ravle-logo-1.jpg"
							alt="Ravi Amruth Logo"
							className="mx-auto"
						></img>
					</div>
					<p className="text-1xl text-center">
						Something new is coming soon - but can
						you guess what it is called?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
