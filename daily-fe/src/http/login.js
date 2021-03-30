import request from './request'

const PATH = "/login";

export function login({username,password}) {
  return await request({
    url: PATH,
    data: arguments[0],
    method: "POST"
  })
}