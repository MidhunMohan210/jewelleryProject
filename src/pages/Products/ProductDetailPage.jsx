import { useLocation } from "react-router-dom";
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoIosCloseCircle } from "react-icons/io";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ProductDetailAccordion from "@/components/accordion/ProductDetailAccordion";
import SimilarProduct from "@/components/product/SimilarProduct";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

function ProductDetailPage() {
  const location = useLocation();
  const productDetail = location?.state?.product;
  const [selectedImage, setSelectedImage] = useState(
    productDetail?.subImages[0]
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const index = productDetail?.subImages?.findIndex(
      (img) => img === selectedImage
    );
    if (index !== -1) setCurrentImageIndex(index);
  }, [selectedImage]);

  const handleMouseMove = (e) => {
    if (!isZoomed || !isExpanded) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleExpand = () => {
    setIsExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsZoomed(false);
    document.body.style.overflow = "unset";
  };
  const navigateImage = (direction) => {
    console.log("navigateImage", direction, currentImageIndex);
    const newIndex = currentImageIndex + direction;
    if (newIndex >= 0 && newIndex < productDetail?.subImages?.length) {
      setSelectedImage(productDetail?.subImages[newIndex]);
      setCurrentImageIndex(newIndex);
    } else {
      console.log("Attempted to navigate outside of image array bounds.");
    }
  };

  const handleKeyDown = (e) => {
    if (!isExpanded) return;
    if (e.key === "Escape") handleClose();
    if (e.key === "ArrowLeft") navigateImage(-1);
    if (e.key === "ArrowRight") navigateImage(1);
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded, currentImageIndex]);

  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            <IoIosCloseCircle />
          </button>

          {/* <button
            onClick={() => {navigateImage(-1)}}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            // disabled={currentImageIndex === 0}
          >
           <MdArrowBackIosNew />
          </button> */}

          <button
            onClick={() => {
              navigateImage(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 sm:text-white text-4xl hover:text-gray-400 sm:hover:text-gray-300 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-10"
            style={{ zIndex: 10 }} // Ensure the button appears on top of other elements
          >
            <MdArrowBackIosNew />
          </button>

          <div
            className="w-full max-w-7xl h-full flex items-center justify-center p-4 relative"
            onMouseMove={handleMouseMove}
            onDoubleClick={handleDoubleClick}
          >
            <img
              src={selectedImage}
              alt="expanded view"
              className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
                isZoomed ? "scale-150" : ""
              }`}
              style={
                isZoomed
                  ? {
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                    }
                  : undefined
              }
            />
          </div>

          <button
            onClick={() => navigateImage(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 sm:text-white text-4xl hover:text-gray-400 sm:hover:text-gray-300  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              currentImageIndex === productDetail?.subImages?.length - 1
            }
          >
            <MdArrowForwardIos />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {productDetail?.subImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`thumbnail-${index}`}
                className={`w-16 h-16 object-cover cursor-pointer border-2 ${
                  selectedImage === image
                    ? "border-white"
                    : "border-transparent"
                } hover:border-gray-300 transition-colors`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      )}

      <section className="text-gray-700 body-font overflow-hidden bg-white  py-10 pt-16 jost">
        <BreadCrumb
          tab1="Home"
          tab1Path="/"
          tab2="Products"
          tab2Path="/products"
          tab3="Product Detail"
          tab3Path="/productDetail/1"
        />

        <div className="container">
          <div className="lg:w-full flex flex-wrap">
            <section className="lg:w-1/2 w-full">
              <div className="flex flex-col sm:flex-row-reverse w-full gap-4">
                <div
                  ref={imageRef}
                  className="w-full relative overflow-hidden cursor-zoom-in group"
                  onClick={handleExpand}
                >
                  <img
                    alt="ecommerce"
                    className="w-full h-[400px] sm:h-[400px] lg:h-[500px] object-cover object-center border border-gray-300 transition-transform duration-200 group-hover:scale-105"
                    src={selectedImage}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>

                <div className="flex flex-row sm:flex-col gap-2 overflow-x-auto sm:gap-2">
                  {productDetail?.subImages?.map((image, index) => (
                    <img
                      onClick={() => setSelectedImage(image)}
                      key={index}
                      alt={`product-${index}`}
                      className={`cursor-pointer ${
                        selectedImage === image
                          ? "border-2 border-gray-300"
                          : ""
                      } w-24 h-24 sm:w-40 sm:h-32 flex-shrink-0 object-cover object-center border border-gray-300 hover:opacity-80 transition-opacity`}
                      src={image}
                    />
                  ))}
                </div>
              </div>
            </section>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productDetail?.brandName}
              </h2>
              <h1 className="text-headingColor text-2xl sm:text-3xl title-font font-bold mb-1 jost_heading">
                {productDetail?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) =>
                    index < productDetail?.rating ? (
                      <IoMdStar
                        key={index}
                        className="text-2xl text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <IoMdStarOutline
                        key={index}
                        className="text-2xl text-gray-400 cursor-pointer"
                      />
                    )
                  )}
                  <span className="text-gray-600 ml-3 jost">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed jost">
                {productDetail?.description}
              </p>

              <div className="flex flex-col mt-4 gap-2 pb-5 border-b-2 border-gray-200 mb-5">
                <p className="text-sm title-font text-gray-500">
                  Category: {productDetail?.category}
                </p>
                <p className="text-sm title-font text-gray-500">
                  Material: {productDetail?.material}
                </p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div> */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <Select>
                    <SelectTrigger className="w-[180px] no-focus-box">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {productDetail?.sizes?.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-xl sm:text-2xl text-gray-900 jost_heading">
                  ₹ {productDetail?.price}
                </span>
                <button className="flex ml-auto text-white bg-gray-700 border-0 py-2 px-6 rounded-md 
                   focus:outline-none hover:bg-gray-700 hover:shadow-lg hover:scale-105 
                   transition-all duration-300 ease-in-out">
  Add to Wishlist
</button>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300 transition-colors">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* more information section */}

      <section className=" py-5  ">
        <ProductDetailAccordion />
      </section>

      <section className="  pb-20 ">
        <SimilarProduct />
      </section>
    </>
  );
}

export default ProductDetailPage;
