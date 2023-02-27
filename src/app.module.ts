import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders/entities/order.entity';
//ES7 Decorators - EcmaScript JavaScript
@Module({
  imports: [
    OrdersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres',
      port: 5432,
      database: 'kafka',
      username: 'kafka',
      password: 'kafka',
      models: [Order],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService, TestService], //container de serviços
})
export class AppModule {}
