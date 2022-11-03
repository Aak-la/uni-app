<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :labelList="labelList" :activeIndex="ActionIndex" @changeActiveIndex="setIsActiveIndex"></TabBar>
		<ArticleList class="list-container" :labelList="labelList" :activeIndex="ActionIndex"
			@changeCurrentIndex="setIsActiveIndex"></ArticleList>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				ActionIndex: 0
			}
		},
		methods: {
			async _initLabelList() {
				if (this.labelList.length) return
				const res = await this.$http.getLabeList()
				this.setLabelList([{
					name: "全部"
				}, ...res])
			},
			setIsActiveIndex(index) {

				this.ActionIndex = index;
			},
			...mapMutations(["setLabelList"])
		},
		computed: {
			//...mapState(["labelList"])
			labelList() {
				if (this.userInfo) {
					this.ActionIndex = 0
					return [...this.$store.state.labelList.slice(0, 1), ...this.$store.state.labelList.filter(item =>this
						.userInfo.label_ids.includes(item._id))]
				} else {
					return this.$store.state.labelList
				}
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
