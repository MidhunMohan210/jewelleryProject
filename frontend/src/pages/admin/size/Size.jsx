import InputSection from "@/components/subDetails/InputSection";
import SubDetailList from "@/components/subDetails/SubDetailList";

function Size() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header section */}
      <div className="sticky top-0 z-10">
        <InputSection title="Size" />
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto bg-gray-900 p-4 scrollbar-none">
        <SubDetailList />
      </div>
    </div>
  );
}

export default Size;
