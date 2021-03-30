import request from "./request";

const PATH = "/createHabit";

export function CreateHabit({username, habit}) {
  return await request({
    url: PATH,
    data: arguments[0],
    method:"POST"
  })
}