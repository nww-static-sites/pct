import { downloadGuideSchema } from "@/lib/forms/downloadGuideSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    // const validated = downloadGuideSchema.parse(body);
    // console.log(validated);
    return NextResponse.json({ message: "Form Submitted Successfully" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Form not Submitted" });
  }
}
