import { Injectable } from "@nestjs/common";
import { DependencyService } from "src/dependency-service/dependency.service";

@Injectable()
export class SecondConsumerService {
  
  constructor(
    private readonly dependencyService: DependencyService
  ) {
    console.log('Created SecondConsumerService');
    this.dependencyService.logToConsole(); 
  }
  
}