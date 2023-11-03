import { Module } from '@nestjs/common';
import { FirstConsumerModule } from './first-consumer/first-consumer.module';
import { SecondConsumerModule } from './second-consumer/second-consumer.module';

@Module({
  imports: [
    FirstConsumerModule, 
    SecondConsumerModule
  ]
})
export class AppModule {
  
  /**
   * https://stackoverflow.com/questions/60192912/how-to-create-a-service-that-acts-as-a-singleton-with-nestjs
   * 
   * In NestJS modules are the singletons and their providers are made to be singletons so long as they are provided from the same module. 
   * In your sample code you have your DependencyService in three different providers arrays for three different modules. 
   * What should be done instead is to only have it in the providers array of the DependencyServiceModule and the exports array as well. 
   * Then you only need to have the DependencyServiceModule in the imports array of the FirstConsumerModule and SecondConsumerModule,
   *  and do not add the DependencyService to the providers array of either. Thanks to the being in the exports array, 
   * the provider is available to the module context already.
   * 
   * 
   * TLDR: 
   * Services in NestJS are singletons, but ONLY regarding a module. 
   * So if you want a ThingService to be a single instance in all the app, you should create a module that instantiate said ThingService, and then exports it. 
   * In that way the ThingService will only ever have a single instance
   * 
   */
  
  
}
