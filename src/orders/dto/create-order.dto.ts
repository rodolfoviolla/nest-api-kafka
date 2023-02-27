import { OrderStatus } from '../entities/order.entity';

export class CreateOrderDto {
  id: string;

  amount: number;

  status: OrderStatus;
}
