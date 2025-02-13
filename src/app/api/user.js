import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "../../../../models/User";
import connectDB from "../../../../middleware/connectDB";
import { cookies } from "next/headers"; // Import cookies for App Router

export async function GET(req) {
  await connectDB();

  // ✅ Attempt to get token from cookies
  const token = cookies().get("token")?.value;

  // ✅ Attempt to get token from Authorization header as fallback
  const authHeader = req.headers.get("authorization");
  const headerToken = authHeader?.split(" ")[1];

  const finalToken = token || headerToken; // Use cookie token if available, else fallback to header token

  console.log("Extracted Token:", finalToken); // Debugging log

  if (!finalToken) {
    return NextResponse.json({ user: null, message: "Not authenticated" }, { status: 401 });
  }

  try {
    // ✅ Verify the token properly
    const decoded = jwt.verify(finalToken, process.env.JWT_SECRET || "your_secret_key");

    console.log("Decoded Token Data:", decoded); // Debugging log

    // ✅ Fetch user from DB
    const user = await User.findById(decoded.userId).select("name email");

    if (!user) {
      return NextResponse.json({ user: null, message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user, message: "User authenticated" });
  } catch (error) {
    console.error("JWT Verification Error:", error.message); // Log the error for debugging
    return NextResponse.json({ user: null, message: "Invalid token" }, { status: 403 });
  }
}
