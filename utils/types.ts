export interface Response {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Note {
  _id?: number
  title: string
  description: string
}

export interface Theme {
  dark: string
  light: string
}
