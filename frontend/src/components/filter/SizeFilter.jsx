import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { sizes } from "@/data/filters/sizes";

function SizeFilter() {
  return (
    <Accordion type="single" collapsible className="">
    <AccordionItem value="item-2">
      <AccordionTrigger>
        <p className="text-gray-800">Sizes</p>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {sizes?.map((size, index) => (
            <div
              key={index}
              className={`px-3 py-1 border border-gray-300 rounded-sm cursor-pointer text-gray-800 shadow-lg hover:bg-gray-200`}
              onClick={() => console.log(`Selected size: ${size}`)}
            >
              {size}
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default SizeFilter
