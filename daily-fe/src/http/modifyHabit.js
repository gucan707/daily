import request from "./request";

const PATH = "/modifyHabit";

export function modifyDone({ username, id, doneAt, log }) {
  return await request({
    url: `${PATH}/done`,
    data: arguments[0],
    method:"POST"
  })
}

export function editHabit({ username, habit }) {
  return await request({
    url: `${PATH}/edit`,
    data: arguments[0],
    method:"POST"
  })
}
