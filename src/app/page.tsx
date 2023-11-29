import Image from "next/image";
import Navbar from "./components/Navbar";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Forth from "./components/Forth";
import Test from "./components/test";

export default function Home() {
  return (
    <main className=" bg-white min-h-screen">
      <Navbar />
      <First />
      <Second />
      <Third />
      <Forth />
      <Test />
    </main>
  );
}
