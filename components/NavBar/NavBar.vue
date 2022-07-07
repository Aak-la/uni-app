<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:statusHeight+'rpx '}">
			</view>
			<view class="nav-bar-content" @click="goSearchPage" :style="{marginRight:marginRight+'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text">
					搜索关键字
				</view>
			</view>
		</view>
		<view :style="{height:statusHeight + 80 +'rpx'}"></view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
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
			goSearchPage(){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import'./css/navBar.scss'
</style>
