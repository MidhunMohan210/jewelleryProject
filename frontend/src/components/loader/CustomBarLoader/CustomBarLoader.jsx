import { BarLoader } from "react-spinners";

function CustomBarLoader() {
  return (
    <div>
      <BarLoader color="gray" width="100%" className="mt-[0.3px] z-50" />
    </div>
  );
}

export default CustomBarLoader;