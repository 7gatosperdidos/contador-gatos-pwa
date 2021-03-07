const app = Vue.createApp({
	data(){
		return{
			title: "Contador App - VUE",
			count: 0,
		};
	},
	methods: {
		//disCount(){
		//	this.count -= 1;
		//},
		//addCount(){
		//	this.count += 1;
		//}
		modCount(instrucion = "add", limite = 1){
			if (instrucion === "restar") {
				this.count -= limite;
			} else {
				this.count += limite;
			}
		}
	}
});