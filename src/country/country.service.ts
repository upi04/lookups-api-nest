import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // pastikan path ini benar

@Injectable()
export class CountryService {
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
    this.prisma.country.findMany({ where, skip, take: limit }),
    this.prisma.country.count({ where }),
  ]);

  return {
    data,
    total,
    page,
    lastPage: Math.ceil(total / limit),
  };
}
  findOne(id: number) {
    return this.prisma.country.findUnique({ where: { id } });
  }

  create(data: { name: string; isoAlpha2: string; isoAlpha3: string }) {
    return this.prisma.country.create({ data });
  }

  update(id: number, data: { name?: string; isoAlpha2?: string; isoAlpha3?: string }) {
    return this.prisma.country.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.country.delete({ where: { id } });
  }
}
