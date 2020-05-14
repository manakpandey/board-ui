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
  id: String,
  content: String,
  timestamp: String,
  userID: number,
  username: String
}
