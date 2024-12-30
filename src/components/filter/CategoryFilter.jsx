import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categories } from "@/data/filters/categories";

function CategoryFilter() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="text-gray-800">Categories</p>
        </AccordionTrigger>
        {categories.map((category, index) => (
          <AccordionContent key={index}>
            <p className="text-left text-gray-600">{category}</p>
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}

export default CategoryFilter;
