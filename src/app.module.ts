import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './country/country.module';
import { PrismaModule } from './prisma/prisma.module';
import { DeviceModule } from './device/device.module';
import { EducationalInstitutionModule } from './educational-institution/educational-institution.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CountryModule, PrismaModule, DeviceModule,EducationalInstitutionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
