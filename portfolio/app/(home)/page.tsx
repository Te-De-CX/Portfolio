
import First from "@/components/components/first";
import Technologies from "@/components/components/Technologies";
import Work from "@/components/UI/layouts/work";
import HomeAbout from "@/components/UI/layouts/about";
import Footer from "@/components/UI/layouts/footer";

export default function RootPage() {
  return (
    <div className="group">
      <First />
      <Technologies />
      <Work />
      <HomeAbout />
      <Footer />
    </div>
  );
}