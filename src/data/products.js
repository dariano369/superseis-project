export const initialStock = [
  // Carnes y Aves
  { id: 1, name: 'Asado', nameEn: 'BBQ Ribs', nameGn: 'Asado', nameDe: 'Grillrippen', category: 'Carnes y Aves', price: 15000, originalPrice: 18000, stock: 45, unit: 'kg', status: 'in-stock', discount: 17, isNew: false, isPopular: true },
  { id: 2, name: 'Pollo Entero', nameEn: 'Whole Chicken', nameGn: 'Ryguasu Enteróva', nameDe: 'Ganzes Hähnchen', category: 'Carnes y Aves', price: 8500, originalPrice: 9500, stock: 32, unit: 'kg', status: 'in-stock', discount: 11, isNew: false, isPopular: true },
  { id: 3, name: 'Chorizo Paraguayo', nameEn: 'Paraguayan Sausage', nameGn: 'Chorizo Paraguái', nameDe: 'Paraguayische Wurst', category: 'Carnes y Aves', price: 12000, originalPrice: null, stock: 18, unit: 'kg', status: 'low-stock', discount: 0, isNew: false, isPopular: false },
  { id: 4, name: 'Vacio', nameEn: 'Flank Steak', nameGn: 'Vacio', nameDe: 'Flankensteak', category: 'Carnes y Aves', price: 18000, originalPrice: null, stock: 28, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Lacteos
  { id: 5, name: 'Leche Entera La Vaqueita', nameEn: 'La Vaqueita Whole Milk', nameGn: 'Kamby Enteróva La Vaqueita', nameDe: 'La Vaqueita Vollmilch', category: 'Lácteos', price: 5200, originalPrice: 5800, stock: 120, unit: 'unidades', status: 'in-stock', discount: 10, isNew: false, isPopular: true },
  { id: 6, name: 'Queso Paraguay', nameEn: 'Paraguay Cheese', nameGn: 'Kesu Paraguay', nameDe: 'Paraguay-Käse', category: 'Lácteos', price: 9500, originalPrice: null, stock: 8, unit: 'kg', status: 'low-stock', discount: 0, isNew: false, isPopular: false },
  { id: 7, name: 'Manteca La Paulina', nameEn: 'La Paulina Butter', nameGn: 'Manteca La Paulina', nameDe: 'La Paulina Butter', category: 'Lácteos', price: 4800, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 8, name: 'Yogur Natural', nameEn: 'Natural Yogurt', nameGn: 'Yogur Natural', nameDe: 'Naturjoghurt', category: 'Lácteos', price: 3500, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Frutas y Verduras
  { id: 9, name: 'Mandarina', nameEn: 'Tangerine', nameGn: 'Mandarina', nameDe: 'Mandarine', category: 'Frutas y Verduras', price: 4500, originalPrice: null, stock: 52, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: true },
  { id: 10, name: 'Tomate', nameEn: 'Tomato', nameGn: 'Tomate', nameDe: 'Tomate', category: 'Frutas y Verduras', price: 3800, originalPrice: 4500, stock: 68, unit: 'kg', status: 'in-stock', discount: 16, isNew: false, isPopular: false },
  { id: 11, name: 'Cebolla', nameEn: 'Onion', nameGn: 'Sevói', nameDe: 'Zwiebel', category: 'Frutas y Verduras', price: 2500, originalPrice: null, stock: 85, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 12, name: 'Locoto', nameEn: 'Hot Pepper', nameGn: 'Locoto', nameDe: 'Scharfe Paprika', category: 'Frutas y Verduras', price: 8000, originalPrice: null, stock: 15, unit: 'kg', status: 'low-stock', discount: 0, isNew: false, isPopular: false },
  { id: 13, name: 'Zapallo', nameEn: 'Squash', nameGn: 'Andaí', nameDe: 'Kürbis', category: 'Frutas y Verduras', price: 3200, originalPrice: null, stock: 42, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Bebidas
  { id: 14, name: 'Coca Cola 2L', nameEn: 'Coca Cola 2L', nameGn: 'Coca Cola 2L', nameDe: 'Coca Cola 2L', category: 'Bebidas', price: 7500, originalPrice: 8500, stock: 150, unit: 'unidades', status: 'in-stock', discount: 12, isNew: false, isPopular: true },
  { id: 15, name: 'Tereré Orgánico', nameEn: 'Organic Tereré', nameGn: 'Tereré Orgánico', nameDe: 'Bio-Tereré', category: 'Bebidas', price: 12000, originalPrice: null, stock: 58, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: true },
  { id: 16, name: 'Cerveza Brahma', nameEn: 'Brahma Beer', nameGn: 'Cerveza Brahma', nameDe: 'Brahma Bier', category: 'Bebidas', price: 8500, originalPrice: null, stock: 200, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 17, name: 'Jugo Pulp', nameEn: 'Pulp Juice', nameGn: 'Jugo Pulp', nameDe: 'Pulp Saft', category: 'Bebidas', price: 4200, originalPrice: null, stock: 5, unit: 'unidades', status: 'low-stock', discount: 0, isNew: false, isPopular: false },
  { id: 18, name: 'Agua Mineral', nameEn: 'Mineral Water', nameGn: 'Y Mineral', nameDe: 'Mineralwasser', category: 'Bebidas', price: 2800, originalPrice: null, stock: 180, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Almacén
  { id: 19, name: 'Arroz Doña Berta', nameEn: 'Doña Berta Rice', nameGn: 'Arroz Doña Berta', nameDe: 'Doña Berta Reis', category: 'Almacén', price: 6500, originalPrice: 7200, stock: 85, unit: 'unidades', status: 'in-stock', discount: 10, isNew: false, isPopular: true },
  { id: 20, name: 'Fideos Lucchetti', nameEn: 'Lucchetti Pasta', nameGn: 'Fideo Lucchetti', nameDe: 'Lucchetti Nudeln', category: 'Almacén', price: 3200, originalPrice: null, stock: 110, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 21, name: 'Aceite Girasol', nameEn: 'Sunflower Oil', nameGn: 'Aceite Girasol', nameDe: 'Sonnenblumenöl', category: 'Almacén', price: 9800, originalPrice: 11000, stock: 72, unit: 'unidades', status: 'in-stock', discount: 11, isNew: false, isPopular: false },
  { id: 22, name: 'Azúcar Refinada', nameEn: 'Refined Sugar', nameGn: 'Azúcar Refinada', nameDe: 'Raffinierter Zucker', category: 'Almacén', price: 5500, originalPrice: null, stock: 12, unit: 'unidades', status: 'low-stock', discount: 0, isNew: false, isPopular: false },
  { id: 23, name: 'Harina de Trigo', nameEn: 'Wheat Flour', nameGn: 'Harina Trigo', nameDe: 'Weizenmehl', category: 'Almacén', price: 4200, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 24, name: 'Sal Fina', nameEn: 'Fine Salt', nameGn: 'Juky Mimbýva', nameDe: 'Feines Salz', category: 'Almacén', price: 2100, originalPrice: null, stock: 130, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Panadería
  { id: 25, name: 'Pan de Miga', nameEn: 'Sliced Bread', nameGn: 'Pan de Miga', nameDe: 'Toastbrot', category: 'Panadería', price: 5000, originalPrice: null, stock: 45, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: true },
  { id: 26, name: 'Chipá', nameEn: 'Chipá (Cheese Bread)', nameGn: 'Chipá', nameDe: 'Chipá (Käsebrot)', category: 'Panadería', price: 3500, originalPrice: 4000, stock: 6, unit: 'unidades', status: 'low-stock', discount: 13, isNew: false, isPopular: true },
  { id: 27, name: 'Tortilla Paraguaya', nameEn: 'Paraguayan Tortilla', nameGn: 'Tortilla Paraguái', nameDe: 'Paraguayische Tortilla', category: 'Panadería', price: 4500, originalPrice: null, stock: 28, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 28, name: 'Medialunas', nameEn: 'Croissants', nameGn: 'Medialuna', nameDe: 'Croissants', category: 'Panadería', price: 2800, originalPrice: null, stock: 38, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // Limpieza
  { id: 29, name: 'Detergente Ala', nameEn: 'Ala Detergent', nameGn: 'Detergente Ala', nameDe: 'Ala Spülmittel', category: 'Limpieza', price: 8500, originalPrice: 9800, stock: 65, unit: 'unidades', status: 'in-stock', discount: 13, isNew: false, isPopular: false },
  { id: 30, name: 'Jabón en Polvo', nameEn: 'Powder Detergent', nameGn: 'Jabón Polvo-pe', nameDe: 'Waschpulver', category: 'Limpieza', price: 12000, originalPrice: null, stock: 42, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 31, name: 'Papel Higiénico Elite', nameEn: 'Elite Toilet Paper', nameGn: 'Papel Higiénico Elite', nameDe: 'Elite Toilettenpapier', category: 'Limpieza', price: 15500, originalPrice: 18000, stock: 9, unit: 'unidades', status: 'low-stock', discount: 14, isNew: false, isPopular: false },
  { id: 32, name: 'Limpiador Multiuso', nameEn: 'Multi-Purpose Cleaner', nameGn: 'Mopotĩha Multiuso', nameDe: 'Allzweckreiniger', category: 'Limpieza', price: 6800, originalPrice: null, stock: 55, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // More Carnes y Aves
  { id: 33, name: 'Milanesa de Pollo', nameEn: 'Chicken Cutlet', nameGn: 'Milanesa Ryguasu', nameDe: 'Hähnchenschnitzel', category: 'Carnes y Aves', price: 11000, originalPrice: 13000, stock: 25, unit: 'kg', status: 'in-stock', discount: 15, isNew: false, isPopular: false },
  { id: 34, name: 'Costilla de Cerdo', nameEn: 'Pork Ribs', nameGn: 'Costilla Kure', nameDe: 'Schweinerippchen', category: 'Carnes y Aves', price: 9000, originalPrice: null, stock: 35, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 35, name: 'Pechuga de Pollo', nameEn: 'Chicken Breast', nameGn: 'Pechuga Ryguasu', nameDe: 'Hähnchenbrust', category: 'Carnes y Aves', price: 12000, originalPrice: null, stock: 40, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 36, name: 'Carne Molida', nameEn: 'Ground Beef', nameGn: "So'o Moído", nameDe: 'Hackfleisch', category: 'Carnes y Aves', price: 14000, originalPrice: null, stock: 22, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 37, name: 'Panceta', nameEn: 'Bacon', nameGn: 'Panceta', nameDe: 'Speck', category: 'Carnes y Aves', price: 16000, originalPrice: 18000, stock: 18, unit: 'kg', status: 'in-stock', discount: 11, isNew: false, isPopular: false },

  // More Lácteos
  { id: 38, name: 'Leche Descremada', nameEn: 'Skim Milk', nameGn: 'Kamby Descremada', nameDe: 'Magermilch', category: 'Lácteos', price: 5100, originalPrice: null, stock: 88, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 39, name: 'Queso Cremoso', nameEn: 'Cream Cheese', nameGn: 'Kesu Cremoso', nameDe: 'Frischkäse', category: 'Lácteos', price: 11000, originalPrice: null, stock: 45, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 40, name: 'Ricotta', nameEn: 'Ricotta', nameGn: 'Ricotta', nameDe: 'Ricotta', category: 'Lácteos', price: 7500, originalPrice: null, stock: 30, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 41, name: 'Dulce de Leche', nameEn: 'Dulce de Leche', nameGn: 'Dulce de Leche', nameDe: 'Dulce de Leche', category: 'Lácteos', price: 6800, originalPrice: 7500, stock: 52, unit: 'unidades', status: 'in-stock', discount: 9, isNew: false, isPopular: true },
  { id: 42, name: 'Crema de Leche', nameEn: 'Heavy Cream', nameGn: 'Crema Kamby', nameDe: 'Sahne', category: 'Lácteos', price: 5500, originalPrice: null, stock: 38, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // More Frutas y Verduras
  { id: 43, name: 'Banana', nameEn: 'Banana', nameGn: 'Banana', nameDe: 'Banane', category: 'Frutas y Verduras', price: 3500, originalPrice: null, stock: 75, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: true },
  { id: 44, name: 'Naranja', nameEn: 'Orange', nameGn: 'Naranha', nameDe: 'Orange', category: 'Frutas y Verduras', price: 4200, originalPrice: null, stock: 60, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 45, name: 'Lechuga', nameEn: 'Lettuce', nameGn: 'Lechuga', nameDe: 'Kopfsalat', category: 'Frutas y Verduras', price: 2800, originalPrice: null, stock: 48, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 46, name: 'Zanahoria', nameEn: 'Carrot', nameGn: 'Zanahoria', nameDe: 'Karotte', category: 'Frutas y Verduras', price: 3200, originalPrice: null, stock: 55, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 47, name: 'Papa', nameEn: 'Potato', nameGn: 'Papa', nameDe: 'Kartoffel', category: 'Frutas y Verduras', price: 2800, originalPrice: 3500, stock: 90, unit: 'kg', status: 'in-stock', discount: 20, isNew: false, isPopular: true },
  { id: 48, name: 'Batata', nameEn: 'Sweet Potato', nameGn: 'Jety', nameDe: 'Süßkartoffel', category: 'Frutas y Verduras', price: 3000, originalPrice: null, stock: 35, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 49, name: 'Morrón', nameEn: 'Bell Pepper', nameGn: 'Morrón', nameDe: 'Paprika', category: 'Frutas y Verduras', price: 6500, originalPrice: null, stock: 28, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 50, name: 'Ajo', nameEn: 'Garlic', nameGn: 'Ajo', nameDe: 'Knoblauch', category: 'Frutas y Verduras', price: 12000, originalPrice: null, stock: 20, unit: 'kg', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // More Bebidas
  { id: 51, name: 'Pepsi 2L', nameEn: 'Pepsi 2L', nameGn: 'Pepsi 2L', nameDe: 'Pepsi 2L', category: 'Bebidas', price: 7200, originalPrice: 8000, stock: 125, unit: 'unidades', status: 'in-stock', discount: 10, isNew: false, isPopular: false },
  { id: 52, name: 'Sprite 2L', nameEn: 'Sprite 2L', nameGn: 'Sprite 2L', nameDe: 'Sprite 2L', category: 'Bebidas', price: 7300, originalPrice: null, stock: 110, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 53, name: 'Cerveza Pilsen', nameEn: 'Pilsen Beer', nameGn: 'Cerveza Pilsen', nameDe: 'Pilsen Bier', category: 'Bebidas', price: 8200, originalPrice: null, stock: 175, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 54, name: 'Yerba Mate Selecta', nameEn: 'Selecta Yerba Mate', nameGn: "Ka'a Selecta", nameDe: 'Selecta Yerba Mate', category: 'Bebidas', price: 18500, originalPrice: 21000, stock: 85, unit: 'unidades', status: 'in-stock', discount: 12, isNew: false, isPopular: true },
  { id: 55, name: 'Café Torrado', nameEn: 'Roasted Coffee', nameGn: 'Café Torrado', nameDe: 'Röstkaffee', category: 'Bebidas', price: 12500, originalPrice: null, stock: 72, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: true },
  { id: 56, name: 'Gaseosa Guaraná', nameEn: 'Guaraná Soda', nameGn: 'Gaseosa Guaraná', nameDe: 'Guaraná Limonade', category: 'Bebidas', price: 6800, originalPrice: null, stock: 95, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },
  { id: 57, name: 'Agua Saborizada', nameEn: 'Flavored Water', nameGn: 'Y Saborizada', nameDe: 'Aromatisiertes Wasser', category: 'Bebidas', price: 3200, originalPrice: null, stock: 140, unit: 'unidades', status: 'in-stock', discount: 0, isNew: false, isPopular: false },

  // More Almacén
  { id: 58, name: 'Fideos Mostachol', nameEn: 'Mostachol Pasta', nameGn: 'Fideo Mostachol', nameDe: 'Mostachol Nudeln', category: 'Almacén', price: 3100, originalPrice: null, stock: 98, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 59, name: 'Arroz Largo Fino', nameEn: 'Long Grain Rice', nameGn: 'Arroz Largo Fino', nameDe: 'Langkornreis', category: 'Almacén', price: 6800, originalPrice: 7500, stock: 75, unit: 'unidades', status: 'in-stock', discount: 9, isNew: true, isPopular: false },
  { id: 60, name: 'Aceite de Oliva', nameEn: 'Olive Oil', nameGn: 'Aceite Oliva', nameDe: 'Olivenöl', category: 'Almacén', price: 18500, originalPrice: 22000, stock: 28, unit: 'unidades', status: 'in-stock', discount: 16, isNew: true, isPopular: false },
  { id: 61, name: 'Vinagre', nameEn: 'Vinegar', nameGn: 'Vinagre', nameDe: 'Essig', category: 'Almacén', price: 2800, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 62, name: 'Mayonesa', nameEn: 'Mayonnaise', nameGn: 'Mayonesa', nameDe: 'Mayonnaise', category: 'Almacén', price: 5200, originalPrice: null, stock: 88, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 63, name: 'Ketchup', nameEn: 'Ketchup', nameGn: 'Ketchup', nameDe: 'Ketchup', category: 'Almacén', price: 4800, originalPrice: null, stock: 92, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 64, name: 'Mostaza', nameEn: 'Mustard', nameGn: 'Mostaza', nameDe: 'Senf', category: 'Almacén', price: 3500, originalPrice: null, stock: 58, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 65, name: 'Salsa de Tomate', nameEn: 'Tomato Sauce', nameGn: 'Salsa Tomate', nameDe: 'Tomatensoße', category: 'Almacén', price: 3200, originalPrice: null, stock: 105, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 66, name: 'Porotos', nameEn: 'Beans', nameGn: 'Kumanda', nameDe: 'Bohnen', category: 'Almacén', price: 4500, originalPrice: null, stock: 78, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },

  // More Panadería
  { id: 69, name: 'Pan Francés', nameEn: 'French Bread', nameGn: 'Pan Francés', nameDe: 'Französisches Brot', category: 'Panadería', price: 3200, originalPrice: null, stock: 52, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: true },
  { id: 70, name: 'Facturas', nameEn: 'Pastries', nameGn: 'Factura', nameDe: 'Gebäck', category: 'Panadería', price: 2800, originalPrice: null, stock: 35, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 71, name: 'Galletas de Agua', nameEn: 'Water Crackers', nameGn: 'Galleta de Agua', nameDe: 'Wassercracker', category: 'Panadería', price: 4200, originalPrice: null, stock: 68, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 72, name: 'Galletas Dulces', nameEn: 'Sweet Cookies', nameGn: 'Galleta Dulce', nameDe: 'Süße Kekse', category: 'Panadería', price: 4800, originalPrice: 5500, stock: 42, unit: 'unidades', status: 'in-stock', discount: 13, isNew: true, isPopular: false },
  { id: 73, name: 'Tostadas', nameEn: 'Toast', nameGn: 'Tostada', nameDe: 'Toast', category: 'Panadería', price: 3800, originalPrice: null, stock: 55, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },

  // More Limpieza
  { id: 74, name: 'Lavandina', nameEn: 'Bleach', nameGn: 'Lavandina', nameDe: 'Bleichmittel', category: 'Limpieza', price: 4500, originalPrice: null, stock: 72, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 75, name: 'Jabón Líquido', nameEn: 'Liquid Soap', nameGn: 'Jabón Líquido', nameDe: 'Flüssigseife', category: 'Limpieza', price: 6800, originalPrice: 7800, stock: 58, unit: 'unidades', status: 'in-stock', discount: 13, isNew: true, isPopular: false },
  { id: 76, name: 'Suavizante', nameEn: 'Fabric Softener', nameGn: 'Suavizante', nameDe: 'Weichspüler', category: 'Limpieza', price: 8500, originalPrice: null, stock: 48, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 77, name: 'Esponja de Acero', nameEn: 'Steel Wool', nameGn: 'Esponja Acero', nameDe: 'Stahlwolle', category: 'Limpieza', price: 2500, originalPrice: null, stock: 85, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 78, name: 'Trapo de Piso', nameEn: 'Floor Cloth', nameGn: 'Trapo Piso', nameDe: 'Bodentuch', category: 'Limpieza', price: 12000, originalPrice: null, stock: 32, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 79, name: 'Desodorante de Ambiente', nameEn: 'Air Freshener', nameGn: 'Desodorante Ambiente', nameDe: 'Lufterfrischer', category: 'Limpieza', price: 5500, originalPrice: null, stock: 65, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
  { id: 80, name: 'Toallas de Papel', nameEn: 'Paper Towels', nameGn: 'Toalla de Papel', nameDe: 'Papiertücher', category: 'Limpieza', price: 4200, originalPrice: null, stock: 78, unit: 'unidades', status: 'in-stock', discount: 0, isNew: true, isPopular: false },
]

export const categories = ['Todos', 'Carnes y Aves', 'Lácteos', 'Frutas y Verduras', 'Bebidas', 'Almacén', 'Panadería', 'Limpieza']
