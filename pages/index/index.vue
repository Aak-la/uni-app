<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :labelList="LabelList" :activeIndex="ActionIndex" @changeActiveIndex="setIsActiveIndex"></TabBar>
		<ArticleList class="list-container" :labelList="LabelList" :activeIndex="ActionIndex"
			@changeCurrentIndex="setIsActiveIndex"></ArticleList>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
			console.log(this.$http);
		},
		data() {
			return {
				LabelList: [],
				ActionIndex: 0
			}
		},
		methods: {
			async _initLabelList() {
				const res = await this.$http.getLabeList()
				this.LabelList = [{
					name: "全部"
				}, ...res]
			},
			setIsActiveIndex(index) {
				
				this.ActionIndex = index;
			}
		}
	}
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}

	.home-container {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		@include flex(flex-start, column);
		align-items: inherit;
	}

	.list-container {
		flex: 1;
		box-sizing: border-box;

	}
</style>
