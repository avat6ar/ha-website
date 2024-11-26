export interface AboutInstructor {
  name: string;
  title: string;
  link: string;
  cover: string;
  rate: string | number;
  facebook?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  instagram?: string | null;
}

export interface Offer {
  title: string;
  text: string;
  offer_amount: number;
  type: string;
}
