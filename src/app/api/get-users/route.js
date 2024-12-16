import connectDB from "../../../../middleware/connectDB";
import User from "../../../../models/User";

export async function GET(req, res) {
    await connectDB()

    console.log( await User.find({}) );
    const users = await User.find({});
    const passwords = users.map(user => user.password);
    console.log("Passwords:", passwords);

    return new Response(
      JSON.stringify({ status: 200, users, passwords }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )    

}