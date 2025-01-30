import Image from "next/image";
import Herosection from "./_components/mainpages/Herosection";
import MainSection from "./_components/mainpages/Mainsection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <MainSection />
    </div>
  );
}
