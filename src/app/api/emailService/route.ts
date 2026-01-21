import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


interface ContactForm {
    name: string;
    email: string;
    message: string;
}
export async function POST(request: NextRequest) {
    try {

        const { email, name, message }: ContactForm = await request.json();
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASSWORD!
            }
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Message from ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}