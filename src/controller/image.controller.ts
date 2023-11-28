import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ImageService } from '../service/image.service';

interface ISwitchImageLikeCount {
  id: number;
  count: number;
}

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

  @Post('/switch-image-like-count')
  async switchImageLikeCount(@Body() data: ISwitchImageLikeCount) {
    const { id, count } = data;
    const image = await this.ImageService.switchImageLikeCount(id, count);
    return image;
  }
}
