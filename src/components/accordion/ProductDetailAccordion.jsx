import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetailAccordion = () => {
  return (
    <div className="w-full  mx-auto">
      <Accordion type="single" collapsible className="w-full jost">
        <AccordionItem value="description">
          <AccordionTrigger className="text-lg font-medium">Description</AccordionTrigger>
          <AccordionContent className="text-gray-600 space-y-4">
            <p>
              The Kalvesna Diamond Twig Ring is a stunning piece of jewelry that combines natural beauty with elegant design. This unique ring features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Handcrafted twig-inspired band made from sterling silver</li>
              <li>Ethically sourced diamonds set in organic patterns</li>
              <li>Available in multiple sizes and finishes</li>
            </ul>
            {/* <p>
              Each ring is individually crafted by our expert artisans, ensuring that no two pieces are exactly alike. The organic design draws inspiration from nature's beauty, making it perfect for those who appreciate both refined elegance and natural aesthetics.
            </p> */}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="additional-information">
          <AccordionTrigger className="text-lg font-medium">Additional Information</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            <div className="grid grid-cols-2 gap-4">
              <div className="font-medium">Material</div>
              <div>Sterling Silver</div>
              
              <div className="font-medium">Stone</div>
              <div>Natural Diamond</div>
              
              <div className="font-medium">Sizes Available</div>
              <div>US 5-12</div>
              
              <div className="font-medium">Finish</div>
              <div>Polished, Matte</div>
              
              <div className="font-medium">Width</div>
              <div>2-3mm</div>
              
              <div className="font-medium">Care Instructions</div>
              <div>Clean with jewelry cloth, avoid harsh chemicals</div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="reviews">
          <AccordionTrigger className="text-lg font-medium">Reviews</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-semibold">Customer Reviews</div>
                <div className="text-sm text-gray-500">(15 reviews)</div>
              </div>
              
              {/* Sample Review */}
              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Sarah M.</div>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
                <div className="text-sm text-gray-600">
                  Absolutely beautiful ring! The craftsmanship is exceptional and it looks even better in person. I receive compliments every time I wear it.
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Michael R.</div>
                  <div className="text-yellow-400">★★★★☆</div>
                </div>
                <div className="text-sm text-gray-600">
                  Great quality ring with unique design. Sizing runs slightly small, but customer service was very helpful with the exchange process.
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductDetailAccordion;