export interface IBlog {
  id?: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isFeatured?: boolean;
  views?: number;
  createdAt: Date;
  updatedAt: Date;
}
