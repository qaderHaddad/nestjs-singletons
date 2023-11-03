import { Injectable } from "@nestjs/common";
import { DependencyService } from "src/dependency-service/dependency.service";

@Injectable()
export class FirstConsumerService {
  
  constructor(
    private readonly dependencyService: DependencyService
  ) {
    console.log('Created FirstConsumerService');
    this.dependencyService.logToConsole();
  }
  
}
