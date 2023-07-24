export interface ListItem {
    id: number;
    flag: string;
    name: string;
    category: string;
    duration: string;
    details: {
      difficulty: string;
      description: string;
      protein: string;
      spiceLevel: string;
      spices: string;
      cookingOil: string;
      volumeWeight: number;
      serves: number;
      authenticity: string;
      stock: string;
      produce: string;
      origin: string;
    };
  }
  