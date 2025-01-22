import InputSection from "@/components/subDetails/InputSection";

function SubCategory() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header section */}
      <div className="sticky top-0 z-10">
        <InputSection title="SubCategory" />
      </div>
    </div>
  );
}

export default SubCategory;
