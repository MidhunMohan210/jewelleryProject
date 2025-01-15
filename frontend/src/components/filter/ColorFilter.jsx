import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { colors } from "@/data/filters/colors";
import { Check } from "lucide-react";
  import { useState } from "react";

  
  function ColorFilter() {
    const [selectedColor, setSelectedColor] = useState(null);
  
    const handleColorClick = (color) => {
      setSelectedColor(color);
    };
  
    return (
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p className="text-gray-800">Colors</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer shadow-md`}
                    style={{ backgroundColor: `${color.color}95` }} // Adding transparency for a lighter shade
                    onClick={() => handleColorClick(color.name)}
                  >
                    {selectedColor === color.name && (
                      <span className="text-white  font-bold">  <Check size={16} /></span>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  
  export default ColorFilter;
  