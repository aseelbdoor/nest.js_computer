import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], //this mean that  we are going to use the service in this 
  // module, and it will be available for injection here just(private)
  exports:[PowerService] // this make  the service public so other modules can inject it too
})
export class PowerModule {}
