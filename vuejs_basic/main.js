// data là thuộc tính
// methods là phương thức
// khoi tao doi tuong vue = new Vue();
// rang buoc du lieu trong vue data binding
// attrubte thuoc tinh the html
// de hien thi du lieu trong thuoc tinh cua the html can dua
// thuoc tinh do khai bao thuoc tinh cua html do la 1 bien vd v-bind:tenthuoctinh=tenthuoctinhvue
// {{ chi su dung toan tu 3 ngoi va ngan, bieu thuc}}
// khai bao su kien, event trong vue js
// v-on:tên sự kiện= method co truyen tham so
// tham số đặc biệt $event của vue js
//  event Modifiers
//preventDefault huy bo event
//e.stopPropagation() chi chay su kien doi voi doi tuong con ma k anh huong toi doi tuong cha bao no
//Computed la thuoc tinh cua vue, co nhieu thuoc tinh ben trong moi thuoc tinh la function
// tinh toan du tren dl co san
// so luong method bi thua khi chi chay 1 ham no se chay cac ham khac
// method la 1 ham, vue khi load lai trang thi method se chay lai
// computed chi chay khi co su thay doi cua du lieu=>  ho tro xu ly dl lon
// rang buoc du lieu 2 chieu sd dung v-model,
// v-bind:class rang buoc class trong vue js cu phap theo  kiey key value; key la ten class va value xac dinh su an hien class
// v-bind:style ang buoc class trong vue js cu phap theo  kiey key value; key la ten style va value xac dinh su an hien style
// bieu thuc dieu kien v-if, v-else, v-else-if
// v-show se an di doi tuong html con v-if se remove va thay the doi tuong tuong ung
// su dung key trong input de thong bao vs vuejs 2 o input la khac nhau va khong dc su dung lai
// vong lap v-for
// luu y ve vong lap va dieu kienj
// for co do uu tien cao hon v-if
// luu y va array va object trong vue js
// dien chi o nho khong thethay the vo toi va bang cac them moi
// app.$set(app.thuoctinh,key,value)
// thay doi dl ma k ra thi doc ve array change detaction
var v = new Vue({
    el:'#myhead',
    data:{
        message: 'Hello Vue!',
        price:120000,
        counter:0,
        name:"Nguyen",
        texclass:'active',
        isActive: true,
  		hasError: false,
  		bg:'https://zicxa.com/hinh-anh/wp-content/uploads/2019/12/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-m%E1%BA%ABu-background-m%C3%A2y-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-10.png',
  		gtriselect:'login',
  		listNews:[
  			{
  				"id":1,
  				"title":'bai viet 1',
  				"info":'nd 1'
  			},
  			{
  				"id":2,
  				"title":'bai viet 2',
  				"info":'nd 2'
  			},
  			{
  				"id":3,
  				"title":'bai viet 3',
  				"info":'nd 3'
  			}
  		],
  		score:{
  			toan:9,
  			anh:6,
  			van:10
  		},
  		dsuser:[
  			{
  				"email":'trang1@gmail.com',isActive:true
  			},
  			{
  				"email":'trang2@gmail.com',isActive:false
  			},
  			{
  				"email":'trang3@gmail.com',isActive:true
  			},
  			{
  				"email":'trang4@gmail.com',isActive:false
  			},
  		]
    },
    methods:{
    	say:function(e){
    		return "Xin chao"+e;
    	},
    	showprice:function(n){
    		return this.price;
    	},
    	handClick:function(e,number){
    		return this.counter +=number;
    	},
    	handSubmint:function(e){
    		console.log(e);
    		// e.preventDefault(); tuong duong voi v-on:submit.prevent

    	},
    	getdataKeyup:function(e){
    		console.log(e.target.value);
    		return this.name = e.target.value;
    	},
    	changevalue:function(e,giatri){
    		this.gtriselect=giatri;
    	}

    },
    computed:{
    	showmess:function(){
    		return this.message.split('').reverse().join('');
    	},
    	objClass:function(){
    		return { isActive:this.isActive , hasError:this.hasError }
    	},
    	getuseractive(){
    		return this.dsuser.filter(function(u){
    			return u.isActive;
    		})

    	},
    	

    }
});
