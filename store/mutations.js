export default {
	updateUserInfo(state, userInfo) {
		uni.setStorageSync("userInfo", userInfo)
		state.userInfo = userInfo
	},
	setHistory(state, val) {
		let list = state.historyList;
		// 判断是否包含当前搜索的内容，包含直接不执行任何操作
		if (list.length > 0 && list.findIndex(item => item === val) > -1) return
		list.unshift(val);
		uni.setStorageSync('historyList', list)
		state.historyList = list;
	},
	// 清空搜索历史信息
	cleanHistory(state) {
		uni.removeStorageSync('historyList')
		state.historyList = []
		uni.showToast({
			title: "清空王朝",
			icon: "success"
		})
	},
	setLabelList(state, labelList) {
		uni.setStorageSync("labelList", labelList)
		state.labelList = labelList
	}


}
