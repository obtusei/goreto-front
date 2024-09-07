import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useState } from "react";
import { Eye, EyeOff, Loader2Icon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "@/components/icons";
import pb from "@/pocketbase";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      await pb
        .collection("users")
        .authWithPassword(values.username, values.password);
      toast({
        title: "Login Successful",
        description: "You have successfully logged in",
      });
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 2000);
    } catch (er: any) {
      toast({
        title: "Login Failed",
        description: "Username or password is incorrect",
        variant: "destructive",
      });
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center gap-20 flex-col h-screen">
      <LogoIcon />
      <div className="w-full max-w-96 p-4 rounded-lg">
        <h1 className="text-2xl font-semibold">Log In</h1>
        <br />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username or Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email or username"
                      {...field}
                    />
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
                  <FormLabel className="flex justify-between items-center">
                    Password
                    <button
                      className="p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type={showPassword ? "text" : "password"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <Button type="submit" className="w-full" disabled={loading}>
              {!loading ? "Log In" : <Loader2Icon className="animate-spin" />}
            </Button>
          </form>
        </Form>

        <div className="flex flex-col items-center py-4 gap-4">
          <p className="text-sm text-gray-600 font-medium">
            Dont have an account?{" "}
            <Link to="/auth/register" className=" text-main font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
