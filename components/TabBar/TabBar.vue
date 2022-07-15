<template>
	<view class="tab">
		<scroll-view scroll-x="true" class="tab-scroll" 
		:scroll-into-view="currenIdex" scroll-with-animation="true">
			<view class="tab-scroll-box">
				<view :class="{active:activeIndex===index}" class="tab-scroll-item"  v-for="(item,index) in labelList"
					:key="item._id" @click="isActiveIndex(index)" :id="`item${index}`">
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
			labelList: {
				type: Array,
			},
			activeIndex:{
				type:Number
			}
		},
		watch:{
			activeIndex(index){
				this.currenIdex=`item${index}` 
			}
		},
		data() {
			return {
				currenIdex:'item0'
			};
		},
		methods: {
			isActiveIndex(index) {
				this.$emit("changeActiveIndex",index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./css/TabBar.scss";
</style>
