import ajax from "../../http.js"
export const getLabeList = data => ajax({
	name:"getScrollList",
	data
})


export const getArtciList = data => ajax({
	name:"getArtcileList",
	data
})

