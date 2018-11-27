const topic = (ajaxinstance) => {
  const api = {}

  api.getTopicDeatil = id => {
    return ajaxinstance({
      method: 'GET',
      url: `/v1/topic/${id}}`
    })
  }

  api.getTopicReply = (params={}) => {
    return ajaxinstance({
      method:'GET',
      url: '/v1/reply/list',
      params
    })
  }

  api.getHotTopic = (params={}) => {
    return ajaxinstance({
      method: 'GET',
      url: `/v1/group/index`,
      params
    })
  }

  return api
}

export default topic