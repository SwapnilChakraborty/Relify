import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!privateKey || !publicKey || !urlEndpoint) {
  console.error("❌ Missing ImageKit environment variables!");
  throw new Error("Missing ImageKit environment variables. Check your Vercel settings.");
}

const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

export async function GET() {
  try {
    const authenticationParameter = imagekit.getAuthenticationParameters();
    return NextResponse.json(authenticationParameter);
  } catch (error) {
    console.error("ImageKit Auth Error:", error);
    return NextResponse.json(
      { error: "Failed to get authentication parameters" },
      { status: 500 }
    );
  }
}
