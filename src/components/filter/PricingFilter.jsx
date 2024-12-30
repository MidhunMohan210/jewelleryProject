import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

function PricingFilter() {
  const [price, setPrice] = useState(33);

  const handleSliderChange = (value) => {
    setPrice(value[0]);
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-gray-800">Pricing Filter</p>
          </AccordionTrigger>
          <AccordionContent>
            <Slider
              className="mt-3"
              defaultValue={[33]}
              max={10000}
              step={100}
              onValueChange={handleSliderChange}
            />
            <p className="mt-4 text-left text-gray-600">
              Selected Price : ₹1000 - ₹ {price}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default PricingFilter;
