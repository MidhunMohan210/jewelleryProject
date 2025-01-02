import { useState } from "react";
import productsData from "@/data/productData";
import Slider from "react-slick";
import ProductCard1 from "./ProductCard1";

function SimilarProduct() {
  const [similarProducts] = useState(productsData.slice(0, 3));

  const settings = {
    dots: true,
    infinite: similarProducts.length > 4, // Enable infinite scroll if more than 4 items
    speed: 500,
    slidesToShow: Math.min(similarProducts.length, 4), // Adjust slidesToShow dynamically
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(similarProducts.length, 3),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(similarProducts.length, 2),
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: Math.min(similarProducts.length, 1),
        },
      },
    ],
    dotsClass: "slick-dots",
  };

  return (
    <div className="container mx-auto basic-padding mt-10">
      <h2 className="text-2xl text-headingColor philosopher-bold font-semibold text-center my-6">
        Related Products
      </h2>

      <Slider  {...settings}>
        {similarProducts.map((product, index) => (
          <div key={index} className="px-2 ">
            <ProductCard1 product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimilarProduct;
