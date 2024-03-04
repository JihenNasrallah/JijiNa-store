
import Services from "./components/Services";
import OurStory from "./components/OurStory";
import Stats from "./components/Stats";
import Team from "./components/Team";


export default function About() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-5 pr-5">

      <div className="mt-10 mr-100 h-5 justify-start items-center gap-3 inline-flex">
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          Home
        </div>
        <div className="opacity-50 text-black text-sm font-normal leading-tight">
          /
        </div>
        <div className="text-black text-sm font-normal leading-tight">
          About
        </div>
      </div>
  
      <OurStory />
      <Stats />
      <Team />
      <Services />
    </main>
  );
}