import { Provide } from '@midwayjs/core';
// import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async login() {
    const WX_APPID = process.env.WX_APPID;
    const WX_APP_SERCET = process.env.WX_APP_SERCET;
    const WX_REQUEST_URL = `https://api.weixin.qq.com/sns/jscode2session?appid=${WX_APPID}&secret=${WX_APP_SERCET}&js_code=JSCODE&grant_type=authorization_code`;

    // 1. 获取用户的openid
    const res = await fetch(WX_REQUEST_URL);
    const data = await res.json();
    // const { openid } = data;

    return { data };
  }

  // async jwtSign(options: IUserOptions) {
  //   const { id, username } = options;
  //   const secret = process.env.JWT_SECRET;
  //   const token = jwt.sign({ id, username }, secret, { expiresIn: '1d' });
  //   return token;
  // }
}
