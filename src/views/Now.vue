<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-toolbar class="lpop">
        <v-btn @click="$router.go(-1)" icon>
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title><b>การตรวจจับปัจจุบัน</b></v-toolbar-title>
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

                    <v-layout column class="pd-20 wd350"><br>
                        <v-card class="lwh round  shadow-bl">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-layout align-center justify-center column fill-height>
                                        <v-icon class="fs50 fs50 w3-text-blue">mdi-calendar</v-icon>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>

                                        <h3 class="fs16"><b>วันที่</b></h3>
                                        <h3 class="fs16">
                                            {{dateConvert(nodeA) }}
                                        </h3>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <br><br>

                        <v-card class="lwh round  shadow-bl">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>
                                        <v-icon class="fs50 w3-text-blue">mdi-timer</v-icon>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>
                                        <h3 class="fs16"><b>เวลา</b></h3>
                                        <h3 class="fs16">
                                               {{timeConvert(nodeA)}}
                                        </h3>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-layout>

                </v-tab-item>

                <v-tab>
                    อุปกรณ์ชุดที่ 2
                </v-tab>
                <v-tab-item>

                    <v-layout column class="pd-20 wd350"><br>
                        <v-card class="lwh round  shadow-bl">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-layout align-center justify-center column fill-height>
                                        <v-icon class="fs50 fs50 w3-text-blue">mdi-calendar</v-icon>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>

                                        <h3 class="fs16"><b>วันที่</b></h3>
                                        <h3 class="fs16"> 
                                                {{dateConvert(nodeB) }}
                                        </h3>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <br><br>

                        <v-card class="lwh round  shadow-bl">
                            <v-layout row wrap>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>
                                        <v-icon class="fs50 w3-text-blue">mdi-timer</v-icon>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6>
                                    <v-layout justify-center column fill-height>
                                        <h3 class="fs16"><b>เวลา</b></h3>
                                        <h3 class="fs16">
                                                 {{timeConvert(nodeB)}}
                                        </h3>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-card>
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
           await this.loadingNode();
        }
    },
}
</script>
