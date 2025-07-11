import { Module } from '@nestjs/common';
import { EducationalInstitutionController } from './educational-institution.controller';
import { EducationalInstitutionService } from './educational-institution.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [EducationalInstitutionController],
  providers: [EducationalInstitutionService, PrismaService],
})
export class EducationalInstitutionModule {}
