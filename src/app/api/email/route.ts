import { Resend } from "resend";
import { NextResponse } from "next/server";
import { Greeting } from "../../../emails/greeting"

const resend = new Resend(process.env.RESEND_API_KEY);

export const GET = async () => {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'user@gmail.com',
        subject: 'hello world',
        react: Greeting({})
    });
    return NextResponse.json({
        status: "OK"
    })
}