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
		async _initLabelList() {
				const res = await this.$http.getLabeList()
				this.LabelList=res
			}
		}
	}
</script>

<style lang="scss">
	.contion {
		@include flex(flex-start)
	}
</style>
