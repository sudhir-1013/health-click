import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    console.log("Login request received"); // Log request initiation

    await connectDB();
    const { email, password } = await req.json();

    console.log("Received data:", { email, password: "********" }); // Masked password for security

    if (!email || !password) {
      console.log("Missing email or password");
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return new Response(
        JSON.stringify({ message: "User not found. Please sign up first." }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      console.log("Incorrect password");
      return new Response(
        JSON.stringify({ message: "Incorrect password. Please try again." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email , name : user.name },
      "your_secret_key",
      { expiresIn: "7d" }
    );

    console.log("User authenticated:", email);

    return new Response(
      JSON.stringify({
        message: "Login successful",
        token,
        user: { id: user._id, email: user.email, name : user.name },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.log("Login Error:", err.message);
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
