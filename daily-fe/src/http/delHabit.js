import request from './request'

const PATH = '/delHabit'

export function delHabit({ username, _id }) {
  return await request({
    url: `${PATH}?username=${username}&id=${_id}`,
    method:"DELETE"
  })
}