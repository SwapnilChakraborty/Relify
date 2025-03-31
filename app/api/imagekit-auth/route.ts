import ImageKit from "imagekit"
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export async function GET() {
  try {
    const authenticationParameter=imagekit.getAuthenticationParameters();
    return NextResponse.json(authenticationParameter);

  }
  catch (error) {
    NextResponse.json({ error: "Failed to get authentication parameters" }, { status: 500 });
  }



}