<template>
  <view class="save-incons" @click.stop="_changeSaveStatus">
    <uni-icons color="#ff6600" :type="isLike ? 'heart-filled':'heart'" size="20"></uni-icons>
  </view>
</template>

<script>
export default {
  name: "SaveLikes",
  props: {
    item: Object
  },
  data () {
    return {

    };
  },
  methods: {
    async _changeSaveStatus () {
      // TODOS 判断用户是否登录
      await this.checkedIsLogin();
      const { msg, newUserInfo } = await this.$http.update_save_like({
        articleId: this.item._id,
        userId: this.userInfo._id
      })
      uni.showToast({
        title: msg,
        icon: 'none'
      })
      this.updateUserInfo({ ...this.userInfo, ...newUserInfo })
    },
  },
  computed: {
    isLike () {
      return this.userInfo && this.userInfo.article_likes_ids.includes(this.item._id)
    }
  }
}
</script>

<style>
</style>
