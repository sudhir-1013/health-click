// route.js
import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "Email already in use" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    console.log("User created successfully:", newUser);

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.log("Signup Error:", error.message); // Logs only the error message, no stack trace
    return new Response(
      JSON.stringify({ message: "Server error. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
