<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view :class="{active:isActionIndex===index}" class="tab-scroll-item " v-for="(item,index) in LabelList"
					:key="item._id" @click="setActiveIndex(index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<uni-icons type="gear-filled" size="22" color="666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Tabbar",
		props: {
			LabelList: {
				type: Array,
			}
		},
		data() {
			return {
				isActionIndex: 0,
			};
		},
		methods: {
			setActiveIndex(index) {
				this.isActionIndex = index

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./css/TabBar.scss";
</style>
