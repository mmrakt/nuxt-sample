<template>
  <v-content>
    <v-card width="600px" class="mx-auto my-5">
      <v-form ref="form" class="pa-5">
        <label for="name">
          なまえ:
          <v-text-field name="name" type="text" v-model="name" />
        </label>
        <label>
          <span>つぶやき:</span>
          <v-text-field type="text" v-model="content" />
        </label>
        <v-btn color="primary" @click="add">つぶやく</v-btn>
      </v-form>
    </v-card>
    <ul v-for="(post, index) in postList" :key="index" class="p-0">
      <v-card width="600px" class="mx-auto my-3">
        <v-card-text v-if="post.editFlag">
          <v-text-field
            ref="input"
            type="text"
            v-model="newContent"
            @keyup.enter="update(post.id)"
            @blur="close(post.id)"
          />
        </v-card-text>
        <v-card-text v-else>{{ post.content }}</v-card-text>
        <v-card-actions>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ post.name }}</v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-title>{{ post.createdAt }}</v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-row right>
              <v-icon v-if="!post.liked" @click="like(post.id)">mdi-heart</v-icon>
              <v-icon v-else @click="unlike(post.id)" color="red lighten-2">mdi-heart</v-icon>
              <div class="mx-2"></div>
              <v-icon @click="open(post.id, index)">mdi-pencil</v-icon>
              <div class="mx-2"></div>
              <v-btn class="float-right" @click="remove(post.id)" right>
                <v-icon left>mdi-delete</v-icon>削除
              </v-btn>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </ul>
  </v-content>
</template>

<script>
import { firebase, db, postRef } from '../plugins/firebase'
//import { moment, getDate } from 'moment'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: '',
      content: '',
      date: null,
      newContent: ''
    }
  },
  created() {
    this.$store.dispatch('post/postInit')
  },
  methods: {
    add() {
      //データを渡す時はオブジェクト形式にする
      const postData = {
        username: this.name,
        newContent: this.content
      }
      this.$store.dispatch('post/add', postData)
      this.name = ''
      this.content = ''
    },
    open(postId, index) {
      //this.$store.dispatch('post/open', postId)
      this.$nextTick(() => this.$refs.input[index].focus())
      console.log(index)
    },
    close(postId) {
      this.$store.dispatch('post/close', postId)
    },
    update(postId) {
      const postData = {
        id: postId,
        newContent: this.newContent
      }
      this.$store.dispatch('post/update', postData)
      this.editFlag = !this.editFlag
    },
    remove(postId) {
      this.$store.dispatch('post/remove', postId)
    },
    like(postId) {
      this.$store.dispatch('post/like', postId)
    },
    unlike(postId) {
      this.$store.dispatch('post/unlike', postId)
    }
  },
  computed: {
    postList() {
      return this.$store.getters['post/postList']
    },
    //computedに引数は渡せないが、返り値を関数にすれば指定可能
    editFlag() {
      return function(postId) {
        return this.$store.getters[('post/editFlag', postId)]
      }
    }
  }
}
</script>
