<template>
	<view class="buy-container">
		<view class="goods-box" v-for="(item,index) in animalList" :key="index">
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
					<view class="goods-btn" @click="addCart(item)">
						<uni-icons type="plus" color="#252526" size="30"></uni-icons>
					</view>
				</view>
				<view class="goods-nuberandlocation">
					<view class="goods-number">
						<text>数量：{{item.number}}</text>
					</view>
					<view class="goods-location">
						<uni-icons type="location" color="#999" size="20"></uni-icons>
						<text>{{item.address}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="shoppingCart" @click="goshoppingCart" :animalList=animalList v-if="SelectNumber.length">
			<uni-badge class="uni-badge-left-margin" :text="SelectNumber.length" absolute="rightTop" :offset="[-3, -3]"
				size="small">
				<uni-icons type="cart" size="30"></uni-icons>
			</uni-badge>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from "vuex"
	export default {
		onLoad() {
			this._getAnimalsdata()
		},
		data() {
			return {
				animalList: null,
				SelectNumber: []
			}
		},
		created() {
			this.SelectNumber = this.goodsItem
		},
		methods: {
			async _getAnimalsdata() {
				this.animalList = await this.$http.get_animals_data()
			},
			addCart(item) {
				if (!this.SelectNumber.includes(item)) {
					this.SelectNumber = this.SelectNumber.concat(item)
					this.SaveItems(this.SelectNumber)
				}
			},
			async goshoppingCart() {
				await this.checkedIsLogin()
				uni.navigateTo({
					url: "/pages/buycart/buycart"
				})
			},
			...mapMutations(['SaveItems'])
		},
		computed: {
			...mapState(['goodsItem'])
		}
	}
</script>

<style lang="scss">
	@import"css/buy.scss"
</style>
