import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProfilesModule, 
    //MongooseModule.forRoot('mongodb://localhost:27017/daos'),
    DatabaseModule,
  ],
})
export class AppModule {}