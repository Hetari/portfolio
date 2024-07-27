<template>
  <div class="border-t border-flax-smoke-500/50 bg-[#0B0B0A]">
    <div
      class="heading-2 justify flex flex-1 items-center justify-between py-7 sm:py-6 md:py-5 3xl:py-6"
    >
      <h3 class="text-left font-extrabold">
        {{ title }}
      </h3>

      <div class="heading-size-3 fill-flax-smoke-500/50" v-html="shape"></div>
    </div>

    <div
      class="heading-4 grid w-full grid-cols-2 space-y-10 font-extrabold lg:skew-y-0"
    >
      <div class="col-span-1">
        <p
          class="text-fancy max-w-[40ch] text-base font-normal text-flax-smoke-300"
        >
          {{ body }}
        </p>
      </div>
      <div class="">
        <div v-for="(heading, index) in headings" :key="index">
          <h3
            class="flex items-center gap-3 py-3"
            :class="{ 'border-y border-flax-smoke-500/50': index === 1 }"
          >
            <span class="font-mono text-base font-normal text-flax-smoke-500"
              >{{ (index + 1).toString().padStart(2, '0') }}
            </span>
            {{ heading }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    headings: {
      type: Array as () => string[],
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
  });
</script>
