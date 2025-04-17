export function maskCNPJ(value: string): string {
  return value
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/^(\d{2})(\d)/, '$1.$2') // Adiciona o primeiro ponto
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // Adiciona o segundo ponto
    .replace(/\.(\d{3})(\d)/, '.$1/$2') // Adiciona a barra
    .replace(/(\d{4})(\d)/, '$1-$2') // Adiciona o hífen
    .slice(0, 18) // Limita ao tamanho máximo do CNPJ
}

export function maskPhone(value: string): string {
  return value
    .replace(/\D/g, '') // Remove tudo que não for número
    .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona os parênteses e espaço
    .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona o hífen
    .slice(0, 15) // Limita ao tamanho máximo do telefone
}
