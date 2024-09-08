import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import Link from "next/link";
// import { GoogleIcon } from "@/components/custom-icons";
// import { useSignupMutation } from "@/redux/features/auth-slice";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
// import {
//   useEditUserProfileImageMutation,
//   useEditUserProfileMutation,
//   useGetUserProfileQuery,
// } from "@/redux/features/userSlice";
// import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";
const formSchema = z.object({
  fullname: z.string().min(3),
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email address",
  }),
  bio: z.string(),
  website: z.string(),
});

export default function BasicProfile() {
  // const [editProfile] = useEditUserProfileMutation();
  // const [editProfileImage] = useEditUserProfileImageMutation();
  // const { data: userProfile } = useGetUserProfileQuery();
  const [imageURL, setImageURL] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      username: "",
      bio: "",
      website: "",
    },
  });

  // useEffect(() => {
  //   if (userProfile) {
  //     form.setValue("fullname", userProfile.name);
  //     form.setValue("email", userProfile.email);
  //     form.setValue("username", userProfile.username);
  //     form.setValue("bio", userProfile.profile ? userProfile.profile.bio : "");
  //     form.setValue(
  //       "website",
  //       userProfile.profile ? userProfile.profile.website : ""
  //     );
  //     setImageURL(userProfile.profile ? userProfile.profile?.image : null);
  //   }
  // }, [userProfile, form]);

  const imageRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<File>();

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      const formData = new FormData();
      formData.append("image", file);
      try {
        // await editProfileImage(formData).unwrap();
      } catch (err) {
        console.log(err);
        alert("ERROR aayo");
      }
    }
  };

  const handleButtonClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  // const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // await editProfile({
      //   name: values.fullname,
      //   username: values.username,
      //   bio: values.bio,
      //   website: values.website,
      // }).unwrap();
      // toast({
      //   title: "Profile Updated",
      //   description: "Profile Updated Successfully",
      // });
    } catch (er: any) {
      alert("ERROR");
      // toast({
      //   title: "Error!",
      //   description: "Error has occured",
      //   variant: "destructive",
      // });
    }
  }
  return (
    <div className="w-full">
      {/* {!userProfile?.isEmailVerifed && (
        <div className="bg-blue-50 rounded-xl flex justify-between items-center p-2">
          <div>
            <h1 className="text-primary">You are not verified.</h1>
            <p className="text-sm text-gray-500">
              You need to be verified to use complete features.
            </p>
          </div>
          <Button variant={"destructive"} size={"sm"} onClick={() => {}}>
            Verify Email
          </Button>
        </div>
      )} */}

      <br />
      <div className="flex justify-center items-center flex-col gap-2">
        <div className="relative">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src={
                imageURL
                  ? "https://media.licdn.com/dms/image/v2/D4E03AQHPJhaC-ZPuLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687282985694?e=1731542400&v=beta&t=vhgLApdUVttNlLhexVe5VfFK1BIN0A3gmf7UYrLCvbs"
                  : undefined
              }
              alt="avatar"
            />
            <AvatarFallback>
              {/* {userProfile?.name.split("")[0]} */}AB
            </AvatarFallback>
          </Avatar>
          {/* {userProfile?.isEmailVerifed && (
            <div className="w-6 h-6 bg-primary absolute right-1 border-2 border-white bottom-0 text-white flex justify-center items-center rounded-full">
              <Check size={16} />
            </div>
          )} */}
        </div>
        <input
          type="file"
          ref={imageRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <Button variant={"secondary"} onClick={handleButtonClick}>
          Change Photo
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Anil Chitrakar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="anil@creig.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="www.example.com" {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <br />
          <Button type="submit" className="w-fit bg-main">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
}
