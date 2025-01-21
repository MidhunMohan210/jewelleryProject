import InputSection from "@/components/subDetails/InputSection";

function Category() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header section */}
      <div className="sticky top-0 z-10">
        <InputSection title="Category" />
      </div>

     
    </div>
  );
}

export default Category;
