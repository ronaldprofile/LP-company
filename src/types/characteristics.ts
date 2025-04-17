export interface Characteristic {
  imagem_general: string
  title_general: string
  items: Array<{
    image: string
    itens: {
      titulo: string
      corpo: string
    }
  }>
}
