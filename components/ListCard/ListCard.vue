<template>
	<view>
		<view class="list-card" v-if="item.mode==='base'" @click="goArticleDetail">
			<view class="list-card-img">
				<image :src="item.cover[0]"></image>
			</view>
			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>{{item.title}}</text>
				</view>
				<view class="list-card-content-desc">
					<view class="article-type">
						{{item.classify}}
					</view>
					<view class="browse-number">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>

		<view class="list-card mode-column" v-if="item.mode==='column'" @click="goArticleDetail">
			<view class="list-card-top">
				<text>{{item.title}}</text>
			</view>
			<view class="list-card-middle">
				<view class="image-container" v-for="(img,index) in item.cover.slice(0,3)" :key="index">
					<image :src="img" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-content-desc list-card-bottom">
				<view class="article-type">
					{{item.classify}}
				</view>
				<view class="browse-number">
					{{item.browse_count}}浏览
				</view>
			</view>

		</view>

		<view class="list-card mode-image" v-if="item.mode==='image'" @click="goArticleDetail">
			<view class="list-card-top">
				<view class="image-container">
					<image src="https://img1.sycdn.imooc.com/5ccfac620001f8d405000344.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="list-card-middle">
				<text>{{item.title}}</text>
			</view>
			<view class="list-card-content-desc list-card-bottom">
				<view class="article-type">
					{{item.classify}}
				</view>
				<view class="browse-number">
					{{item.browser_count}}浏览
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ListCard",
		props: {
			item: Object
		},
		data() {
			return {

			};
		},
		methods: {
			goArticleDetail() {
				const {
					_id,
					title,
					author,
					create_time,
					thunbs_up_count,
					browse_count
				} = this.item
				const params = {
					_id,
					title,
					author,
					create_time,
					thunbs_up_count,
					browse_count
				};
				uni.navigateTo({
					url: `../../pages/Detail/Detail?params=${JSON.stringify(params)}`
				})
				this.$emit("saveSearchHistory")

			}
		}
	}
</script>

<style lang="scss">
	@import './css/ListCard.scss'
</style>
