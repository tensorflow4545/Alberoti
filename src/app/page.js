import Hero from "@/components/Home";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
   <>
    <div className="sm:grid hidden">
    <Navbar/>
    <Hero/>
    </div>

    <div className="sm:hidden">
    <Navbar/>
    <Hero/>
    <Sidebar/> 
    </div>
   </>
  );
}
