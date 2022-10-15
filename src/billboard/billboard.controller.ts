import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query } from '@nestjs/common'
import { map } from 'rxjs'

@Controller('billboard')
export class BillboardController {
  constructor(private readonly httpService: HttpService) {}

  @Get('')
  get(@Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/billboard/home', {
        params: query
      })
      .pipe(map((res) => res.data))
  }
}
