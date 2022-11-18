<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:statusHeight+'rpx '}">
			</view>
			<view class="return-icon" :style="{top:statusHeight+'rpx '}" v-if="isSearch" @click="goBack">
				<uni-icons type="back" size="22" color="#fff"></uni-icons>
			</view>
			<view class="nav-bar-content" @click="goSearchPage"
				:style="{marginRight:marginRight+'rpx',marginLeft:isSearch?'20rpx':''}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text" v-if="!isSearch">
					搜索
				</view>
				<input v-else type="text" class="search-input" placeholder="搜索" confirm-type="search"
					v-model.trim="searchVal" @confirm="changeInput">
			</view>
		</view>
		<view :style="{height:statusHeight + 80 +'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			parentVal: {
				type: String
			}
		},
		created() {
			this.getSystemInfo()
		},
		data() {
			return {
				statusHeight: 20,
				marginRight: 0
			};
		},
		methods: {
			getSystemInfo() {
				const systemInfo = uni.getSystemInfoSync()
				systemInfo.statusBarHeight &&
					(this.statusHeight = systemInfo.statusBarHeight * 2)
				//#ifdef MP-WEIXIN
				const menubuttonInfo = uni.getMenuButtonBoundingClientRect()
				this.statusHeight = menubuttonInfo.top * 2.5
				this.marginRight = menubuttonInfo.width * 2.5
				//#endif
			},
			goSearchPage() {
				if (this.isSearch) return
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			goBack() {
				// #ifdef H5
				uni.switchTab({
					url: '../../pages/index/index'
				})
				// #endif
				// #ifndef H5
				uni.navigateBack()
				// #endif
			},
			changeInput() {
				this.$emit('sendSearchData')
			}
		},
		computed: {
			searchVal: {
				get() {
					return this.parentVal
				},
				set(val) {
					this.$emit("updataVal", val)
					if(!val){
						this.$emit("sendSearchData")
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import'./css/navBar.scss'
</style>
