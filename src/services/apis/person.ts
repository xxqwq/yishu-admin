import myRequest from '@/services/axios'
enum LOG {
  // 获取全部人员
  GETALL = '/employee/page'
}

const getAllPeople = async (params: any) => {
  return await myRequest.get(LOG.GETALL, params)
}

export { getAllPeople }
