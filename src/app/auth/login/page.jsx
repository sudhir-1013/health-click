"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UseGlobalContext } from "../../../../helpers/context";
import { loginUser } from "../../../../helpers/page";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { H3Grediant } from "@/components/eleProvider";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const { toast } = useToast();
  const { user, isAuthenticated, setIsAuthenticated } = UseGlobalContext();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
      toast({
        title: "Already Logged In",
        description: `${user?.name || "User"} is already logged in`,
        variant: "default",
      });
    }
  }, [isAuthenticated, router, toast, user?.name]);

 const handleInputValueChange = (e) => {
    const formInputName = e.target.name;
    const formInputValue = e.target.value;
    setLoginFormData({ ...loginFormData, [formInputName]: formInputValue });
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const setIsAuth = () => {
        setIsAuthenticated(true);
      };

      const response = await loginUser(loginFormData, toast, setIsAuth);
      
      if (response?.success) {
        toast({
          title: "Login Successful",
          description: response.message || "You have successfully logged in.",
          variant: "success",
        });
        router.push("/");
      } else {
        toast({
          title: "Login Failed",
          description: response?.message || "Login failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Login Error",
        description: error.message || "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="h-screen p-5 flex justify-center items-center bg-fixed bg-cover bg-[url('/sign-up-bg-fixed.jpg')]">
      <div className="w-full mx-auto rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="relative hidden md:block w-1/2 p-8 bg-[url('/log-in.png')] bg-contain bg-no-repeat bg-center bg-white"></div>

        <div className="w-full md:w-1/2 p-2 md:p-8 bg-gray-50 rounded-lg">
          <H3Grediant className="text-center text-xl font-semibold text-gray-800">
            Login to your account
          </H3Grediant>
          <div className="mt-8">
            <form onSubmit={handleLoginUser}>
              <input
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
                type="email"
                name="email"
                placeholder="Email"
                value={loginFormData.email}
                onChange={handleInputValueChange}
                required
              />

              <div className="relative mt-5">
                <input
                  className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleInputValueChange}
                  required
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button
                type="submit"
                className="mt-5 w-full py-4 rounded-lg bg-primaryTeal text-white transition duration-300"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="text-center w-full mt-5">
              <p>Don&apos;t have an account?</p>
              <a
                href="/auth/register"
                className="px-4 py-1 text-primaryTeal underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
