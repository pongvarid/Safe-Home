<!----------Make By YourName---------------->
 <template>
<v-content>
    <v-toolbar class="lpop">
        <v-btn @click="$router.go(-1)" icon>
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title><b>ThingSpeak</b></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    
    <v-layout row wrap fill-height>
        <iframe class="full-width" src="https://thingspeak.com/channels/534975/" frameborder="0"></iframe>
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
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>
