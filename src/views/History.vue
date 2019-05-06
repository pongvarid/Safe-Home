<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-toolbar class="lpop">
        <v-btn @click="$router.go(-1)" icon>
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title><b>ประวัติการตรวจจับ</b></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-layout row wrap justify-center align-center class="lwh">
        <v-layout row wrap justify-center align-content-center class="pd-20">
            <img class="wd100 hg100" src="https://www.img.in.th/images/e3fc23b9c72db25fb58e6833840d10c2.png" alt="">
        </v-layout>
            <v-tabs class="round" v-model="value" color="lblue" dark slider-color="lpop">
                <v-tab>
                    อุปกรณ์ชุดที่ 1
                </v-tab>
                <v-tab-item> 
                    <v-layout justify-center  column class="pd-20 wd350"><br>
                   
                            <v-layout row wrap justify-center >
                                <v-card class="round shadow-bl full-width pd-10 pdl-30 mrt-10" v-for="a in nodeAList" :key="a.entry_id">
                                   <h2 class="fs16" ><b><v-icon>mdi-calendar</v-icon>&nbsp;วันที่ : </b>{{dateConvert(a.created_at)}}</h2> 
                                    <h2 class="fs16" ><b><v-icon>mdi-timer</v-icon>&nbsp;เวลา : </b>{{timeConvert(a.created_at)}}</h2> 
                                </v-card> 
                            </v-layout>
                       
                    
                    </v-layout>

                </v-tab-item>

                <v-tab>
                    อุปกรณ์ชุดที่ 2
                </v-tab>
                <v-tab-item> 
                    <v-layout justify-center  column class="pd-20 wd350"><br>
                   
                            <v-layout row wrap justify-center >
                                <v-card class="round shadow-bl full-width pd-10 pdl-30 mrt-10" v-for="b in nodeBList" :key="b.entry_id">
                                   <h2 class="fs16" ><b><v-icon>mdi-calendar</v-icon>&nbsp;วันที่ : </b>{{dateConvert(b.created_at)}}</h2> 
                                    <h2 class="fs16" ><b><v-icon>mdi-timer</v-icon>&nbsp;เวลา : </b>{{timeConvert(b.created_at)}}</h2> 
                                </v-card> 
                            </v-layout>
                       
                    
                    </v-layout>

                </v-tab-item>

            </v-tabs>
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
            value: 0
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
   ...sync('node/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('node/*'),
        dateConvert(date){
             this.$moment.locale('th');    
            return   this.$moment(date).format('LL');
        },
        timeConvert(date){
            this.$moment.locale('th');    
            return   this.$moment(date).format('LTS');
        },
        /******* Methods default run ******/
        load: async function () {
           await this.loadingNodeList();
        }
    },
}
</script>
