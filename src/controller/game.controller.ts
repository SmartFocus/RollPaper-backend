import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/game')
export class APIController {
  @Inject()
  ctx: Context;

  @Get('/stat')
  async getStat() {
    // https://api.gametools.network/bf2042/stats/?raw=false&format_values=true&name=iiTzArcur&playerid=794397421&nucleus_id=2800753812&platform=pc&skip_battlelog=false

    // get info from params
    const { username } = this.ctx.query;
    console.log('username', username);
    const res = await fetch(`https://api.gametools.network/bf2042/stats/?raw=false&format_values=true&name=${username}&platform=pc&skip_battlelog=false`);
    const data = await res.json();
    return data;
  }
}
