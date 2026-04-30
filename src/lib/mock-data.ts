export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Acoustic Headphones', description: 'Studio-grade audio fidelity.', price: 349.00, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000', category: 'Electronics', rating: 4.9, stock: 12 },
  { id: '2', name: 'Analog Chronograph', description: 'Precision timekeeping in stainless steel.', price: 289.00, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000', category: 'Accessories', rating: 4.8, stock: 8 },
  { id: '3', name: 'Ambient Speaker', description: 'Room-filling sound with minimalist design.', price: 199.00, image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1000', category: 'Electronics', rating: 4.7, stock: 20 },
  { id: '4', name: 'Italian Leather Satchel', description: 'Hand-stitched full grain leather.', price: 420.00, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000', category: 'Bags', rating: 4.9, stock: 5 },
  { id: '5', name: 'Architectural Chair', description: 'Ergonomic comfort, iconic design.', price: 850.00, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000', category: 'Furniture', rating: 5.0, stock: 3 },
  { id: '6', name: 'Urban Runner', description: 'Performance meets city street style.', price: 155.00, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000', category: 'Footwear', rating: 4.6, stock: 15 },
  { id: '7', name: 'Polarized Sunglasses', description: 'UV protection with classic aesthetics.', price: 125.00, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000', category: 'Accessories', rating: 4.5, stock: 25 },
  { id: '8', name: 'Wool Knit Sweater', description: 'Ethically sourced, breathable wool.', price: 180.00, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000', category: 'Apparel', rating: 4.8, stock: 10 },
  { id: '9', name: 'Ceramic Table Lamp', description: 'Soft, ambient lighting for your desk.', price: 95.00, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000', category: 'Furniture', rating: 4.4, stock: 12 },
  { id: '10', name: 'Canvas Tote', description: 'Durable everyday carry.', price: 65.00, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000', category: 'Bags', rating: 4.7, stock: 40 },
  { id: '11', name: 'Titanium Pen', description: 'Writing experience redefined.', price: 110.00, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000', category: 'Accessories', rating: 4.9, stock: 30 },
  { id: '12', name: 'Coffee Drip Set', description: 'Crafted for the perfect brew.', price: 145.00, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000', category: 'Kitchen', rating: 4.8, stock: 10 },
];
