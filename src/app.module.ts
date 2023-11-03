import { Module } from '@nestjs/common';
import { FirstConsumerModule } from './first-consumer/first-consumer.module';
import { SecondConsumerModule } from './second-consumer/second-consumer.module';

@Module({
  imports: [
    FirstConsumerModule, 
    SecondConsumerModule
  ]
})
export class AppModule {}
