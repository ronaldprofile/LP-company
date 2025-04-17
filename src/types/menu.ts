export interface Header {
  logo: string
  items: MenuItem[]
}

export interface MenuItem {
  title: string
  url: string
  is_button?: boolean
}
