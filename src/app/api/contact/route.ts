import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { dbConnect } from "@/lib/mongoose";

export async function POST(request: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Parse the request body (JSON)
    const { name, email, organization, industry, message } =
      await request.json();

    // Create and save a new Contact document
    const newContact = await Contact.create({
      name,
      email,
      organization,
      industry,
      message,
    });

    // Return a JSON response
    return NextResponse.json(
      { message: "Success", contact: newContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
