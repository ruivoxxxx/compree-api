import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
} from '@nestjs/common';
import { PedidosEntity } from 'src/pedidos/entity/pedido.entity';
import { StatusPedido } from 'src/enum/statuspedido.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuario/entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {
    constructor(
        @InjectRepository(PedidosEntity)
        private readonly pedidoRepository: Repository<PedidosEntity>,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>,
    ) {} //private readonly pedidosRepository: PedidoRepository) {}
    //usuario vai ser buscado na primeira query e
    // logo apos vc vai atribuar a const para o data.usuaario,
    // para dessa forma conseguir criar o pedido e o usuario estar relacionado ao pedido

    async execute(usuario_id: string) {
        try {
            const usuarios = await this.usuarioRepository.findOneBy({
                id: usuario_id,
            });

            if (!usuarios) {
                throw new NotFoundException('Usuário não encontrado');
            }
            const pedidoEntity = new PedidosEntity();

            pedidoEntity.valor_total = '0';
            pedidoEntity.status = StatusPedido.EM_PROCESSAMENTO;
            pedidoEntity.usuario = usuarios;

            return await this.pedidoRepository.save(pedidoEntity);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(error.message);
        }
    }
}
