"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UseGlobalContext } from "../../../../helpers/context";
import { loginUser } from "../../../../helpers/page";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  
  const {toast} = useToast();
  const { user } = UseGlobalContext();
  useEffect(() => {
    if (user) {
      router.push("/");
      toast({
        title: `${user.name || "Sser"} is already logged in`,
        description: `${user.name || "Sser"} is already logged in`,
        variant: "destructive",
      });
    }
  }, [user, router, toast]);
  
  const handleInputValueChange = (e) => {
    const formInputName = e.target.name;
    const formInputValue = e.target.value;
    setLoginFormData({ ...loginFormData, [formInputName]: formInputValue });
  };

  const handleLoginUser = (e) =>{
    e.preventDefault()
    loginUser(loginFormData, toast)
  }

  console.log(loginFormData);

  return (
    <div className="h-screen px-5 my-10 flex justify-center items-center bg-fixed bg-cover bg-[url('/sign-up-bg-fixed.jpg')]">
      <div className="w-full mx-auto rounded-lg flex flex-col md:flex-row overflow-hidden">
        <div className="w-full relative md:w-1/2 p-8 bg-[url('/log-in.png')] bg-contain bg-no-repeat bg-center bg-white"></div>

        <div className="w-full md:w-1/2 p-8 bg-gray-50 rounded-lg">
          <Image
            src={"/Health-Click-Logo.png"}
            className="mx-auto"
            alt="Health-Click"
            height={200}
            width={200}
          />

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

              <input
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:outline-none focus:border-primaryTeal mt-5"
                type="password"
                placeholder="Password"
                name="password"
                value={loginFormData.password}
                onChange={handleInputValueChange}
                required
              />

              <button type="submit" className="mt-5 w-full py-4 rounded-lg bg-primaryTeal text-white transition duration-300">
                Login
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
