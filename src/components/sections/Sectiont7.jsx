/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import ProductCard from '../product/ProductCard';
import { HomeProducts } from '@/data/HomeProduct';



const Sectiont7 = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const categories = ['ALL', 'DIAMOND', 'GOLD', 'PLATINUM'];



  const filteredHomeProducts = activeCategory === 'ALL' 
    ? HomeProducts 
    : HomeProducts.filter(product => product.category === activeCategory);

  return (
    <div className="w-3/4 overflow-hidden mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium mb-2">Recent Arrivals</h2>
        <p className="text-gray-500">Aliquam tincidunt mauris eurisus</p>
      </div>

      <div className="flex justify-center gap-8 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <Carousel className="relative">
        <CarouselContent className="-ml-4">
          {filteredHomeProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-4 basis-10/12 md:basis-1/3">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Sectiont7;