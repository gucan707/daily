import request from './request';

const PATH = "/searchHabit";

export function searchHabit({ username, habitName, detail, begin, end }) {
  return await request({
    url: PATH,
    params: arguments[0],
    method:'GET'
  })
}