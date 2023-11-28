import { Provide } from '@midwayjs/core';
// read from prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Provide()
export class ImageService {
  async getRandomImage() {
    // 随机读取db中的一条数据

    // 随机选择1条数据
    // count of images from DB
    const count = await prisma.image.count();

    const randomImage = await prisma.image.findFirst({
      take: 1,
      skip: Math.floor(Math.random() * count),
    });
    console.log(randomImage);
    return randomImage;
  }

  async switchImageLikeCount(id: number, count: number) {
    // update db
    // 获取原来的likes count
    const image = await prisma.image.findUnique({
      where: {
        id,
      },
    });
    console.log(image);
    // 更新likes count

    const updatedImage = await prisma.image.update({
      where: {
        id,
      },
      data: {
        likes: image.likes + count,
      },
    });
    return updatedImage;
  }
}
