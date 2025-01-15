import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import materials from "@/data/filters/materials";
import { Checkbox } from "@/components/ui/checkbox";
function MaterialFilter() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-gray-800">Material</p>
          </AccordionTrigger>
          {materials.map((material, index) => (
            <AccordionContent
              key={index}
              className="flex items-center gap-2 px-1"
            >
              <Checkbox />
              <p className="text-left text-gray-600">{material?.name}</p>
            </AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MaterialFilter;
