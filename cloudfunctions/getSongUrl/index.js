// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const response = await got(`http://123.207.24.163:3000/song/url?id=${event.id}`, { responseType: 'json' })
  return response.body
}