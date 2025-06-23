export interface Sauce {
  name: string;
  type: 'tomato-based' | 'white' | 'pesto' | 'bbq' | 'oil-based';
}

export interface Topping {
  name: string;
  category: 'cheese' | 'meat' | 'vegetable' | 'herbs' | 'oil' | 'sauce';
}

export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  sauce: Sauce;
  toppings: Topping[];
  size: 'small' | 'medium' | 'large';
  category: 'classic' | 'specialty' | 'meat-lovers' | 'vegetarian' | 'vegan';
  imageUrl?: string;
}
