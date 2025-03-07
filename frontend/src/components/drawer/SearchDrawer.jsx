import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/Button";

function SearchDrawer() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <FiSearch className="h-6 w-6 mt-[6px]" />
        </DrawerTrigger>
        <DrawerContent className="rounded-t-[30px] py-4 px-4 max-h-[500px]">
          <DrawerHeader>
            <DrawerTitle className="text-left ml-1 mb-5">Search</DrawerTitle>
            <div className="relative">
              <Input
                className="rounded-full bg-gray-200 pl-10 h-[50px] no-focus-box"
                placeholder="Search..."
              />
              <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
            </div>
          </DrawerHeader>
          <DrawerFooter>
            {/* Submit Button with proper rounded-full */}
            <Button
              className="w-full rounded-full mt-2 bg-gray-700 text-white"
              style={{ borderRadius: "9999px" }}
            >
              Submit
            </Button>
            <DrawerClose>
              <Button
                className="w-full rounded-full mt-2"
                variant="outline"
                style={{ borderRadius: "9999px" }}
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SearchDrawer;
