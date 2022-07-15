<template>
	<view class="save-icons">
		<uni-icons type="heart" size="20" color="666" @click="changeSaveState"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"saveLikes",
		data() {
			return {
				
			};
		},
		methods: {
			changeSaveState() {
				uni.navigateTo({
					url:'../../pages/userInfo/userInfo'
				})
			}
		},
	}
</script>

<style>

</style>