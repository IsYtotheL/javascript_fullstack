'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx)
    const {title,content} = await ctx.service.user.user()
    ctx.body = {
      title,
      content
    }
    //query 传参 user?username=蜗牛
    // const {username} = ctx.query;
    ctx.body = username;
  }
  async getId() {
    const {ctx} = this;
    //params传参getid/999
    const {id} = ctx.params;
    ctx.body = id
  }
  async add() {
    const {ctx} = this;
    const {title,content} = ctx.request.body
    ctx.body = {
      title,
      content
    }
  }
}
module.exports = UserController;



