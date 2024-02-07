import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports:[PowerModule], // this means  that the cpu module is dependent on power module, 
  //so it needs to be imported in order for cpu
  providers: [CpuService],
  exports:[CpuService]
})
export class CpuModule {}
