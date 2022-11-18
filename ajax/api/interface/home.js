import ajax from "../../http.js"
export const getLabeList = data => ajax({
	name:"getScrollList",
	data
})


export const getArtciList = data => ajax({
	name:"getArtcileList",
	data
})


export const update_save_like = data => ajax({
	name:"update_save_like",
	data
})
export const get_search_data = data => ajax({
  name:'get_search_data',
  data
})



export const update_labelList = data => ajax({
  name:'update_labelList',
  data
})



export const get_animals_data = data => ajax({
  name:'get_animals_data',
  data
})
