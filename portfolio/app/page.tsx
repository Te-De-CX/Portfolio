import Page from "./home/page";
import CustomCursor from "@/components/Lib/cursor";

export default function RootPage() {
  return (
    <div className="group">
      <CustomCursor />
      <Page />
    </div>
  );
}