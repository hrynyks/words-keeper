<script>
import { defineComponent } from "vue";
import MainLayout from "@/components/shared/MainLayout.vue";
import MainHeader from "@/components/shared/MainHeader.vue";
import MainFooter from "@/components/shared/MainFooter.vue";
import HomePageMainContent from "@/components/homePage/HomePageMainContent.vue";

export default defineComponent({
  name: "HomePageView",
  components: { HomePageMainContent, MainFooter, MainHeader, MainLayout },
});
</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <MainHeader />
    </template>

    <template v-slot:main>
      <HomePageMainContent />
    </template>

    <template v-slot:footer>
      <MainFooter />
    </template>
  </MainLayout>
</template>
