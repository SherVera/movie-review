import { HttpModule as HttpModuleAxios } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { HttpService } from './http.service';

@Global()
@Module({
  imports: [HttpModuleAxios],
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule {}
