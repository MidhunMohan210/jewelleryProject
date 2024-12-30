import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { status } from "@/data/filters/status";
import { Checkbox } from "../ui/checkbox";

function StatusFilter() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-gray-800">Status</p>
        </AccordionTrigger>
        {status.map((item, index) => (
          <AccordionContent key={index}>
            <p className="text-left text-gray-600 flex items-center gap-2">
              <Checkbox />
              {item?.name}
            </p>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}

export default StatusFilter;
