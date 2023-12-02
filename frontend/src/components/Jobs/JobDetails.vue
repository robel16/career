<template>
  <div class="jobDetails flex flex-col gap-6 w-2/6 bg-white py-8 h-full px-8 rounded-l-[50px]">
    <div class="flex justify-start">
      <button
        @click="handleClose"
        class="text-3xl font-bold text-darkerGrey hover:text-orangePrimary focus:outline-none"
      >
        &times;
      </button>
    </div>
    <div class="mt-10 text-center">
      <h2 class="font-bold text-2xl mb-1">UI/UX Designer</h2>
      <h2 class="text-darkerGrey">Addis Ababa, Ethiopia</h2>
    </div>
    <div class="flex flex-col gap-7">
      <div class="mt-6 flex gap-3 items-center">
        <svg class="h-5 fill-bluePrimary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176z"
            />
          </g>
        </svg>
        <h2 class="font-bold text-bluePrimary">Description</h2>
      </div>
      <p class="text-darkerGrey ml-6">
        We are looking for a UI/UX Designer to turn our software into easy-to-use products for our
        clients. UI/UX Designer responsibilities include gathering user requirements, designing
        graphic elements and building navigation components. To be successful in this role, you
        should have experience with design software and wireframe tools. If you also have a
        portfolio of professional design projects that includes work with web/mobile applications,
      </p>
      <a href="#" class="ml-6 font-medium text-sm text-orangePrimary">Read More</a>
    </div>
    <div class="flex flex-col gap-5">
      <div class="mt-6 flex gap-3 items-center">
        <svg
          class="h-5 fill-orangePrimary"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          />
        </svg>
        <h2 class="font-bold text-bluePrimary">Skills and Requirements</h2>
      </div>
      <ul class="text-darkerGrey ml-6 list-disc list-inside">
        <li>Proven work experience as a UI/UX Designer or similar role</li>
        <li>Portfolio of design projects</li>
        <li>Up-to-date knowledge of design software like Adobe Illustrator and Photoshop</li>
        <li>BSc in Design, Computer Science or relevant field</li>
      </ul>
    </div>
    <div class="ml-6 flex gap-8 mt-8">
      <Button class="bg-blue-950" :text="'Apply Now'" />
      <Button :text="'Full Page'" />
    </div>
  </div>
</template>

<script>
import Button from '../Common/Button.vue'
export default {
  components: {
    Button
  },
  methods: {
    handleClose() {
      this.$emit('closeDetails')
    }
  }
}
</script>

<style>
.jobDetails {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
</style>