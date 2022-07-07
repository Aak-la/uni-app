<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :LabelList="LabelList"></TabBar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				LabelList: null
			}
		},
		methods: {
			_initLabelList() {
				uniCloud.callFunction({
					name: "getScrollList",
				}).then((res) => {
					console.log(res.result);
					this.LabelList = res.result.labelList
				})
			}
		}
	}
</script>

<style lang="scss">
	.contion {
		@include flex(flex-start)
	}
</style>
