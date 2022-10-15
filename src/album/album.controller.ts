import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query } from '@nestjs/common'
import { map } from 'rxjs'

@Controller('album')
export class AlbumController {
  constructor(private readonly httpService: HttpService) {}

  @Get('info')
  getInfo(@Query('albumId') albumId: string) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/album/info', {
        params: { albumId }
      })
      .pipe(map((res) => res.data))
  }

  @Get('digital/info')
  getDigitalInfo(@Query('digitalAlbumId') digitalAlbumId: string) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/digitalAlbum/info', {
        params: { digitalAlbumId }
      })
      .pipe(map((res) => res.data))
  }
}
