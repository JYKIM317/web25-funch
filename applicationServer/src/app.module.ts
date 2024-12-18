import dotenv from 'dotenv';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { MemberModule } from '@member/member.module';
import { LiveModule } from '@live/live.module';
import { GithubAuthModule } from '@github/github.module';
import { AuthModule } from '@auth/auth.module';
import { FollowModule } from '@follow/follow.module';
import { SearchModule } from '@search/search.module';
import { NaverAuthModule } from '@naver/naver.module';
import { GoogleAuthModule } from '@google/google.module';

dotenv.config();

@Module({
  imports: [
    MemberModule,
    GithubAuthModule,
    AuthModule,
    LiveModule,
    SearchModule,
    FollowModule,
    NaverAuthModule,
    GoogleAuthModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}
