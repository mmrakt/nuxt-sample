<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Navigation lists</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <!-- no-actionで下の階層の項目を中央揃えに
          :append-iconでtrueなら下の階層を表示、falseなら非表示-->
          <v-list-group
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            :prepend-icon="nav_list.icon"
            no-action
            :append-icon="nav_list.lists ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(list, index) in nav_list.lists" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ list }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Sample App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-btn v-if="isLogin" text @click="signout">
                    サインアウト
                  </v-btn>
                  <v-btn v-else text>
                    <nuxt-link to="/login" text-white>サインイン</nuxt-link>
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-btn color="white">
                    <nuxt-link :to="{ name: 'users-id', params: { id: uid } }">
                      マイページ
                    </nuxt-link>
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content> </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <nuxt />

    <v-footer color="primary" dark app>Vuetify</v-footer>
  </v-app>
</template>

<script>
const firebase = require('firebase')

export default {
  name: 'Default',
  data() {
    return {
      drawer: null,
      nav_lists: [
        {
          name: 'Getting Started',
          icon: 'mdi-vuetify',
          lists: ['Quick start', 'Pre-mode layouts']
        }
      ],
      isLogin: false,
      name: null,
      email: null,
      uid: null,
      photo: null
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogin = true
        this.name = user.displayName
        this.email = user.email
        this.uid = user.uid
        this.photo = user.photoURL
      } else {
      }
    })
  },
  methods: {
    signout() {
      firebase.auth().onAuthStateChanged(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.isLogin = false
            this.$router.push('/login')
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
    mypage() {
      this.$router.push('users/123/')
    }
  }
}
</script>
