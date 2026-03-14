export const initialStock = [
  // Carnes y Aves
  { id: 1, name: 'Asado', category: 'Carnes y Aves', price: 15000, originalPrice: 18000, stock: 45, unit: 'kg', status: 'in-stock', discount: 17 },
  { id: 2, name: 'Pollo Entero', category: 'Carnes y Aves', price: 8500, originalPrice: 9500, stock: 32, unit: 'kg', status: 'in-stock', discount: 11 },
  { id: 3, name: 'Chorizo Paraguayo', category: 'Carnes y Aves', price: 12000, originalPrice: null, stock: 18, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 4, name: 'Vacio', category: 'Carnes y Aves', price: 18000, originalPrice: null, stock: 28, unit: 'kg', status: 'in-stock', discount: 0 },

  // Lacteos
  { id: 5, name: 'Leche Entera La Vaqueita', category: 'Lácteos', price: 5200, originalPrice: 5800, stock: 120, unit: 'unidades', status: 'in-stock', discount: 10 },
  { id: 6, name: 'Queso Paraguay', category: 'Lácteos', price: 9500, originalPrice: null, stock: 8, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 7, name: 'Manteca La Paulina', category: 'Lácteos', price: 4800, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 8, name: 'Yogur Natural', category: 'Lácteos', price: 3500, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0 },

  // Frutas y Verduras
  { id: 9, name: 'Mandarina', category: 'Frutas y Verduras', price: 4500, originalPrice: null, stock: 52, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 10, name: 'Tomate', category: 'Frutas y Verduras', price: 3800, originalPrice: 4500, stock: 68, unit: 'kg', status: 'in-stock', discount: 16 },
  { id: 11, name: 'Cebolla', category: 'Frutas y Verduras', price: 2500, originalPrice: null, stock: 85, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 12, name: 'Locoto', category: 'Frutas y Verduras', price: 8000, originalPrice: null, stock: 15, unit: 'kg', status: 'low-stock', discount: 0 },
  { id: 13, name: 'Zapallo', category: 'Frutas y Verduras', price: 3200, originalPrice: null, stock: 42, unit: 'kg', status: 'in-stock', discount: 0 },

  // Bebidas
  { id: 14, name: 'Coca Cola 2L', category: 'Bebidas', price: 7500, originalPrice: 8500, stock: 150, unit: 'unidades', status: 'in-stock', discount: 12 },
  { id: 15, name: 'Tereré Orgánico', category: 'Bebidas', price: 12000, originalPrice: null, stock: 58, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 16, name: 'Cerveza Brahma', category: 'Bebidas', price: 8500, originalPrice: null, stock: 200, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 17, name: 'Jugo Pulp', category: 'Bebidas', price: 4200, originalPrice: null, stock: 5, unit: 'unidades', status: 'low-stock', discount: 0 },
  { id: 18, name: 'Agua Mineral', category: 'Bebidas', price: 2800, originalPrice: null, stock: 180, unit: 'unidades', status: 'in-stock', discount: 0 },

  // Almacén
  { id: 19, name: 'Arroz Doña Berta', category: 'Almacén', price: 6500, originalPrice: 7200, stock: 85, unit: 'unidades', status: 'in-stock', discount: 10 },
  { id: 20, name: 'Fideos Lucchetti', category: 'Almacén', price: 3200, originalPrice: null, stock: 110, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 21, name: 'Aceite Girasol', category: 'Almacén', price: 9800, originalPrice: 11000, stock: 72, unit: 'unidades', status: 'in-stock', discount: 11 },
  { id: 22, name: 'Azúcar Refinada', category: 'Almacén', price: 5500, originalPrice: null, stock: 12, unit: 'unidades', status: 'low-stock', discount: 0 },
  { id: 23, name: 'Harina de Trigo', category: 'Almacén', price: 4200, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 24, name: 'Sal Fina', category: 'Almacén', price: 2100, originalPrice: null, stock: 130, unit: 'unidades', status: 'in-stock', discount: 0 },

  // Panadería
  { id: 25, name: 'Pan de Miga', category: 'Panadería', price: 5000, originalPrice: null, stock: 45, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 26, name: 'Chipá', category: 'Panadería', price: 3500, originalPrice: 4000, stock: 6, unit: 'unidades', status: 'low-stock', discount: 13 },
  { id: 27, name: 'Tortilla Paraguaya', category: 'Panadería', price: 4500, originalPrice: null, stock: 28, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 28, name: 'Medialunas', category: 'Panadería', price: 2800, originalPrice: null, stock: 38, unit: 'unidades', status: 'in-stock', discount: 0 },

  // Limpieza
  { id: 29, name: 'Detergente Ala', category: 'Limpieza', price: 8500, originalPrice: 9800, stock: 65, unit: 'unidades', status: 'in-stock', discount: 13 },
  { id: 30, name: 'Jabón en Polvo', category: 'Limpieza', price: 12000, originalPrice: null, stock: 42, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 31, name: 'Papel Higiénico Elite', category: 'Limpieza', price: 15500, originalPrice: 18000, stock: 9, unit: 'unidades', status: 'low-stock', discount: 14 },
  { id: 32, name: 'Limpiador Multiuso', category: 'Limpieza', price: 6800, originalPrice: null, stock: 55, unit: 'unidades', status: 'in-stock', discount: 0 },

  // More Carnes y Aves
  { id: 33, name: 'Milanesa de Pollo', category: 'Carnes y Aves', price: 11000, originalPrice: 13000, stock: 25, unit: 'kg', status: 'in-stock', discount: 15 },
  { id: 34, name: 'Costilla de Cerdo', category: 'Carnes y Aves', price: 9000, originalPrice: null, stock: 35, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 35, name: 'Pechuga de Pollo', category: 'Carnes y Aves', price: 12000, originalPrice: null, stock: 40, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 36, name: 'Carne Molida', category: 'Carnes y Aves', price: 14000, originalPrice: null, stock: 22, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 37, name: 'Panceta', category: 'Carnes y Aves', price: 16000, originalPrice: 18000, stock: 18, unit: 'kg', status: 'in-stock', discount: 11 },

  // More Lácteos
  { id: 38, name: 'Leche Descremada', category: 'Lácteos', price: 5100, originalPrice: null, stock: 88, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 39, name: 'Queso Cremoso', category: 'Lácteos', price: 11000, originalPrice: null, stock: 45, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 40, name: 'Ricotta', category: 'Lácteos', price: 7500, originalPrice: null, stock: 30, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 41, name: 'Dulce de Leche', category: 'Lácteos', price: 6800, originalPrice: 7500, stock: 52, unit: 'unidades', status: 'in-stock', discount: 9 },
  { id: 42, name: 'Crema de Leche', category: 'Lácteos', price: 5500, originalPrice: null, stock: 38, unit: 'unidades', status: 'in-stock', discount: 0 },

  // More Frutas y Verduras
  { id: 43, name: 'Banana', category: 'Frutas y Verduras', price: 3500, originalPrice: null, stock: 75, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 44, name: 'Naranja', category: 'Frutas y Verduras', price: 4200, originalPrice: null, stock: 60, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 45, name: 'Lechuga', category: 'Frutas y Verduras', price: 2800, originalPrice: null, stock: 48, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 46, name: 'Zanahoria', category: 'Frutas y Verduras', price: 3200, originalPrice: null, stock: 55, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 47, name: 'Papa', category: 'Frutas y Verduras', price: 2800, originalPrice: 3500, stock: 90, unit: 'kg', status: 'in-stock', discount: 20 },
  { id: 48, name: 'Batata', category: 'Frutas y Verduras', price: 3000, originalPrice: null, stock: 35, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 49, name: 'Morrón', category: 'Frutas y Verduras', price: 6500, originalPrice: null, stock: 28, unit: 'kg', status: 'in-stock', discount: 0 },
  { id: 50, name: 'Ajo', category: 'Frutas y Verduras', price: 12000, originalPrice: null, stock: 20, unit: 'kg', status: 'in-stock', discount: 0 },

  // More Bebidas
  { id: 51, name: 'Pepsi 2L', category: 'Bebidas', price: 7200, originalPrice: 8000, stock: 125, unit: 'unidades', status: 'in-stock', discount: 10 },
  { id: 52, name: 'Sprite 2L', category: 'Bebidas', price: 7300, originalPrice: null, stock: 110, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 53, name: 'Cerveza Pilsen', category: 'Bebidas', price: 8200, originalPrice: null, stock: 175, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 54, name: 'Yerba Mate Selecta', category: 'Bebidas', price: 18500, originalPrice: 21000, stock: 85, unit: 'unidades', status: 'in-stock', discount: 12 },
  { id: 55, name: 'Café Torrado', category: 'Bebidas', price: 12500, originalPrice: null, stock: 72, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 56, name: 'Gaseosa Guaraná', category: 'Bebidas', price: 6800, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 57, name: 'Agua Saborizada', category: 'Bebidas', price: 3200, originalPrice: null, stock: 140, unit: 'unidades', status: 'in-stock', discount: 0 },

  // More Almacén
  { id: 58, name: 'Fideos Mostachol', category: 'Almacén', price: 3100, originalPrice: null, stock: 98, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 59, name: 'Arroz Largo Fino', category: 'Almacén', price: 6800, originalPrice: 7500, stock: 75, unit: 'unidades', status: 'in-stock', discount: 9 },
  { id: 60, name: 'Aceite de Oliva', category: 'Almacén', price: 18500, originalPrice: 22000, stock: 28, unit: 'unidades', status: 'in-stock', discount: 16 },
  { id: 61, name: 'Vinagre', category: 'Almacén', price: 2800, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 62, name: 'Mayonesa', category: 'Almacén', price: 5200, originalPrice: null, stock: 88, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 63, name: 'Ketchup', category: 'Almacén', price: 4800, originalPrice: null, stock: 92, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 64, name: 'Mostaza', category: 'Almacén', price: 3500, originalPrice: null, stock: 58, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 65, name: 'Salsa de Tomate', category: 'Almacén', price: 3200, originalPrice: null, stock: 105, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 66, name: 'Porotos', category: 'Almacén', price: 4500, originalPrice: null, stock: 78, unit: 'unidades', status: 'in-stock', discount: 0 },

  // More Panadería
  { id: 69, name: 'Pan Francés', category: 'Panadería', price: 3200, originalPrice: null, stock: 52, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 70, name: 'Facturas', category: 'Panadería', price: 2800, originalPrice: null, stock: 35, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 71, name: 'Galletas de Agua', category: 'Panadería', price: 4200, originalPrice: null, stock: 68, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 72, name: 'Galletas Dulces', category: 'Panadería', price: 4800, originalPrice: 5500, stock: 42, unit: 'unidades', status: 'in-stock', discount: 13 },
  { id: 73, name: 'Tostadas', category: 'Panadería', price: 3800, originalPrice: null, stock: 55, unit: 'unidades', status: 'in-stock', discount: 0 },

  // More Limpieza
  { id: 74, name: 'Lavandina', category: 'Limpieza', price: 4500, originalPrice: null, stock: 72, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 75, name: 'Jabón Líquido', category: 'Limpieza', price: 6800, originalPrice: 7800, stock: 58, unit: 'unidades', status: 'in-stock', discount: 13 },
  { id: 76, name: 'Suavizante', category: 'Limpieza', price: 8500, originalPrice: null, stock: 48, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 77, name: 'Esponja de Acero', category: 'Limpieza', price: 2500, originalPrice: null, stock: 85, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 78, name: 'Trapo de Piso', category: 'Limpieza', price: 12000, originalPrice: null, stock: 32, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 79, name: 'Desodorante de Ambiente', category: 'Limpieza', price: 5500, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0 },
  { id: 80, name: 'Toallas de Papel', category: 'Limpieza', price: 4200, originalPrice: null, stock: 78, unit: 'unidades', status: 'in-stock', discount: 0 },
]

export const categories = ['Todos', 'Carnes y Aves', 'Lácteos', 'Frutas y Verduras', 'Bebidas', 'Almacén', 'Panadería', 'Limpieza']
