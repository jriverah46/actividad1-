export interface Sticker {
  id: number;
  number: number;
  name: string;
  position: string;
  image: string;
  collected: boolean;
  quantity: number;
}

export interface Team {
  id: number;
  name: string;
  code: string;
  group: string;
  flag: string;
  stickers: Sticker[];
}

export interface Group {
  name: string;
  teams: Team[];
}