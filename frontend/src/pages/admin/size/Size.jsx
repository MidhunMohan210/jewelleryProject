import InputSection from "@/components/subDetails/InputSection";

function Size() {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed header section */}
      <div className="sticky top-0 z-10">
        <InputSection title="Size" />
      </div>
    </div>
  );
}

export default Size;
