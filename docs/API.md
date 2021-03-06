# daily 的 API 文档

## 登录

- url: `POST BASE/login`

- 数据:

  ```json
  {
    "username": "name",
    "password": "sha256的密码"
  }
  ```

- 返回:

  ```json
  {
      "status": 200,
      "msg": "ok",
      "data": {
          "token": "<token>",
      }
  }
  {
      "status": 401,
      "msg": "用户名或密码错误"
  }
  ```

## 注册

- url: `POST BASE/register`

- 数据：

  ```json
  {
    "username": "name",
    "password": "sha256的密码"
  }
  ```

## 打卡

### 增

- url: `POST BASE/createHabit`

- 数据：

  ```json
  {
    "username": "<name>",
    "habit": {
      "habitName": "<name>",
      "bgc": "<bgc>",
      "icon": "<icon>",
      "times": "<times>", // 一天中的时段
      "log": [
        {
          "doneAt": "时间戳",
          "content": "日志string"
        }
      ],
      "target": {
        "fixed": [1, 1, 1, 1, 1, 1, 1],
        "weeks": 0,
        "month": 0
      },
      "isEject": true,
      "remarks": "string",
      "creatAt": "创建时间戳"
    }
  }
  ```

### 删

- url: `DELETE BASE/delHabit`

- 数据：

  ```json
  {
    "username": "<name>",
    "id": "<id>"
  }
  ```

### 改(打卡)

- url: `POST BASE/modifyHabit/done`

- 数据：

  ```json
  {
    "username": "<name>",
    "id": "<id>",
    "doneAt": "时间戳",
    "log": "string"
  }
  ```

- 返回：

  ```json
  {
    "status": 200,
    "msg": "ok",
    "data": {
      "id": "<id>",
      "bgc": "<background-color>",
      "continue": "<continue-days>"
    }
  }
  ```

### 改(编辑习惯)(直接删除增加)

- url: `POST BASE/modifyHabit/edit`

- 数据：

  ```json
  {
    "username": "<name>",
    "habit": {
      "habitName": "<name>",
      "bgc": "<bgc>",
      "icon": "<icon>",
      "times": "<times>",
      "target": {
        "fixed": [1, 1, 1, 1, 1, 1, 1],
        "weeks": 0,
        "month": 0
      },
      "isEject": true,
      "remarks": "string"
    }
  }
  ```

### 查

- url: `GET BASE/searchHabit?<query>`

- query:

  - username: 用户名
  - habitName: 习惯名
  - detail: true (是否需要详细信息) // 感觉没必要？再看看
  - begin: 时间戳（doneAt 下限，默认 -2）
  - end: 时间戳

- 返回：

```json
{
  "username": "<name>",
  "status": 200,
  "msg": "ok",
  "data": {
    "total": 123,
    "habits": [
      {
        "id": "<id>",
        "habitName": "<name>",
        "icon": "<url>",
        "bgc": "<bgc>",
        "continue": "<continue>",
        // 下面为详细信息，可选
        "dateInfo": {
          "createAt": "时间戳",
          "target": 31,
          "actual": 3,
          "miss": 20,
          "times": 3
        },
        "log": [
          {
            "doneAt": "时间戳",
            "content": "日志string"
          }
        ]
      }
    ]
  }
}
```
