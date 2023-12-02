<template>
  <div class="bg-white container mx-auto my-10 py-10 px-3 rounded-3xl">
    <div class="">
      <div>
        <div class="flex relative mt-0 ml-7">
          <svg
            class="cursor-pointer mt-2"
            height="30px"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"
            />
          </svg>
          <div class="absolute left-[36%]">
            <h2 class="font-bold text-2xl mb-1">UI/UX Designer</h2>
            <h2 class="text-darkerGrey">Addis Ababa, Ethiopia</h2>
          </div>
        </div>
        <hr class="mx-5 my-10" />
      </div>
    </div>
    <div class="flex">
      <div class="w-[45%] mx-5 flex flex-col gap-7">
        <div class="flex flex-col gap-4">
          <div class="mt-6 flex gap-1 items-center">
            <svg
              class="ml-5 h-5 fill-bluePrimary"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176z"
                />
              </g>
            </svg>
            <h2 class="font-bold text-bluePrimary">Job Description</h2>
          </div>
          <p class="text-darkerGrey ml-6 pl-4">
            We are looking for a UI/UX Designer to turn our software into easy-to-use products for
            our clients. UI/UX Designer responsibilities include gathering user requirements,
            designing graphic elements and building navigation components. To be successful in this
            role, you should have experience with design software and wireframe tools. If you also
            have a portfolio of professional design projects that includes work with web/mobile
            applications,
          </p>
          <!-- <a href="#" class="ml-6 font-medium text-sm text-orangePrimary">Read More</a> -->
        </div>
        <div class="flex flex-col gap-5">
          <div class="mt-6 flex gap-1 items-center">
            <svg
              class="h-5 ml-5 fill-orangePrimary"
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
            <li>BSc in Design, Computer Science or relevant field</li>
            <li>BSc in Design, Computer Science or relevant field</li>
            <li>BSc in Design, Computer Science or relevant field</li>
          </ul>
          <div class="">
            <Labels :text="'English'" />
            <Labels :text="'React'" />
            <Labels :text="'NodeJs'" />
            <Labels :text="'TailwindCSS'" />
            <Labels :text="'UI/UX'" />
          </div>
          <div class="flex justify-between px-6 mr-6">
            <div>
              <p class="text-bluePrimary font-bold text-base mb-2">
                Experience:
                <span class="text-darkerGrey font-normal capitalize ml-2">3+ years</span>
              </p>
              <p class="text-bluePrimary font-bold text-base">
                Contract: <span class="text-darkerGrey font-normal capitalize ml-2">fulltime</span>
              </p>
            </div>
            <div>
              <p class="text-bluePrimary font-bold text-base mb-2">
                Department: <span class="text-darkerGrey capitalize font-normal ml-2">IT</span>
              </p>
              <p class="text-bluePrimary font-bold text-base">
                Salary:
                <span class="text-darkerGrey capitalize font-normal ml-2">Not Disclosed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 apply text-bluePrimary pl-12 py-10 rounded-3xl ml-auto mr-5">
        <h1 class="text-2xl font-bold py-3 text-bluePrimary">Apply for this job</h1>
        <form class="w-11/12 flex flex-col gap-3" action="">
          <div class="flex gap-2">
            <div>
              <label for="">First name</label>
              <input
                class="w-full rounded-md bg-[#F5F7FB] py-3 px-3 font-medium text-[#6B7280] outline-none"
                type="text"
                name="firstname"
                placeholder="Firstname"
              />
            </div>
            <div>
              <label for="">Last name</label>
              <input
                class="w-full rounded-md bg-[#F5F7FB] py-3 px-3 font-medium text-[#6B7280] outline-none"
                type="search"
                name="lastname"
                placeholder="Lastname"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <label for="">Email</label>
            <input
              class="w-full rounded-md bg-[#F5F7FB] py-3 px-3 font-medium text-[#6B7280] outline-none"
              type="email"
              name="email"
              placeholder="example@domain.com"
            />
          </div>
          <div class="flex flex-col">
            <label for="">Phone Number</label>
            <input
              class="w-full rounded-md bg-[#F5F7FB] py-3 px-3 font-medium text-[#6B7280] outline-none"
              type="tel"
              name="phonenumer"
              pattern="[0-9]{10}"
              placeholder="123-456-7890"
            />
          </div>
          <div class="mb-2 pt-1">
            <label class="mb-1 block text-xl font-semibold text-[#07074D]">Resume</label>
            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" />
              <label
                for="file"
                class="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] py-5 text-center"
              >
                <div>
                  <span class="mb-2 text-base font-semibold text-[#07074D]">
                    Drop your file or
                  </span>
                  <span
                    class="inline-flex cursor-pointer underline rounded font-medium text-[#07074D]"
                  >
                    Upload
                  </span>
                </div>
              </label>
            </div>
            <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
              <div class="flex items-center justify-between">
                <span class="truncate pr-3 text-base font-medium text-[#07074D]"> my-cv.pdf </span>
                <span class="font-bold cursor-pointer hover:text-orangePrimary">&#10006;</span>
              </div>
            </div>
          </div>
          <div>
            <button
              class="hover:shadow-form w-full rounded-md bg-bluePrimary py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '@/components/Jobs/Tags.vue'
import Labels from '../components/Jobs/Labels.vue'
export default {
  components: {
    Tags,
    Labels
  }
}
</script>

<style>
.apply {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}
</style>