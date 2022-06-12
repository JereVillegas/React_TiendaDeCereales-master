const products = [
  {
    id: "1",
    name: "Copos de Maíz Tradicional",
    description: "Cereales de maíz crocantes y livianos ",
    price: "300",
    img: "https://http2.mlstatic.com/D_NQ_NP_827038-MLA49771735694_042022-O.webp",
    category: "Tradicional",
  },
  {
    id: "2",
    name: "Granola Crocante con Almendras y Pasas",
    description: "Mix de cereales, coco, miel, almendras y pasas de uva ",
    price: "350",
    img: "https://http2.mlstatic.com/D_NQ_NP_746850-MLA49771663543_042022-O.webp",
    category: "Granola",
  },
  {
    id: "3",
    name: "Bocaditos de Avena",
    description: "Cereales de avena y trigo ",
    price: "200",
    img: "https://http2.mlstatic.com/D_NQ_NP_984404-MLA46950528396_082021-O.webp",
    category: "Almohaditas",
  },
  {
    id: "4",
    name: "Fibra Total con Pasas",
    description: "Cereales de harina integral, salvado extra y miel ",
    price: "250",
    img: "https://http2.mlstatic.com/D_NQ_NP_611180-MLA46925490772_072021-O.webp",
    category: "Integral",
  },
  {
    id: "5",
    name: "Skarchitos",
    description: "Cereales de maíz endulzados con azúcar",
    price: "150",
    img: "https://http2.mlstatic.com/D_NQ_NP_755776-MLA47751249745_102021-O.webp",
    category: "Niños",
  },
];

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
};

export const getProductByID = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.find((products) => products.id === id));
    }, 2000);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products.filter((products) => products.category === categoryId));
    }, 2000);
  });
};
