<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
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
        <v-btn text>
          <nuxt-link to="/login">Login</nuxt-link>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              メニュー
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><nuxt-link to="/user"
                    >マイページ</nuxt-link
                  ></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  ><nuxt-link to="/">タイムライン</nuxt-link></v-list-item-title
                >
              </v-list-item-content>
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
export default {
  name: 'default',
  data() {
    return {
      drawer: null,
      nav_lists: [
        {
          name: 'Getting Started',
          icon: 'mdi-vuetify',
          lists: ['Quick start', 'Pre-mode layouts']
        },
        { name: 'Customization', icon: 'mdi-cogs' },
        {
          name: 'Styles & animations',
          icon: 'mdi-palette',
          lists: ['Colors', 'Contet', 'Display']
        },
        {
          name: 'Ui Components',
          icon: 'mdi-view-dashboard',
          lists: ['API explorer', 'Alerts']
        },
        { name: 'Directives', icon: 'mdi-function' },
        { name: 'Premium themes', icon: 'mdi-veutify' },
        { name: 'Twitter', icon: 'mdi-twitter' }
      ]
    }
  }
}
</script>
