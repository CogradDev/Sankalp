import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Registration Confirmation - SANKALP 2026",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; padding: 20px; text-align: center; border-radius: 8px;">
            <h1 style="color: #ffffff; margin: 0;">SANKALP 2026</h1>
            <p style="color: #e5e7eb; margin: 5px 0 0 0;">National Summit at MNNIT</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Thank You for Registering!</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              We're thrilled to confirm your registration for <strong>SANKALP 2026</strong> - the National Summit on Skilling and Nurturing Knowledge for Aatmanirbhar Leadership and Prosperity.
            </p>
            
            <div style="background-color: #eff6ff; border-left: 4px solid #ff6b35; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #1e3a8a; margin: 0;"><strong>📅 Event Details:</strong></p>
              <p style="color: #374151; margin: 10px 0 0 0;">
                <strong>Date:</strong> March 17-19, 2026<br />
                <strong>Location:</strong> MNNIT Allahabad, Prayagraj, UP
              </p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              You'll receive further details about the event schedule, speaker lineup, and logistics soon. Keep an eye on your inbox!
            </p>
            
            <p style="color: #374151; line-height: 1.6;">
              If you have any questions or need assistance, feel free to reach out to us.
            </p>
            
            <p style="color: #374151; margin-top: 30px; margin-bottom: 5px;">
              Best regards,<br />
              <strong>SANKALP 2026 Team</strong>
            </p>
          </div>
          
          <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 8px; margin-top: 20px;">
            <p style="color: #d1d5db; margin: 0; font-size: 12px;">
              © 2026 SANKALP Summit. All rights reserved.
            </p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      throw result.error
    }

    return result
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    throw error
  }
}

export async function sendAdminNotification(details: {
  name: string
  email: string
  phone: string
  organization: string
  designation?: string
  category: string
  adminEmail: string
}) {
  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: details.adminEmail,
      subject: `New Registration - ${details.name} (${details.category})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; padding: 20px; text-align: center; border-radius: 8px;">
            <h1 style="color: #ffffff; margin: 0;">SANKALP 2026</h1>
            <p style="color: #e5e7eb; margin: 5px 0 0 0;">New Registration Alert</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">New Registration Received</h2>
            
            <div style="background-color: #fef3c7; border-left: 4px solid #ff6b35; padding: 15px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #92400e; margin: 0;"><strong>Registrant Information:</strong></p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937; width: 150px;">Name</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151;">${details.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Email</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151;">${details.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Phone</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151;">${details.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Organization</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151;">${details.organization}</td>
              </tr>
              ${
                details.designation
                  ? `
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Designation</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151;">${details.designation}</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 10px; background-color: #f3f4f6; border: 1px solid #e5e7eb; font-weight: bold; color: #1f2937;">Category</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; color: #374151; background-color: #dbeafe; font-weight: bold;">${details.category}</td>
              </tr>
            </table>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
              This registration was submitted to SANKALP 2026 Summit. Check your admin dashboard for more details.
            </p>
          </div>
          
          <div style="background-color: #1f2937; padding: 20px; text-align: center; border-radius: 8px; margin-top: 20px;">
            <p style="color: #d1d5db; margin: 0; font-size: 12px;">
              © 2026 SANKALP Summit Admin Notification
            </p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      throw result.error
    }

    return result
  } catch (error) {
    console.error("Error sending admin notification:", error)
    throw error
  }
}
