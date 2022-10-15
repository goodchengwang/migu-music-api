import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SearchModule } from './search/search.module'
import { PlaylistModule } from './playlist/playlist.module'
import { SongModule } from './song/song.module'
import { AlbumModule } from './album/album.module'
import httpConfig from './config/http-config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [httpConfig]
    }),
    SearchModule,
    PlaylistModule,
    SongModule,
    AlbumModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
