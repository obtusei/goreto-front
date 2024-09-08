import LogoIcon from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

export default function Landing({}: Props) {
  return (
    <div className="p-10">
      {/* NAV */}
      <nav className="flex justify-between items-center">
        <LogoIcon size="40" />
        <div className="flex gap-4">
          <Button variant={"ghost"}>Product</Button>
          <Button variant={"ghost"}>Pricing</Button>
          <Button variant={"ghost"}>Features</Button>
          <Button variant={"ghost"}>Product</Button>
        </div>
        <div className="flex gap-4">
          <Button>Log in</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
      <main className="grid grid-cols-2 h-[80vh] place-content-center place-items-center">
        <div className="p-10">
          <h1 className="text-8xl font-semibold">
            Best <span className="text-primary">Travel</span> Application Ever
            created by Human Beings.
          </h1>
          <br />
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quidem voluptate, sed suscipit hic aliquam esse officia, libero
            blanditiis labore ducimus ad nulla dolorum odio repudiandae facere
            amet delectus repellat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem quidem voluptate, sed suscipit hic aliquam
            esse officia, libero blanditiis labore ducimus ad nulla dolorum odio
            repudiandae facere amet delectus repellat.
          </p>
          <br />
          <div className="flex gap-4">
            <Button className="" variant={"outline"}>
              Our Features
            </Button>
            <Button className="gap-4">
              Sign Up <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        <div>
          <img src="/hero.svg" className="w-[600px]" alt="" />
        </div>
      </main>
      {/* HERO */}
      {/* HERO 2 */}
      {/* FEATURE */}
      {/* FOOTER */}
    </div>
  );
}
