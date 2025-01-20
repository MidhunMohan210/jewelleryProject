import InputSection from "@/components/subDetails/InputSection";
import SubDetailList from "@/components/subDetails/subDetailList";

function Brand() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header section */}
      <div className="sticky top-0 z-10">
        <InputSection title="Brand" />
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto bg-gray-900 p-4 scrollbar-none">
        <SubDetailList formType={"brand"} />
      </div>
    </div>
  );
}

export default Brand;
