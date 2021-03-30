import request from './request'

const PATH = "/register";

export function register({username,password}) {
  return await request({
    url: PATH,
    data: arguments[0],
    method:"POST"
  })
}