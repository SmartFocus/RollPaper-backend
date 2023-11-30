import { Inject, Controller, Post } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/image')
export class APIController {
  ctx: Context;

  @Inject()
  UserService: UserService;

  @Post('/login')
  async login() {
    const data = await this.UserService.login();
    return { data };
  }
}
