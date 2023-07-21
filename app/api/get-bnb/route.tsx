import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=bnb",
      {
        method: "GET",
        headers: {
          "X-CMC_PRO_API_KEY": "36d3a309-fff7-4a5c-a602-b22f62566bc6",
          "Accept-Encoding": "deflate, gzip",
          Accept: "application/json",
        },
      }
    );
    const bnbValue = await response.json();
    return new NextResponse(JSON.stringify(bnbValue), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
