import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Prisma } from '@prisma/client';
@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

 async findAll(page = 1, limit = 10, search?: string) {
  const skip = (page - 1) * limit;

  const where = search
  ? {
      name: {
        contains: search,
        mode: 'insensitive' as const, // ✅ FIXED
      },
    }
  : {};

  const [data, total] = await this.prisma.$transaction([
    this.prisma.device.findMany({
      where,
      skip,
      take: limit,
      include: { country: true }, // optional kalau mau lihat relasinya
    }),
    this.prisma.device.count({ where }),
  ]);

  return {
    data,
    total,
    page,
    lastPage: Math.ceil(total / limit),
  };
}

  findOne(id: number) {
    return this.prisma.device.findUnique({
      where: { id },
      include: { country: true },
    });
  }

  create(data: CreateDeviceDto) {
    return this.prisma.device.create({ data });
  }

  update(id: number, data: Partial<CreateDeviceDto>) {
    return this.prisma.device.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.device.delete({ where: { id } });
  }
}
