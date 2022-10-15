import { HttpService } from '@nestjs/axios'
import { Controller, Get } from '@nestjs/common'
import { map } from 'rxjs'

@Controller('new')
export class NewController {
  constructor(private readonly httpService: HttpService) {}

  @Get('song')
  getSong() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/home/newsong')
      .pipe(map((res) => res.data))
  }

  @Get('album')
  getAlbum() {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/home/newalbum')
      .pipe(map((res) => res.data))
  }
}
