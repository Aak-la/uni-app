export default {
  install (Vue) {   // 使用install的形式进行安装mixin
    Vue.mixin({
      data () {
        return {
          userRules: {
            loginName: {
              rules: [
                { required: true, 'errorMessage': "账户名不能为空" },
                { validateFunction: this.validateLoginName }   // 自定义验证规则
              ]
            },
            password: {
              rules: [
                { required: true, 'errorMessage': "密码不能为空" },
              ]
            },
            phone: {
              rules: [
                { required: true, 'errorMessage': "电话号码不能为空" },
                { validateFunction: this.validatePhone }   
              ]
            },
            vCode: {
              rules: [
                { required: true, 'errorMessage': "验证码不能为空" },
              ]
            }
          },
          mobileReg: /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/
        }
      },
      methods: {
        validateLoginName (rule, val, data, callback) {
          switch (true) {
            case val.length < 3:
              callback('用户名长度不正确')
              break;
            default:
              return true
          }
        },
        validatePhone (rule, val, data, callback) {
          switch (true) {
            case !this.mobileReg.test(val):
              callback('手机号码格式不正确')
              break;
            default:
              return true
          }
        }
      }
    })
  }
}
