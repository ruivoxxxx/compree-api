export class GetProdutoByIdOutPutDto {
    constructor(
        readonly id: string,
        readonly id_usuario: string,
        readonly nome: string,
        readonly valor: number,
        readonly descricao: string,
        readonly quantidade: number,
        readonly categoria: string,
    ) {}
}
