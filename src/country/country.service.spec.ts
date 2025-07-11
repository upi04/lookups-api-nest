import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.country.findMany();
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
