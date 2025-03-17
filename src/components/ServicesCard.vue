<template>
  <div :class="$attrs.class">
    <div
      class="heading-2 max-sm:heading-3 flex grid-cols-12 items-center justify-start gap-5 py-6 text-left font-semibold sm:py-5 md:grid md:justify-between"
    >
      <span class="col-span-2 self-center text-nowrap">
        ( {{ `0${number}` }} )
      </span>
      <h3 class="col-span-6 col-start-5 text-nowrap">{{ title }}</h3>
      <div
        v-html="shape"
        class="heading-size-3 hidden animate-[spin_10s_linear_infinite] fill-flax-smoke-400/50 lg:block"
      />
    </div>

    <div
      class="relative flex min-h-[35vh] flex-col place-items-start md:grid md:min-h-[40vh] md:grid-cols-12"
    >
      <div
        class="heading-4 text-heading-4 col-span-7 col-start-5 flex w-full flex-col gap-y-5"
      >
        <p
          class="text-balance text-base font-medium text-flax-smoke-300/80 sm:max-w-[40ch]"
        >
          {{ body }}
        </p>

        <div>
          <template v-for="(heading, index) in headings" :key="index">
            <p
              class="flex gap-x-3 py-1 font-bold"
              :class="{
                'border-y border-flax-smoke-500/50 py-1.5!': index === 1,
              }"
            >
              <span
                class="self-center font-mono text-base font-medium text-flax-smoke-500/70"
              >
                {{ (index + 1).toString().padStart(2, '0') }}
              </span>
              {{ heading }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="border-t border-flax-smoke-500/50 bg-[#0B0B0A]">
    <div
      class="heading-3 justify flex flex-1 items-center justify-between py-7 sm:py-6 md:py-5 3xl:py-6"
    >
      <h3 class="text-left font-extrabold">
        {{ title }}
      </h3>

      <div class="heading-size-3 fill-flax-smoke-500/50" v-html="shape"></div>
    </div>

    <div class="heading-5 grid w-full grid-cols-2 font-extrabold lg:skew-y-0">
      <div class="col-span-2 sm:col-span-1">
        <p
          class="font-fancy text-base font-normal text-flax-smoke-300 sm:max-w-[40ch]"
        >
          {{ body }}
        </p>
      </div>
      <div class="col-span-2 sm:col-span-1">
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
  </div> -->
</template>

<script setup lang="ts">
  defineProps({
    number: {
      type: Number,
      required: true,
    },
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
