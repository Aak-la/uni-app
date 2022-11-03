<template>
	<view class="vCode-btn" @click="getFrom">
		获取验证码
	</view>
</template>

<script>
	export default {
		name: "SendCode",
		props: {
			from: Object
		},
		data() {
			return {

			};
		},
		methods: {
			getFrom() {
				this.$emit("getFrom", this._sendCode)
			},
			async _sendCode(form) {
				console.log(form);
				const {
					phone
				} = await form.validateField(['phone'])
				console.log(phone);

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../pages/userInfo/login/css/login.scss";
</style>
