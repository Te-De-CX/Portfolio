
import First from "@/components/components/first";
import Technologies from "@/components/components/Technologies";
import Work from "@/components/UI/layouts/work";
import HomeAbout from "@/components/UI/layouts/about";

export default function RootPage() {
  return (
    <div className="group">
      <First />
      <Technologies />
      <Work />
      <HomeAbout />
    </div>
  );
}