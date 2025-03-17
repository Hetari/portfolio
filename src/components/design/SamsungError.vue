<template>
  <div
    id="samsung-error-modal"
    class="flex-center fixed inset-0 z-50 h-svh w-svw bg-black/75 opacity-0"
  >
    <div
      class="flex-center z-50 mx-auto size-full h-1/2 w-11/12 flex-col rounded-lg bg-white p-5 shadow-sm md:w-1/2"
    >
      <div class="flex flex-col items-center text-center">
        <div class="inline-block rounded-full bg-yellow-50 p-4">
          <svg
            class="h-12 w-12 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
            />
          </svg>
        </div>
        <h2 class="mt-2 font-semibold text-gray-800">
          It seems you're using the <b>Samsung Internet Browser</b>.
        </h2>
        <p class="mt-2 w-full text-start text-sm leading-relaxed text-gray-600">
          Some features might not work as expected, especially in dark mode, to
          fix it please follow the steps below:
        </p>
        <br />
        <div class="flex-center">
          <!-- Settings -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M2.25607 15.6322C2.29003 15.309 2.52424 15.0485 2.99267 14.5276L4.02374 13.3749C4.27577 13.0558 4.45462 12.5 4.45462 11.9998C4.45462 11.5 4.27571 10.944 4.02371 10.625L2.99267 9.47231C2.52424 8.95137 2.29002 8.6909 2.25607 8.36768C2.22211 8.04446 2.39707 7.74083 2.74698 7.13358L3.24056 6.27698C3.61386 5.62915 3.8005 5.30523 4.11808 5.17607C4.43566 5.0469 4.79482 5.14883 5.51316 5.35267L6.73339 5.69637C7.192 5.80212 7.67315 5.74213 8.0919 5.52698L8.42878 5.33261C8.78786 5.10262 9.06406 4.76352 9.21694 4.36493L9.5509 3.36754C9.77047 2.70753 9.88026 2.37752 10.1416 2.18876C10.403 2 10.7502 2 11.4445 2H12.5593C13.2537 2 13.6009 2 13.8622 2.18876C14.1236 2.37752 14.2334 2.70753 14.453 3.36754L14.7869 4.36493C14.9398 4.76352 15.216 5.10262 15.5751 5.33261L15.912 5.52698C16.3307 5.74213 16.8119 5.80212 17.2705 5.69637L18.4907 5.35267C19.209 5.14883 19.5682 5.0469 19.8858 5.17607C20.2034 5.30523 20.39 5.62915 20.7633 6.27698L21.2569 7.13358C21.6068 7.74083 21.7817 8.04446 21.7478 8.36768C21.7138 8.6909 21.4796 8.95137 21.0112 9.47231L19.9801 10.625C19.7282 10.944 19.5492 11.5 19.5492 11.9998C19.5492 12.5 19.7281 13.0558 19.9801 13.3749L21.0112 14.5276C21.4796 15.0485 21.7138 15.309 21.7478 15.6322C21.7817 15.9555 21.6068 16.2591 21.2569 16.8663L20.7633 17.7229C20.39 18.3707 20.2034 18.6947 19.8858 18.8238C19.5682 18.953 19.209 18.8511 18.4907 18.6472L17.2705 18.3035C16.8118 18.1977 16.3306 18.2578 15.9118 18.473L15.575 18.6674C15.2159 18.8974 14.9398 19.2364 14.787 19.635L14.453 20.6325C14.2334 21.2925 14.1236 21.6225 13.8622 21.8112C13.6009 22 13.2537 22 12.5593 22H11.4445C10.7502 22 10.403 22 10.1416 21.8112C9.88026 21.6225 9.77047 21.2925 9.5509 20.6325"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M2.73696 18.7798C3.81696 17.6998 7.48896 14.0638 7.84896 13.6438C8.22953 13.1998 7.92096 12.5998 8.10456 10.7398C8.1934 9.8398 8.38699 9.16555 8.94096 8.6638C9.60096 8.0398 10.141 8.0398 12.001 7.99781C13.621 8.0398 13.813 7.8598 13.981 8.27981C14.101 8.57981 13.741 8.7598 13.309 9.23981C12.349 10.1998 11.785 10.6798 11.731 10.9798C11.341 12.2998 12.877 13.0798 13.717 12.2398C14.0346 11.9221 15.505 10.4398 15.649 10.3198C15.757 10.2238 16.0155 10.2284 16.141 10.3798C16.249 10.4859 16.261 10.4998 16.249 10.9798C16.2379 11.4241 16.2428 12.062 16.2442 12.7198C16.2459 13.5721 16.201 14.5198 15.841 14.9998C15.121 16.0798 13.921 16.1398 12.841 16.1878C11.821 16.2478 10.981 16.1398 10.717 16.3318C10.501 16.4398 9.36096 17.6398 7.98096 19.0198L5.52096 21.4798C3.48096 23.0998 1.23696 20.5798 2.73696 18.7798Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>

          <!-- Right Arrow -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M14 12L4 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <i>Labs</i>

          <!-- Right Arrow -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M14 12L4 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.5859 13.6026L17.6194 14.3639C16.0536 15.5974 15.2707 16.2141 14.6354 15.9328C14 15.6515 14 14.6881 14 12.7613L14 11.2387C14 9.31191 14 8.34853 14.6354 8.06721C15.2707 7.7859 16.0536 8.40264 17.6194 9.63612L18.5858 10.3974C19.5286 11.1401 20 11.5115 20 12C20 12.4885 19.5286 12.8599 18.5859 13.6026Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <i>Enable 'Use website dark theme'</i>
        </div>

        <p class="mt-3 text-xl font-bold">Then reload the page.</p>
      </div>

      <div class="mt-3 flex w-full items-center" @click="handleClick">
        <button
          class="flex-1 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { displayNone } from '@/animations';
  import { lenis } from '@/main';
  import { onMounted } from 'vue';

  const handleClick = () => {
    displayNone('#samsung-error-modal');
  };

  onMounted(() => {
    lenis.stop();
  });

  // const showModal = ref(false);
</script>
