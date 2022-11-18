<template>
	<view class="buycart-container">
		<uni-notice-bar show-icon scrollable :text="showText"  :speed="50"/>
		<view class="goods-box" v-for="(item,index) in goodsItem" :key="index">
			<view class="goods-img">
				<image :src="item.img" alt="">
			</view>
			<view class="goods-description">
				<view class="goods-title">
					<text>{{item.title}}</text>
				</view>
				<view class="goods-rice-warp">
					<view class="goods-rice">
						<view>价格：￥{{item.rice}}0</view>
						<view>
							<text style="color: crimson;">促销价满:200减20</text>
						</view>
						<view>当天送货上门</view>
					</view>
				</view>
				<view class="goods-nuberandlocation">
					<view class="goods-number">
						<text>数量：1</text>
					</view>
					<view class="goods-location">
						<uni-icons type="location" color="#999" size="20"></uni-icons>
						<text>{{item.address}}</text>
					</view>
				</view>
			</view>
		</view>
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" v-if="goodsItem.length" />
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	export default {
		data() {
			return {
				options: [{
					icon: 'cart',
					text: '购物',
					info: 0
				}],
				buttonGroup: [{
					text: '立即结算',
					backgroundColor: '#ED1A25',
					color: '#fff'
				}],
				slogan: ["别因便宜买太多，做您家的储藏室。", "快乐购物，生活开怀。", '省钱省心，首选易购。', '衣食住行吉时“宇”，一站乐购嗨到“佳”！']
			}
		},
		methods: {
			onClick(e) {
				uni.navigateBack()
			},
			buttonClick(e) {
			},
			...mapMutations(['cleanItems'])
		},
		computed:{
			showText(){
			let index=Math.floor(Math.random()*this.slogan.length)
			return this.slogan[index]
			},
			...mapState(['goodsItem'])
		}
	}
</script>

<style lang="scss">
@import "./css/buycart.scss";
</style>
