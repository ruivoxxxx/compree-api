import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
@Injectable()
export class JwtGuards implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const requisicao = context.switchToHttp().getRequest();
        const token = this.headerToken(requisicao);
        if (!token) {
            throw new UnauthorizedException();
        }
        return true;
    }
    private headerToken(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
