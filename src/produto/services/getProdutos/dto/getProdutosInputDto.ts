export class GetProdutosInputDto {
    constructor(
        readonly id: string,
        readonly id_usuario: string,
        readonly nome: string,
        readonly valor: number,
        readonly descricao: string,
        readonly quantidade: number,
        readonly categoria: string,
    ) {} //ver se consigo fazer tudo apenas fazendo input tradicional
}
