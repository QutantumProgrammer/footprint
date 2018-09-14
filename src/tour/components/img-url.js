let files = require.context('../../../static/origin-img', true, /\.JPG$/)
let imgUrlMap = {}

files.keys().forEach(function (val) {
  let firstSplitMarkIndex = val.indexOf('/')
  let lastSplitMarkIndex = val.lastIndexOf('/')
  let parentAttr = val.substring(firstSplitMarkIndex + 1, lastSplitMarkIndex)
  let imgUrl = val.substring(lastSplitMarkIndex)
  if (!imgUrlMap[parentAttr]) imgUrlMap[parentAttr] = []
  imgUrlMap[parentAttr].push({
    url: '../static/origin-img/' + parentAttr + imgUrl,
    previewUrl: '../static/low-quality-img/' + parentAttr + imgUrl
  })
})

export default imgUrlMap
