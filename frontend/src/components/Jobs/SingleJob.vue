<template>
  <div @click="handleClick" class="container mx-auto flex justify-center items-center gap-8">
    <div class="single-job bg-white w-4/5 text-bulePrimary cursor-pointer px-10 py-7 rounded-3xl">
      <div class="flex justify-between">
        <div class="">
          <h2 class="text-bluePrimary capitalize font-bold text-lg">{{ job.title }}</h2>
          <p class="text-gray-400 capitalize text-sm">{{ job.contract }}</p>
        </div>
        <div>
          <h2 class="text-bluePrimary capitalize font-medium text-base">{{ job.location }}</h2>
          <div class="flex items-center gap-1">
            <svg
              enable-background="new 0 0 26 26"
              id="Слой_1"
              version="1.1"
              viewBox="0 0 26 26"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="14px"
              class="fill-orangePrimary"
            >
              <!-- SVG paths -->
            </svg>
            <p class="text-gray-400 text-sm">Location</p>
          </div>
        </div>
        <div class="flex justify-start items-center flex-col gap-2">
          <Button class="!bg-blue-950" @click="handleClick" :text="'View Details'" />
          <p class="text-gray-400 text-sm">{{ fromNow(job.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Common/Button.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export default {
  components: {
    Button
  },
  props: {
    selected: Boolean,
    jobId: Number,
    job: Object
  },
  methods: {
    handleClick() {
      this.$emit('jobClick', this.jobId)
    },
    fromNow(date) {
      return dayjs(date).fromNow()
    }
  }
}
</script>

<style>
.single-job {
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
}
</style>