import React, { useState } from "react";

type GetHintProps = {
    word: string;
}

const GetHint = ({ word }: GetHintProps) => {
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setEmail("");
		const res = await fetch("/emailer", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				word: word,
			}),
		});
		const data = await res.json();
		if (data.success) {
			alert("email sent successfully.");
		} else {
            alert("something went wrong.");
		}
	};
	return (
		<div>
			<p className="text-3xl font-bold text-center">Get Hint</p>
			<form onSubmit={handleOnSubmit} className="max-w-2xl px-3 my-5 mx-auto md:flex">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter Email"
					className="border border-gray-300 py-2 px-4 w-full mb-3 md:mb-0 md:mr-3 md:w-96 rounded-md"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="submit"
					value="Submit"
					className="font-semibold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full md:w-auto md:grow"
				/>
			</form>
		</div>
	);
};

export default GetHint;
