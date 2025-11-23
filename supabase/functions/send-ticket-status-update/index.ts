import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TicketStatusUpdateRequest {
  email: string;
  name: string;
  ticketNumber: string;
  subject: string;
  oldStatus: string;
  newStatus: string;
  dashboardUrl?: string;
}

const statusMessages = {
  'open': {
    title: 'Ticket Received',
    description: 'We have received your support ticket and will review it shortly.',
    color: '#10b981'
  },
  'in-progress': {
    title: 'Ticket In Progress',
    description: 'Our team is actively working on your ticket.',
    color: '#3b82f6'
  },
  'resolved': {
    title: 'Ticket Resolved',
    description: 'Your ticket has been resolved. Please review the resolution and let us know if you need further assistance.',
    color: '#8b5cf6'
  },
  'closed': {
    title: 'Ticket Closed',
    description: 'Your ticket has been closed. Thank you for contacting Waks Digital Support.',
    color: '#6b7280'
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      email, 
      name, 
      ticketNumber, 
      subject, 
      oldStatus, 
      newStatus,
      dashboardUrl = 'https://your-domain.com/ticket-dashboard'
    }: TicketStatusUpdateRequest = await req.json();

    console.log("Sending ticket status update email to:", email);
    console.log("Status change:", oldStatus, "->", newStatus);

    const statusInfo = statusMessages[newStatus as keyof typeof statusMessages] || statusMessages['open'];

    const emailResponse = await resend.emails.send({
      from: "Waks Digital Support <onboarding@resend.dev>",
      to: [email],
      subject: `Ticket ${ticketNumber}: ${statusInfo.title}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #FF7C1F 0%, #FF9A3F 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Ticket Status Update</h1>
            </div>
            
            <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Hello ${name},</p>
              
              <div style="background: ${statusInfo.color}15; border-left: 4px solid ${statusInfo.color}; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <h2 style="margin: 0 0 10px 0; color: ${statusInfo.color}; font-size: 20px;">
                  ${statusInfo.title}
                </h2>
                <p style="margin: 0; color: #666; font-size: 15px;">
                  ${statusInfo.description}
                </p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #333;">Ticket Details</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px; width: 40%;">Ticket Number:</td>
                    <td style="padding: 8px 0; color: #333; font-weight: 600; font-size: 14px; font-family: monospace;">${ticketNumber}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px;">Subject:</td>
                    <td style="padding: 8px 0; color: #333; font-size: 14px;">${subject}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px;">Previous Status:</td>
                    <td style="padding: 8px 0; color: #333; font-size: 14px; text-transform: capitalize;">${oldStatus.replace('-', ' ')}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px;">New Status:</td>
                    <td style="padding: 8px 0; font-weight: 600; font-size: 14px; text-transform: capitalize;">
                      <span style="background: ${statusInfo.color}; color: white; padding: 4px 12px; border-radius: 4px; display: inline-block;">
                        ${newStatus.replace('-', ' ')}
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
              
              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                You can view your ticket and all updates in your dashboard:
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${dashboardUrl}" 
                   style="background: linear-gradient(135deg, #FF7C1F 0%, #FF9A3F 100%); 
                          color: white; 
                          padding: 14px 30px; 
                          text-decoration: none; 
                          border-radius: 5px; 
                          display: inline-block;
                          font-weight: bold;
                          font-size: 16px;">
                  View My Tickets
                </a>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="font-size: 14px; color: #666;">
                  Need to update your ticket or have questions? Simply reply to this email or visit your dashboard.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 5px 0;">Waks Digital Solutions</p>
              <p style="margin: 5px 0;">Your partner in digital transformation</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-ticket-status-update function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);