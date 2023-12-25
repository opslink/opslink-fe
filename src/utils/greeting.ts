import moment from 'moment'

export default function getGreeting() {
  const hour = moment().hour() // 获取当前小时

  if (hour >= 6 && hour < 12)
    return '早上好'
  else if (hour >= 12 && hour < 14)
    return '中午好'
  else if (hour >= 14 && hour < 18)
    return '下午好'
  else if (hour >= 18 && hour < 22)
    return '晚上好'
  else
    return '深夜好' // 或者 ''
}
