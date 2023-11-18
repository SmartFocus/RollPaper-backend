import { Provide } from '@midwayjs/core';
// read from prisma
import { PrismaClient } from '@prisma/client';

@Provide()
export class ImageService {
  async getRandomImage() {
    // random read a item from prisma
    const prisma = new PrismaClient();
    const image = await prisma.image.findFirst({
      orderBy: {
        id: 'desc',
      },
    });
    return image;
  }
}
