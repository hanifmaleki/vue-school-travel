<script>
import TheNavigation from './components/TheNavigation.vue'
export default {
  components: {
    TheNavigation,
  }
}
</script>

<template>
  <TheNavigation />

  <div class="container">
    <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
    <router-view v-slot="{ Component }" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opancity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}

/* .slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
} */

/* .moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-400px);
  }
} */
</style>
