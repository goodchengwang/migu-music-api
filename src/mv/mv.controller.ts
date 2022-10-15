import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query, Req } from '@nestjs/common'
import { Request } from 'express'
import { map } from 'rxjs'

@Controller('mv')
export class MvController {
  constructor(private readonly httpService: HttpService) {}

  @Get('info')
  getInfo(@Query('copyrightId11') copyrightId11: string) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/mv/info', {
        params: {
          copyrightId11
        }
      })
      .pipe(map((res) => res.data))
  }

  @Get('play')
  getPlay(@Query('copyrightId') copyrightId: string) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/play/getMvPlayInfo', {
        params: {
          copyrightId
        }
      })
      .pipe(map((res) => res.data))
  }

  @Get('relative')
  getRelative(@Query('copyrightId11') copyrightId11: string) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/mv/relative', {
        params: {
          copyrightId11
        }
      })
      .pipe(map((res) => res.data))
  }
}
