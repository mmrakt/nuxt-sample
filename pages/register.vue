<template>
  <v-content>
    <v-card width="600px" class="mx-auto my-10">
      <v-card-title class="text-md-center">新規会員登録フォーム</v-card-title>
      <v-divider></v-divider>
      <ValidationObserver ref="obs">
        <v-form ref="form">
          <v-container class="px-10">
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="required|alpha_num|min:8"
            >
              <v-text-field
                v-model="userId"
                name="userId"
                type="text"
                label="ユーザーID"
                :error-messages="errors"
                :success="valid"
                alpha_num
                required
                min:8
                placeholder="半角英数字8文字以上"
              />
            </ValidationProvider>
            <v-text-field
              v-model="profile"
              name="profile"
              type="text"
              label="プロフィール文"
            />
            <date-picker v-model="date" />
            <v-btn color="primary" @click="submit">登録</v-btn>
          </v-container>
        </v-form>
      </ValidationObserver>
    </v-card>
  </v-content>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import DatePicker from '../components/DatePicker'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    DatePicker
  },
  data() {
    return {
      userId: '',
      profile: '',
      date: ''
    }
  },
  computed: {
    userData() {
      return this.$store.state.auth.data
    }
  }
}
</script>

<style lang="scss" scoped></style>
