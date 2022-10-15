import { HttpService } from '@nestjs/axios'
import { Controller, Get, Query, Req } from '@nestjs/common'
import { Request } from 'express'
import { map } from 'rxjs'

@Controller('auth')
export class AuthController {
  constructor(private readonly httpService: HttpService) {}

  @Get('collectedSongs')
  getCollectedSongs(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get(
        'https://m.music.migu.cn/migumusic/h5/collection/auth/getCollectedSongs',
        {
          params: query,
          headers: {
            Cookie: `SESSION=${request.cookies.SESSION}`
          }
        }
      )
      .pipe(map((res) => res.data))
  }

  @Get('collectedSongLists')
  getCollectedSongLists(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get(
        'https://m.music.migu.cn/migumusic/h5/collection/auth/getCollectedSongLists',
        {
          params: query,
          headers: {
            Cookie: `SESSION=${request.cookies.SESSION}`
          }
        }
      )
      .pipe(map((res) => res.data))
  }

  @Get('collectedAlbums')
  getCollectedAlbums(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get(
        'https://m.music.migu.cn/migumusic/h5/collection/auth/getCollectedAlbums',
        {
          params: query,
          headers: {
            Cookie: `SESSION=${request.cookies.SESSION}`
          }
        }
      )
      .pipe(map((res) => res.data))
  }

  @Get('collectedVideos')
  getCollectedVideos(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get(
        'https://m.music.migu.cn/migumusic/h5/collection/auth/getCollectedVideos',
        {
          params: query,
          headers: {
            Cookie: `SESSION=${request.cookies.SESSION}`
          }
        }
      )
      .pipe(map((res) => res.data))
  }

  @Get('audition')
  getAudition(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/audition/auth/getAudition', {
        params: query,
        headers: {
          Cookie: `SESSION=${request.cookies.SESSION}`
        }
      })
      .pipe(map((res) => res.data))
  }

  @Get('follow')
  getFollow(@Req() request: Request, @Query() query: any) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/follow/auth/getFollow', {
        params: { userType: 1, ...query },
        headers: {
          Cookie: `SESSION=${request.cookies.SESSION}`
        }
      })
      .pipe(map((res) => res.data))
  }

  @Get('playlist')
  getPlaylist(@Req() request: Request) {
    return this.httpService
      .get(
        'https://m.music.migu.cn/migumusic/h5/playlist/auth/getUserPlaylist',
        {
          headers: {
            Cookie: `SESSION=${request.cookies.SESSION}`
          }
        }
      )
      .pipe(map((res) => res.data))
  }

  @Get('digitalAlbum')
  getDigitalAlbum(@Req() request: Request) {
    return this.httpService
      .get('https://m.music.migu.cn/migumusic/h5/digitalAlbum/getOrderInfo', {
        headers: {
          Cookie: `SESSION=${request.cookies.SESSION}`
        }
      })
      .pipe(map((res) => res.data))
  }
}
