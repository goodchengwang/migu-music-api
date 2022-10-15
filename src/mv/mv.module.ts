import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MvController } from './mv.controller'

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        headers: {
          'User-Agent': configService.get('headers.userAgent'),
          Referer: configService.get('headers.referer'),
          By: configService.get('headers.by')
        }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [MvController]
})
export class MvModule {}
