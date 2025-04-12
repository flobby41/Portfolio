import Hero from "@/components/home/Hero";
import WorkTogether from "@/components/home/WorkTogether";
import OpenSource from "@/components/home/OpenSource";

export default function Home() {
  return (
    <div className="section">
      <Hero />
      <WorkTogether />
      <OpenSource />
    </div>
  );
}
