<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-layout align-space-around justify-center column fill-height>
        <v-flex xs6 class="lpop">
            <v-layout align-center justify-center column fill-height>
                <img class="hg150" src="https://www.img.in.th/images/8f33b0256b313e16700c0fb4fa4d0d86.png" alt="">
                <h2><b>Safe Home</b></h2>
            </v-layout>
        </v-flex>
        <v-flex xs6>
            <v-layout align-space-around justify-center column fill-height>
                <v-flex xs6>
                    <v-layout row wrap fill-height>
                        <v-flex xs6>
                            <v-layout align-space-around justify-center column fill-height  >
                                <VBtn round class="hg100 lok shadow-bl" @click="$router.push('/now')" color="success"><v-icon>mdi-home-automation</v-icon> &nbsp; การตรวจจับปัจจุบัน</VBtn>
                            </v-layout>

                        </v-flex>
                        <v-flex xs6>
                            <v-layout align-space-around justify-center column fill-height>
                                   <VBtn round class="hg100 lsea shadow-bl"  @click="$router.push('/history')" color="success"><v-icon>mdi-home-heart</v-icon> &nbsp; ประวัติการตรวจจับ</VBtn>
                            </v-layout>
                        </v-flex>
                    </v-layout>

                </v-flex>
                <v-flex xs6>
                    <v-layout row wrap fill-height>
                        <v-flex xs6>
                            <v-layout align-space-around justify-center column fill-height>
                                <VBtn round class="hg100 lblue shadow-bl"  @click="$router.push('/frame')" color="success"><v-icon>mdi-database</v-icon> &nbsp; ThingSpeak</VBtn>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-layout align-space-around justify-center column fill-height>
                                <VBtn round class="hg100 lnot shadow-bl"  @click="logout()" color="success"><v-icon>mdi-logout</v-icon> &nbsp;ออกจากระบบ</VBtn>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</v-content>
</template>

    
<script>
import {
    get,
    sync,
    call
} from "vuex-pathify";
export default {
    name: 'Root',
    /*-------------------------Load Component---------------------------------------*/
    components: {

    },
    /*-------------------------Set Component---------------------------------------*/
    props: {

    },
    /*-------------------------DataVarible---------------------------------------*/
    data() {
        return {

        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        /**** Call loading methods*/
        this.load();
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
       async logout(){
             window.localStorage.clear();
             await this.$router.push('/home');  
        },
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
