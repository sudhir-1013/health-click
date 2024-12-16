// route.js
import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/User";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, password } = await req.json(); // Parse JSON from request body

    if (!name || !email || !password) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'Email already in use' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newUser = await User.create({ name, email, password }); 
    console.log('User created successfully:', newUser);        

    return new Response(
      JSON.stringify({
        message: 'User created successfully',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,   
          password: newUser.password,   
          createdAt: newUser.createdAt,
          updatedAt: newUser.updatedAt,
        },
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(
      JSON.stringify({ message: 'Server error. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
