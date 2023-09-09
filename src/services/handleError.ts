import { ElMessage } from 'element-plus'
// 错误处理函数
// 网络错误处理
const handleNetWorkError = (errStatus: any) => {
  let errMsg = '位置错误'
  if (errStatus) {
    // 根据不同的错误码，做不同的处理
    switch (errStatus) {
      case 400:
        errMsg = '请求参数错误'
        break
      case 401:
        errMsg = '未授权的访问'
        break
      case 403:
        errMsg = '拒绝访问'
        break
      case 404:
        errMsg = '请求的资源不存在'
        break
      case 405:
        errMsg = '请求方法错误'
        break
      case 500:
        errMsg = '服务器错误'
        break
      case 501:
        errMsg = '服务未实现'
        break
      case 502:
        errMsg = '网关错误'
        break
      case 503:
        errMsg = '服务不可用'
        break
      case 504:
        errMsg = '网络超时'
        break
      case 505:
        errMsg = 'HTTP版本不受支持'
        break
      default:
        errMsg = '未知错误'
    }
  } else {
    //没有错误码
    errMsg = '无法连接到服务器'
  }
  ElMessage.error(errMsg)
}

// 授权错误处理
const handleAuthError = (errStatus: any) => {
  const authErrMap: any = {
    '10031': '登录失效，需要重新登录', // token 失效
    '10032': '您太久没登录，请重新登录~', // token 过期
    '10033': '账户未绑定角色，请联系管理员绑定角色',
    '10034': '该用户未注册，请联系管理员注册用户',
    '10035': 'code 无法获取对应第三方平台用户',
    '10036': '该账户未关联员工，请联系管理员做关联',
    '10037': '账号已无效',
    '10038': '账号未找到'
  }
  if (authErrMap.hasOwnProperty(errStatus)) {
    ElMessage.error(authErrMap[errStatus])
    return false
  }
  return true
}

// 处理普通错误
const handleGeneralError = (errno: any, errmsg: any) => {
  if (errno !== '0') {
    ElMessage.error(errmsg)
    return false
  }
  return true
}

export { handleAuthError, handleGeneralError, handleNetWorkError }
