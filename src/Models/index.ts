export interface IPin {
  id: string,
  title: string,
  body: string
}

export interface IBoard {
  id: string,
  pins: {
    [key: string]: IPin
  }
}

export interface ChatMessage {
  content: String,
  timestamp: String,
  userID: number,
  username: String
}
