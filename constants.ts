import { Review, WeddingService } from './types';

export const BUSINESS_INFO = {
  name: "VSS Weddings and Events",
  address: "near Shanidham Mandir, Zhenda Colony, Asola, Chhatarpur, New Delhi, Delhi 110074",
  phone: "+91 9810299887",
  email: "celebrate@weddingsurpriserz.com"
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Aditi & Rahul",
    role: "The Happy Couple",
    comment: "VSS Weddings and Events turned our dream into a royal reality. The decor was straight out of a movie set!",
    rating: 5
  },
  {
    id: 2,
    name: "Mrs. Kapoor",
    role: "Mother of the Bride",
    comment: "The attention to detail in the rituals was impeccable. They respected our traditions while adding a modern touch.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Groom",
    comment: "Professional, punctual, and absolutely magical. The flower arrangement was the talk of the town.",
    rating: 5
  }
];

export const SERVICES: WeddingService[] = [
  {
    title: "Royal Decor",
    description: "Transforming venues into palaces with intricate floral work and regal lighting.",
    icon: "castle"
  },
  {
    title: "Catering Excellence",
    description: "A culinary journey through India's finest flavors, served with elegance.",
    icon: "utensils"
  },
  {
    title: "Entertainment",
    description: "From Shehnai to DJ nights, we curate the perfect sound for your celebration.",
    icon: "music"
  }
];
