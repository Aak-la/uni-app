<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.jpg" class="banner-bg" mode=""></image>
		<view class="login-nav">
			<view class="nav-item" @click="changFormType('account')" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="changFormType('mobile')" :class="{'active':type !=='account'}">
				手机登录
			</view>
		</view>
		<uni-forms class="form" ref="form" :modelValue="formData" :rules="userRules">
			<view v-if="type ==='account'">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<input placeholder-class="placeholder" class="form-input" type="password" placeholder="请输入密码"
						v-model="formData.password" />
				</uni-forms-item>
			</view>
			<view v-else>
				<uni-forms-item label="手机号" name="phone">
					<input placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号"
						v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入验证码"
						v-model="formData.vCode" />
					<SendCode @getFrom="getFrom" class="code-component"></SendCode>
				</uni-forms-item>
			</view>

			<button class="login-btn" @click="_userLoginSubmit">立即登录</button>
		</uni-forms>
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from "vuex"
	export default {

		data() {
			return {
				type: 'account',
				formData: {
					loginName: 'alan9558',
					password: '123qwe',
					phone: '',
					vCode: '',
				}
			}
		},
		methods: {
			changFormType(type) {
				this.type = type;
				this.$refs.form.clearValidate([])
			},
			async _userLoginSubmit() {
				const res = await this.$refs.form.validate()
				this._sendUserInfo({
					...res,
					type: this.type
				})
			},
			async _sendUserInfo(data) {
				const userInfo = await this.$http.user_login(data)
				if (userInfo) {
					this.updateUserInfo(userInfo)
					uni.showToast({
						title: "登录成功",
						icon: 'none'
					})
					setTimeout(() => {
						// #ifdef H5
						uni.switchTab({
							url:'/pages/index/index'
						})
						// #endif
						// #ifndef H5
						uni.navigateBack()
						// #endif
					}, 1500)

				}
			},
			getFrom(callback){
				callback&&callback(this.$refs.form)
			},
			...mapMutations(['updateUserInfo'])
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
</style>

<style lang="scss" scoped>
	@import "./css/login.scss";
</style>
