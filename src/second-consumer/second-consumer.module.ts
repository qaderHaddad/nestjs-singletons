import { Module } from '@nestjs/common'
import { DependencyServiceModule } from '../dependency-service/dependency-service.module'
import { DependencyService } from '../dependency-service/dependency.service'
import { SecondConsumerService } from './second-consumer.service'

@Module({
  imports: [
    DependencyServiceModule
  ],
  providers: [
    // DependencyService, 
    SecondConsumerService
  ]
})
export class SecondConsumerModule {}
