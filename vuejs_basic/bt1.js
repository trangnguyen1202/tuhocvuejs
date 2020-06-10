// sử dụng html trong vuejs
// rang buoc du lieu bang v-model
var bt=new Vue({
	el:'#baitap',
	data:{
		name:"Áo phông cá tính",
		ncc:"Hàng việt nam chất lượng cao, bền đẹp",
		price:150000,
		sale:0.5,
		gtriselect:0,
		isactive:true,
		catnuber:0,
		gtrthem:0,
		listsp:[
			{
				"id":1,
				"code":"A1",
				"color":"Đen",
				"qt":2,
				"ha":"./img/mauden.jpg"
			},
			{
				"id":2,
				"code":"A2",
				"color":"Trắng",
				"qt":0,
				"ha":"./img/mautrang.jpg"
			},
			{
				"id":3,
				"code":"A3",
				"color":"Vàng",
				"qt":19,
				"ha":"./img/mauvang.jpg"
			}
		],
		intro:" Ảnh áo thun đẹp xuân hè 2019, bộ sưu tập con mèo hợp tuổi hợi. Mantis-xưởng sản xuất áo thun cao cấp tại Hà Nội.Mantis là nhà sản xuất áo thun với hàng trăm mẫu ảnh áo thun đẹp khách hàng trong nước và quốc tế. Chúng tôi xin giới thiệu bộ mẫu ảnh áo thun con mèo rất hợp với mệnh mộc của tuổi hợi năm 2019.",
		intro2:" <h2>Ảnh áo thun đẹp xuân hè 2019, bộ sưu tập con mèo hợp tuổi hợi.</h2><p>Mantis-xưởng sản xuất áo thun cao cấp tại Hà Nội.Mantis là nhà sản xuất áo thun với hàng trăm mẫu ảnh áo thun đẹp khách hàng trong nước và quốc tế. Chúng tôi xin giới thiệu bộ mẫu ảnh áo thun con mèo rất hợp với mệnh mộc của tuổi hợi năm 2019 </p>"
	},
	methods:{
		changgtriselect:function(gtr){
			this.gtriselect = gtr;
			console.log(gtr);
		},
		classActive:function(index){
			if(index === this.gtriselect){
				return 'active list-inline-item';
			}else{
				return 'list-inline-item ';
			}
		},
		addproducttoCat:function(e,checkslg){
			console.log(checkslg);
			if(checkslg <=0 ){
				alert("Hết hàng");
			}else if(this.gtrthem > checkslg){
				alert("Hàng không đủ");
			}else{
				return this.catnuber = Number(this.catnuber) +Number(this.gtrthem);
			}
			// return this.catnuber = Number(this.catnuber) +Number(this.gtrthem);
			// console.log(this.gtrthem);
		}
	},
	computed:{
		showprice:function(){
			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price);
		},
		showsaleprice:function(){
			return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price * this.sale);
		},
		hienthianhlon(){
    		var key = this.gtriselect;
    		return this.listsp[key].ha;
    		
    	},


	}
		
});