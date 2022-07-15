export default{
	install(vue){
		vue.mixin({
			data(){
				return{
					msg:"dasd"
				}
			},
			methods:{
				abc(){
					return "abc"
				}
			}
		})
	}
}