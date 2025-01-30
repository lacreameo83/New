import Image from "next/image";
import Herosection from "./_components/mainpages/Herosection";
import MainSection from "./_components/mainpages/Mainsection";
import OverLine from "./_components/mainpages/Overline";
import TripleSection from "./_components/mainpages/TripleSection";
import OverlLine2 from "./_components/mainpages/Overline2";
import PopularAution from "./_components/mainpages/PopularAution";
import CustomersFeedback from "./_components/mainpages/Customerfeedback";

export default function Home() {
  return (
    <div>
      <Herosection />
      <MainSection />
      <OverLine />
      <TripleSection />
      <OverlLine2 />
      <PopularAution />
      <CustomersFeedback />
    </div>
  );
}
