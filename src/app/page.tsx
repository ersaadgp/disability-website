import { Landing } from "@/components/sections/landing";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Profile } from "@/components/sections/profile";
import { Partners } from "@/components/sections/partners";
import { Articles } from "@/components/sections/articles";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Landing />
      <HowWeWork />
      <Profile />
      <Partners />
      <Articles />
    </div>
  );
}
