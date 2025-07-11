import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEducationalInstitutionDto } from './dto/create-educational-institution.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class EducationalInstitutionService {
  constructor(private prisma: PrismaService) {}

  async findAll(page = 1, limit = 10, search?: string) {
  const skip = (page - 1) * limit;

  const where = search
    ? {
        name: {
          contains: search,
          mode: 'insensitive' as const,
        },
      }
    : {};

  const [data, total] = await this.prisma.$transaction([
    this.prisma.educationalInstitution.findMany({
      where,
      skip,
      take: limit,
      include: { country: true }, 
    }),
    this.prisma.educationalInstitution.count({ where }),
  ]);

  return {
    data,
    total,
    page,
    lastPage: Math.ceil(total / limit),
  };
}

  findOne(id: number) {
    return this.prisma.educationalInstitution.findUnique({
      where: { id },
      include: { country: true },
    });
  }

  create(data: CreateEducationalInstitutionDto) {
    return this.prisma.educationalInstitution.create({
      data,
    });
  }

  update(id: number, data: Partial<CreateEducationalInstitutionDto>) {
    return this.prisma.educationalInstitution.update({
      where: { id },
      data,
    });
  }

  delete(id: number) {
    return this.prisma.educationalInstitution.delete({
      where: { id },
    });
  }
}
