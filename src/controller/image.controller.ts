import { Inject, Controller, Post } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ImageService } from '../service/image.service';

@Controller('/image')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  ImageService: ImageService;

  // get random image from prisma
  @Post('/generate-random-image')
  async generateRandomImage() {
    const image = await this.ImageService.getRandomImage();
    return image;
  }
}
