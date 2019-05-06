<!----------Make By YourName---------------->
 <template>
  <Login/>
</template>

  
<script>
import { get, sync, call } from "vuex-pathify";
import Login from "@/components/Web/Home/Login";
export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {
    Login
  },
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {};
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    /******* Methods default run ******/
    load: async function() {
       let user = window.localStorage.getItem("user");
       if(user){
         await this.$router.replace('/main');
       }
    }
  }
};
</script>
