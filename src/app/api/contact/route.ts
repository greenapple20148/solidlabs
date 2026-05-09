import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API Key
// You should add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, projectType, budget, timeline, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    // Replace 'onboarding@resend.dev' with your verified domain in production
    const { data, error } = await resend.emails.send({
      from: "SolidLabs Solutions <onboarding@resend.dev>",
      to: ["info@solidlabsai.com"], // Send to your primary contact email
      replyTo: email,
      subject: `New Project Inquiry: ${company} - ${projectType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="color: #3b82f6;">New Project Inquiry</h2>
          <p>You have received a new message from the SolidLabs website contact form.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Project Type:</td>
              <td style="padding: 8px 0;">${projectType || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Budget:</td>
              <td style="padding: 8px 0;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
              <td style="padding: 8px 0;">${timeline || "Not specified"}</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px;">Message:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            ${message}
          </p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This email was sent via the SolidLabs Solutions website contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
