import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SearchModule } from './un-auth/search/search.module'
import { PlaylistModule } from './un-auth/playlist/playlist.module'
import httpConfig from './config/http-config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [httpConfig]
    }),
    SearchModule,
    PlaylistModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
