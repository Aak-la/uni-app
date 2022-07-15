<template>
	<swiper class="swiper-container" :current="activeIndex" @change="changeCurrentIndex">
		<swiper-item v-for="(item,index) in labelList" :key="index">
			<view class="swiper-item">
				<Listitem :loadData="loadDate[index]" :articleList="articleData[index]" @loadMore="loadMoreData"></Listitem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			labelList: Array,
			activeIndex: Number
		},
		created() {

		},
		data() {
			return {
				articleData: {},
				pageSize: 6,
				loadDate: {}
			}
		},
		watch: {
			labelList(newVal, OldVal) {
				this._getArticleList(this.activeIndex)
			},
		},
		methods: {
			changeCurrentIndex(e) {
				const {
					current
				} = e.detail
				this.$emit('changeCurrentIndex', current)
				if (!this.articleData[current] || this.articleData[current].length == 0) {
					this._getArticleList(current)
				}
			},
			async _getArticleList(currentIndex) {
				if (!this.loadDate[currentIndex]) {
					this.loadDate[currentIndex] = {
						page: 1,
						loading: "loading",
						total: 0
					}
				}
				const {
					articleList,
					total
				} = await this.$http.getArtciList({
					classify: this.labelList[currentIndex].name,
					page: this.loadDate[currentIndex].page,
					pageSize: this.pageSize
				})

				let oldList = this.articleData[currentIndex] || []
				oldList.push(...articleList)
				this.$set(this.articleData, currentIndex, oldList)
				this.loadDate[currentIndex].total = total
				console.log(this.articleData);
			},
			loadMoreData() {
				if (this.loadDate[this.activeIndex].total === this.articleData[this.activeIndex].length) {
						this.loadDate[this.activeIndex]={
							...this.loadDate[this.activeIndex],
							...{loading:"noMore"}
						}
						this.$forceUpdate()
						return 
					}
					this.loadDate[this.activeIndex].page++; this._getArticleList(this.activeIndex)
				}
			}
		}
</script>

<style lang="scss">
	.swiper-container {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
