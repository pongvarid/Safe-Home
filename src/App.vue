<!----------Make By YourName---------------->
 <template>
 <div id="app">
    <v-app>
       <router-view/>
    </v-app>
  </div>
</template>

  <script>
  import { get,sync,call } from "vuex-pathify"; 
export default {
  name: 'Root',
  /*-------------------------Load Component---------------------------------------*/
  components: {

  },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
  return {
      dateA:'',
      dateB:''
    };
  }, 
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
   async mounted() {
  /**** Call loading methods*/
   
       let user = window.localStorage.getItem("user");
       if(user){
          
       
        this.$nextTick(function () {
             window.setInterval(() => {
                   this.loadingNode();
                 this.notiA();
                 this.notiB();
               
             }, 2000);
         }) 
         }
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
   async beforeRouteEnter(to, from, next) { 
    next()
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed:{
  ...sync('node/*'),
},
  /*-------------------------Methods------------------------------------------*/
methods:{
  ...call('node/*'),
    async notiA(){
        
        if(this.dateA != this.nodeA){
          this.dateA = this.nodeA
          this.$swal.fire({
                      imageUrl: 'https://png.pngtree.com/svg/20170630/spy_947634.png',
                      imageHeight: 150,
                      title: 'พบภัยคุกคาม...',
                      html: 'ตรวจจับคนเดินผ่านอุปกรณ์ ชุดที่ 1 <br><b class="w3-text-red">'+  this.dateConvert(this.dateA)+'</b>',
                      imageAlt: 'A tall image'
                  })
               cordova.plugins.notification.local.schedule({
                title: "พบภัยคุกคาม",
                text: this.dateConvert(this.dateA) +" อุปกรณ์ ชุดที่ 1",
                smallIcon: "res://calendar",
                icon: "https://png.pngtree.com/svg/20170630/spy_947634.png"
            });
        }
  },

    async notiB(){
    
        if(this.dateB != this.nodeB ){
          this.dateB = this.nodeB
          this.$swal.fire({
                      imageUrl: 'https://png.pngtree.com/svg/20170630/spy_947634.png',
                      imageHeight: 150,
                      title: 'พบภัยคุกคาม...',
                      html: 'ตรวจจับคนเดินผ่านอุปกรณ์ ชุดที่ 2 <br><b class="w3-text-red">'+ this.dateConvert(this.dateB )+'</b>',
                      imageAlt: 'A tall image'
                  })
               cordova.plugins.notification.local.schedule({
                title: "พบภัยคุกคาม",
                text: this.dateConvert(this.dateB ) +" อุปกรณ์ ชุดที่ 2",
                smallIcon: "res://calendar",
                icon: "https://png.pngtree.com/svg/20170630/spy_947634.png"
            });
        }
  },

  dateConvert(date){
             this.$moment.locale('th');    
            return   this.$moment(date).format('LLL');
        },
  
  /******* Methods default run ******/
  load:async function(){
    await this.loadingNode();
}
},
  }
</script>