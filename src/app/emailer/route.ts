import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const Transporter_Email = process.env.TRANSPORTER_EMAIL;
const Trasnporter_Password = process.env.TRANSPORTER_PASSWORD;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: Transporter_Email,
		pass: Trasnporter_Password,
	},
});

export async function POST(request: Request) {
    const { email, word } = await request.json();
	const mailOptions = {
		from: Transporter_Email,
		to: email,
		subject: `Hint for the Song Title`,
		html: `<p>Your current word starts with <b>${word.charAt(0)}</b></p>`,
	};
	const response = await transporter.sendMail(mailOptions)

    if (response) {
        return NextResponse.json({ success: true })
    }
    return NextResponse.json({ success: false })
}
