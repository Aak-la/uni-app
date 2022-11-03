<template>
	<view class="ladel-container">
		<view class="ladel-box">
			<view class="ladel-header">
				<view class="ladel-title">
					我的标签
				</view>
				<view class="ladel-edit" @click="changEditstateus">
					{{isEdit?"完成":"编辑"}}
				</view>
			</view>
			<view class="ladel-content">
				<view class="ladel-content-item" v-for="(item,index) in setladelList" :key="item._id">
					{{item.name}}
					<uni-icons @click="deleteLabelItem(item)" v-if="isEdit" class="icon-close" type="clear" size="20"
						color="red"></uni-icons>
				</view>
				<view class="no-data" v-if="!setladelList.length">
					当前没有数据
				</view>
			</view>
		</view>
		<view class="ladel-box">
			<view class="ladel-header">
				<view class="ladel-title">
					标签推荐
				</view>
			</view>
			<view class="ladel-content">
				<view class="ladel-content-item" @click="changelabelList(item)"
					v-for="(item,index) in rescomendLabelLsit" :key="item._id">
					{{item.name}}
				</view>
				<view class="no-data" v-if="!rescomendLabelLsit.length">
					当前没有数据
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				isEdit: false,
				labeLIds: []
			}
		},
		methods: {
			changEditstateus() {
				this.isEdit && this._updataLabel()
				this.isEdit = !this.isEdit
			},
			changelabelList(item) {
				if (!this.isEdit) return
				this.labeLIds.push(item._id)
			},
			deleteLabelItem(item) {
				this.labeLIds = this.labeLIds.filter(id => id !== item._id)
			},
			async _updataLabel() {
				const label_ids = this.setladelList.map(item => item._id)
				const {msg} = await this.$http.update_labelList({useId:this.userInfo._id,label_ids})
				uni.showToast({
					title:msg
				})
				this.updateUserInfo({...this.userInfo,label_ids})
			}

		},

		computed: {
			setladelList() {
				return this.labelList.filter(item => this.labeLIds.includes(item._id))
			},
			rescomendLabelLsit() {

				return this.labelList.filter(item => !this.labeLIds.includes(item._id) && item._id)
			},
			...mapState(["labelList"])

		},
		watch: {
			userInfo: {
				immediate: true,
				handler(newVal, oldVal) {
					this.labeLIds = this.userInfo.label_ids
				}

			}
		}
	}
</script>

<style lang="scss">
	@import "./css/labelAdmin.scss"
</style>
