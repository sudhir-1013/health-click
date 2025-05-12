"use client";
import { useEffect, useState } from "react";
import { RegisterUser } from "../../../../helpers/page";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { UseGlobalContext } from "../../../../helpers/context";
import { H3Grediant } from "@/components/eleProvider";

export default function Signup() {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false); // Show password toggle

  const router = useRouter();
  const { toast } = useToast();
  const { user } = UseGlobalContext();

  useEffect(() => {
    if (user) {
      router.push("/");
      toast({
        title: "Already Logged In",
        description: `${user.name || "User"} is already logged in.`,
        variant: "default",
      });
    }
  }, [user, router, toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerFormData.password !== registerFormData.confirmpassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true); // Set loading to true
    try {
      const createUser = await RegisterUser({
        name: registerFormData.name,
        email: registerFormData.email,
        password: registerFormData.password,
      });

      toast({
        title: "Account Created",
        description: `Welcome, ${registerFormData.name}! You can now log in with your credentials.`,
        variant: "success",
      });

      router.push("/auth/login");
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="h-screen p-5 my-10 flex justify-center items-center bg-fixed bg-cover bg-[url('/sign-up-bg-fixed.jpg')]">
      <div className="w-full mx-auto rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="relative hidden md:block md:w-1/2 p-8 bg-[url('/sign-up.png')] bg-contain bg-no-repeat bg-center bg-white"></div>

        <div className="w-full md:w-1/2 p-2 md:p-8 bg-gray-50 rounded-lg">
          <H3Grediant className="text-center text-xl font-semibold text-gray-800">Create Your Account</H3Grediant>

          <form className="mt-8" onSubmit={handleRegisterSubmit}>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={registerFormData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={registerFormData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
              />
            </div>
            <div className="mt-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={registerFormData.password}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
              />
            </div>
            <div className="mt-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmpassword"
                value={registerFormData.confirmpassword}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
              />
            </div>
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm text-gray-600">
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className={`mt-5 w-full py-4 rounded-lg bg-primaryTeal text-white transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="text-center w-full mt-5">
              <p>Already have an Account?</p>
              <a href="/auth/login" className="px-4 py-1 text-primaryTeal underline text-center mx-auto">Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
