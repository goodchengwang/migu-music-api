import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query } from '@nestjs/common'
import { map } from 'rxjs'

@Controller('search')
export class SearchController {
  constructor(private readonly httpService: HttpService) {}

  @Get('discover')
  getDiscover() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/discovery')
      .pipe(map((res) => res.data))
  }

  @Get('hotWord')
  getHotWord() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/platform/hotWord')
      .pipe(map((res) => res.data))
  }

  @Get('all')
  getAll(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/all', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('singer')
  getSinger(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/singer', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('album')
  getAlbum(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/album', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('songList')
  getSongList(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/songList', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('mv')
  getMv(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/mv', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('suggest')
  getSuggest(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/search/suggest', {
        params: query
      })
      .pipe(map((res) => res.data))
  }
}
