const productsData = [
    {
      id: 1,
      label: "19% OFF",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1-576x576.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2-576x576.jpg",
      category: "EARNINGS",
      material: "SILVER",
      sizes: ["S", "L", "M"],
      status: "Out Of Stock",
      name: "Circle of Light Heart Earrings",
      price: "$249.00",
      button: "ADD TO CART"
    },
    {
      id: 2,
      label: "HOT",
      image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-576x576.jpg",
      sizes: ["S", "L", "M"],
      category: "EARNINGS",
      status: "In Stock",
      material: "PLATINUM",
      name: "Blue Stripes & Stone Earrings",
      price: "$249.00"
    },
    {
      id: 3,
      label: "20% OFF",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-576x576.jpg",
      sizes: ["S", "L", "M"],
      status: "In Stock",
      category: "NECKLACES",
      material: "DIAMOND",
      name: "Birds of Paradise Pendant",
      price: "$159.00",
      oldPrice: "$199.00"
    },
    {
      id: 4,
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-1-360x360.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Pandora-Flower-Stem-Earrings-2-360x360.jpg",
      sizes: ["S", "L", "M"],
      status: "In Stock",
      category: "EARNINGS",
      material: "GOLD",
      name: "Circle of Light Heart Earrings",
      price: "$249.00",
      button: "ADD TO CART"
    },
    {
      id: 5,
      label: "OUT OF STOCK",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-2-360x360.jpg",
      sizes: ["S", "L", "M"],
      status: "In Stock",
      category: "EARNINGS",
      material: "PLATINUM",
      name: "Blue Stripes & Stone Earrings",
      price: "$249.00"
    },
    {
      id: 6,
      label: "HOT",
      sizes: ["S", "L", "M"],
      status: "In Stock",
      image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Necklace-Extension-Piece-2-576x576.jpg",
      category: "NECKLACES",
      material: "SILVER",
      name: "Birds of Paradise Pendant",
      price: "$159.00",
      oldPrice: "$199.00"
    },
    {
      id: 7,
      label: "25% OFF",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-1-576x576.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Four-Leaf-Clover-Rings-2-576x576.jpg",
      category: "RING",
      material: "GOLD",
      sizes: ["S", "M"],
      status: "In Stock",
      name: "Four-Leaf-Clover-Rings",
      price: "$299.00",
      oldPrice: "$399.00"
    },
    {
      id: 8,
      label: "HOT",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-576x576.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-2-576x576.jpg",
      category: "RINGS",
      material: "RUBY",
      sizes: ["M", "L"],
      status: "In Stock",
      name: "Elegant Ruby Ring",
      price: "$499.00"
    },
    {
      id: 9,
      label: "NEW",
      image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Love-Both-Engagement-Ring-2-576x576.jpg",
      category: "BRACELETS",
      material: "PLATINUM",
      sizes: ["M", "L"],
      status: "In Stock",
      name: "Platinum Charm Bracelet",
      price: "$699.00"
    },
    {
      id: 10,
      label: "LIMITED",
      image: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-576x576.jpg",
      image1: "	https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-2-576x576.jpg",
      category: "EARNINGS",
      material: "AMETHYST",
      sizes: ["S", "M"],
      status: "Out Of Stock",
      name: "Amethyst Stud Earrings",
      price: "$349.00"
    },
    {
      id: 11,
      label: "NEW ARRIVAL",
      image: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-1-576x576.jpg",
      image1: "https://alukas.presslayouts.com/wp-content/uploads/2023/02/Reflections-Gold-Rings-2-576x576.jpg",
      category: "RINGS",
      material: "GOLD",
      sizes: ["S", "M", "L"],
      status: "In Stock",
      name: "Brilliant Reflection Ring",
      price: "$1299.00"
    }
  ];
  
  export default productsData;
  