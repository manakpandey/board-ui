export interface IPin {
  id: number | string;
  body: string;
  color?: string;
  pitch?: number;
  yaw?: number;
}

export interface IBoard {
  id: string,
  pins: {
    [key: string]: IPin
  }
}