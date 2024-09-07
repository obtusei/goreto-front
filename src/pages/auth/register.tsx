"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useSignupMutation } from "@/redux/features/auth-slice";
// import { registerFormSchema } from "@/utils/schema/register.zod";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { registerFormSchema } from "@/utils/schema/register";
import { Link } from "react-router-dom";
import LogoIcon from "@/components/icons";

export default function RegisterPage() {
  // const [signUp] = useSignupMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [signUpType, setSignUpType] = useState<"INDIVIDUAL" | "ENTERPRISE">(
    "INDIVIDUAL"
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    try {
      setLoading(true);
      // const data = await signUp({
      //   user: values,
      //   type: signUpType,
      // }).unwrap();
      // console.log("asdas");
      // toast({
      //   title: "Register Successfully",
      //   description: "You have registered as an " + signUpType.toLowerCase(),
      // });
      // setTimeout(() => {
      setLoading(false);
      // router.push("/auth/login");
      // }, 2000);
    } catch (er: any) {
      if (er?.data?.message?.includes("Email")) {
        form.setError("email", {
          message: "Email already exists",
        });
      } else if (er?.data?.message?.includes("Username")) {
        form.setError("username", {
          message: "Username already exists",
        });
      } else if (er.data.message.includes("WEAK PASSWORD")) {
        form.setError("password", {
          message: "Password is weak, set strong one",
        });
      } else {
        // Error: {"status":400,"data":{"message":["WEAK PASSWORD"],"error":"Bad Request","statusCode":400}}
        alert("Error: " + JSON.stringify(er));
      }
      setLoading(false);
    }
  }

  return (
    <div className="justify-center flex items-center h-screen flex-col gap-20">
      <LogoIcon />
      <div className="w-full max-w-96 p-4 rounded-lg">
        <h1 className="text-xl font-semibold">Register</h1>
        <br />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@goreto.app" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter an unique username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-enter a password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <Button
              type="submit"
              className="w-full"
              onClick={() => setSignUpType("INDIVIDUAL")}
              disabled={loading}
            >
              {loading && signUpType == "INDIVIDUAL" ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex flex-col items-center py-4 gap-4">
          {/* <p className="text-gray-500 text-[12px] font-semibold">OR</p>
      <Button type="submit" variant={"outline"} className="w-full gap-2">
        <GoogleIcon />
        Continue with Google
      </Button> */}
          <p className="text-sm text-gray-600 font-medium">
            Already have an account?{" "}
            <Link to="/auth/login" className=" text-main font-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
