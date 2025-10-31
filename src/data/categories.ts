export const categories = {
  id: 1,
  name: "Electrónica",
  subcategories: [
    {
      id: 2,
      name: "Computadoras",
      subcategories: [
        { id: 5, name: "Laptops", subcategories: [] },
        { id: 6, name: "Desktops", subcategories: [] },
        { id: 7, name: "Monitores", subcategories: [] },
        { id: 8, name: "Periféricos", subcategories: [
            { id: 15, name: "Teclados", subcategories: [] },
            { id: 16, name: "Mouse", subcategories: [] },
            { id: 17, name: "Cámaras Web", subcategories: [] },
        ] },
      ],
    },
    {
      id: 3,
      name: "Celulares",
      subcategories: [
        { id: 9, name: "Smartphones", subcategories: [] },
        { id: 10, name: "Accesorios", subcategories: [
            { id: 18, name: "Cargadores", subcategories: [] },
            { id: 19, name: "Fundas", subcategories: [] },
        ] },
      ],
    },
    { 
      id: 4, 
      name: "Audio", 
      subcategories: [
        { id: 11, name: "Auriculares", subcategories: [] },
        { id: 12, name: "Bocinas", subcategories: [] },
        { id: 13, name: "Micrófonos", subcategories: [] },
      ],
    },
    {
      id: 14,
      name: "Accesorios",
      subcategories: [
        { id: 20, name: "Cables", subcategories: [] },
        { id: 21, name: "Adaptadores", subcategories: [] },
        { id: 22, name: "Baterías", subcategories: [] },
      ],
    },
  ],
};
