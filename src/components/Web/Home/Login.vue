<!----------Make By YourName---------------->
 <template>
<v-content class="lpop">
    <v-container fluid fill-height>
        <v-layout align-center justify-center fill-height>
            <v-flex xs12 sm8 md4>

                <v-card-text>
                    <center>
                        <img class="hg150" src="https://www.img.in.th/images/8f33b0256b313e16700c0fb4fa4d0d86.png" alt="">
                        <h1 class="fs28 nm"><b>Safe Home </b></h1>
                        <span class="fs16">Mobile application</span>
                    </center><br>
                    <form @submit.prevent="login()">
                        <v-text-field prepend-icon="person" v-model="username" name="login" required label="ชื่อผู้ใช้" type="text"></v-text-field>
                        <v-text-field prepend-icon="lock" v-model="password" name="password" required label="รหัสผ่าน" id="password" type="password"></v-text-field>
                        <center>
                            <v-btn type="submit" color="lwh" class="full-width wd200" round large>
                                <h2 class="fs16"><b>เข้าสู่ระบบ</b></h2>
                            </v-btn><br>
                            <a @click="reg()">สมัครสมาชิก</a>
                        </center>
                    </form>
                </v-card-text>
                <v-flex xs12 class="pd-12">
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
    <VDialog v-model="dialog" attach="false" content-class="class" disabled full-width fullscreen hide-overlay lazy max-width="none" origin="center center" persistent return-value="returnValue" scrollable transition="dialog-transition" value="value" width="auto">
        <v-card>
            <v-toolbar class="lpop">
                <v-btn @click="dialog = false" icon>
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <v-toolbar-title><b>สมัครสมาชิก</b></v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap justify-center align-center>
              <center>  <form  @submit="register(usernameX+'-'+passwordX)">
                    <VTextField v-model="usernameX" label="ชื่อผู้ใช้" required />
                    <VTextField type="password" v-model="passwordX" label="รหัสผ่าน" required/>
                    <VTextField type="password"  v-model="c_password" label="ยืนยันรหัสผ่าน" required />
                    <VBtn type="submit" large round v-if="passwordX == c_password && passwordX != ''" color="success">สมัครสมาชิก</VBtn>
                </form>       </center>  
            </v-layout>
        </v-card>

    </VDialog>
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
            dialog: false,
            usernameX:'',
            passwordX:'',
            c_password:'',
        };
    },
    /*-------------------------Run Methods when Start this Page------------------------------------------*/
    async mounted() {
        await this.checkUser()
        /* this.$nextTick(function () {
             window.setInterval(() => {
                 /* this.$swal.fire({
                      imageUrl: 'https://png.pngtree.com/svg/20170630/spy_947634.png',
                      imageHeight: 150,
                      title: 'พบภัยคุกคาม...',
                      text: 'ตรวจจับคนเดินผ่านอุปกรณ์ ชุดที่ 2',
                      imageAlt: 'A tall image'
                  })
                  this.noti(); 
                 console.log('Hyper loop starting');
             }, 3000);
         }) */
    },
    /*-------------------------Run Methods when Start Routed------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
    computed: {
        ...sync('user/*'),
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        ...call('user/*'),
        noti() {
            cordova.plugins.notification.local.schedule({
                title: "The Big Meeting Notificate test",
                text: "4:15 - 5:15 PM\nBig Conference Room",
                smallIcon: "res://calendar",
                icon: "https://png.pngtree.com/svg/20170630/spy_947634.png"
            });
        },
        async login() {

            let i_user = this.username + '-' + this.password;
            let check = this.userList.filter(d => d.field7 == i_user);

            if (check.length) {
                this.$swal({
                    type: 'success',
                    title: 'ยินดีต้อนรับ',
                    text: 'เข้าสู่ระบบสำเร็จ',
                });
                let storage = window.localStorage;
                storage.setItem("user", "1");
               // await this.$router.replace('/main');
              await location.reload();
            } else {
                this.$swal({
                    type: 'error',
                    title: 'ผิดพลาด',
                    text: 'ไม่สามารถเข้าสู้ระบบได้ กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
                });
            }

        },
        reg() {
            this.dialog = true;
        },
        /******* Methods default run ******/
        load: async function () {

            this.noti();
        }
    },
}
</script>
