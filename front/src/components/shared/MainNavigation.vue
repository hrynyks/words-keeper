<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "MainNavigation",
  methods: {
    ...mapActions({
      changeShowModal: "changeShowModal",
    }),
  },
});
</script>

<template>
  <div>
    <v-tabs fixed-tabs bg-color="indigo-darken-2">
      <v-tab>
        <router-link class="link" active-class="link-active" to="/"
          >home
        </router-link>
      </v-tab>
      <v-tab>
        <router-link class="link" active-class="link-active" to="/counter"
          >counter
        </router-link>
      </v-tab>
      <v-tab> Another Option</v-tab>
      <v-tab @click="changeShowModal(true)"> Add word</v-tab>
    </v-tabs>
  </div>
</template>

<style scoped>
.link {
  color: green;
}

.link-active {
  color: red;
}
</style>
