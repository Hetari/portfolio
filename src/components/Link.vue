<template>
  <component
    :is="tag"
    class="h-[2ch] w-fit select-none overflow-y-hidden max-md:h-5"
  >
    <a @click="gotoSection(url)" :href="url" class="group">
      <p
        class="font-fancy -translate-y-0 transition-all duration-300 ease-in-out will-change-auto group-hover:translate-y-[-100%]"
        :class="{ flex: icon }"
      >
        <svg
          v-if="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          class="-scale-x-75 scale-y-75 fill-current"
        >
          <path
            d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"
          ></path>
        </svg>
        {{ label }}
      </p>
      <p
        class="font-fancy transition-all duration-300 ease-in-out will-change-auto group-hover:translate-y-[-100%]"
        :class="{ flex: icon }"
      >
        <svg
          v-if="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          class="-scale-x-75 scale-y-75 fill-current"
        >
          <path
            d="M7.82834 17.2929L10.1213 19.586L8.70709 21.0001L4 16.2929L8.7071 11.5858L10.1213 13L7.82844 15.2929L18 15.2928L17.9999 3H19.9999L20 16.2928C20 16.8451 19.5523 17.2928 19 17.2928L7.82834 17.2929Z"
          ></path>
        </svg>
        {{ label }}
      </p>
    </a>
  </component>
</template>

<script setup lang="ts">
  import { gotoSection } from '@/functions';

  defineProps({
    tag: {
      type: String,
      default: 'p', // Default tag if not provided
    },
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: false,
    },
  });
</script>
