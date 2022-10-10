import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query } from '@nestjs/common'
import { lastValueFrom, map } from 'rxjs'

@Controller('song')
export class SongController {
  constructor(private readonly httpService: HttpService) {}

  @Get('pic')
  getPic(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/song/pic', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('lyric')
  getLyric(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/song/lyric', {
        params: query
      })
      .pipe(map((res) => res.data))
  }

  @Get('info')
  async getInfo(@Query() query: any) {
    const resObser = this.httpService.get(
      'https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do',
      {
        params: {
          resourceType: 2,
          ...query
        }
      }
    )
    const info = await (await lastValueFrom(resObser)).data
    const data = (info as any).resource[0]
    data.rateFormats.forEach((item) => {
      if (!item.url) {
        item.url = item.androidUrl.replace(
          /ftp:\/\/[^/]+/,
          'https://freetyst.nf.migu.cn'
        )
      }
      item.url = item.url.replace(
        /ftp:\/\/[^/]+/,
        'https://freetyst.nf.migu.cn'
      )
    })
    data.newRateFormats.forEach((item) => {
      if (!item.url) {
        item.url = item.androidUrl.replace(
          /ftp:\/\/[^/]+/,
          'https://freetyst.nf.migu.cn'
        )
      }
      item.url = item.url.replace(
        /ftp:\/\/[^/]+/,
        'https://freetyst.nf.migu.cn'
      )
    })
    return data
  }
}
