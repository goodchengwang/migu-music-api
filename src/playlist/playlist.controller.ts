import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query } from '@nestjs/common'
import { map } from 'rxjs'

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly httpService: HttpService) {}

  @Get('list')
  getList(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/playlist/list', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('allTag')
  getAllTag() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/playlist/allTag')
      .pipe(map((res) => res.data))
  }

  @Get('hotTag')
  getHotTag() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/playlist/hotTag')
      .pipe(map((res) => res.data))
  }

  @Get('info')
  getInfo(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/playlist/info', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('songsInfo')
  getSongsInfo(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/playlist/songsInfo', {
        params: query
      })
      .pipe(map((res) => res.data))
  }
}
