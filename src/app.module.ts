import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SearchModule } from './search/search.module'
import { PlaylistModule } from './playlist/playlist.module'
import { SongModule } from './song/song.module'
import { AlbumModule } from './album/album.module'
import { MvModule } from './mv/mv.module'
import { BillboardModule } from './billboard/billboard.module'
import { NewModule } from './new/new.module'
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
    AlbumModule,
    MvModule,
    BillboardModule,
    NewModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
