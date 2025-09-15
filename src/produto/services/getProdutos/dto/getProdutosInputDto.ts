export class GetProdutosInputDto {
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly valor: number,
        readonly descricao: string,
        readonly quantidade: number,
    ) {}
}
