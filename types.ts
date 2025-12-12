export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Executive {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  isImportant: boolean;
}