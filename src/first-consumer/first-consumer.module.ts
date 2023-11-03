import { Module } from '@nestjs/common'
import { DependencyServiceModule } from '../dependency-service/dependency-service.module'
import { DependencyService } from '../dependency-service/dependency.service'
import { FirstConsumerService } from './first-consumer.service'

@Module({
  imports: [
    DependencyServiceModule
  ],
  providers: [
    // DependencyService, 
    FirstConsumerService
  ]
})
export class FirstConsumerModule {}
