<template>
  <div>
    
  
      <!-- header -->
      

      <div>
        <!-- breadcrumbs -->
        <div class="px-2 flex items-center">
          <div class="py-4 overflow-y-auto whitespace-nowrap flex items-center">
            <a
              class="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            <span class="mx-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a
              class="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
              href="#"
              >News</a
            >
            <span class="mx-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a
              class="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
              href="#"
              >Tech</a
            >
          </div>
        </div>

        <!-- banners -->
        <section class="px-2 lg:flex lg:space-x-2">
          <a
            class="w-full lg:w-2/3 bg-gradient-to-tr bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
            href="#"
          >
            <div
              class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"
            ></div>
            <img
              class="absolute left-0 top-0 w-full h-full z-0 object-cover"
              src="/images/img-1.jpg"
              alt="news"
            />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
              <span
                class="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2"
                >React</span
              >
              <div class="flex mt-3">
                <img
                  class="h-10 w-10 rounded-full mr-2 object-cover"
                  src="https://randomuser.me/api/portraits/men/7.jpg"
                  alt="author"
                />
                <div>
                  <p class="font-semibold text-gray-200 text-sm">John Doe</p>
                  <time class="text-gray-400 text-xs">14 March</time>
                </div>
              </div>
            </div>
          </a>

          <a
            class="w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
            href="#"
          >
            <div
              class="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"
            ></div>
            <img
              class="absolute left-0 top-0 w-full h-full z-0 object-cover"
              src="/images/img-2.jpg"
              alt="news"
            />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <span
                class="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2"
                >Angular</span
              >
              <div class="flex mt-3">
                <img
                  class="h-10 w-10 rounded-full mr-2 object-cover"
                  src="https://randomuser.me/api/portraits/women/7.jpg"
                  alt="author"
                />
                <div>
                  <p class="font-semibold text-gray-200 text-sm">Jane Doe</p>
                  <time class="text-gray-400 text-xs">15 March</time>
                </div>
              </div>
            </div>
          </a>
        </section>

        <main class="lg:flex">
          <div class="w-full lg:w-2/3">
            <!-- post cards -->
            <section class="px-2">
              <a class="block w-full lg:flex mb-10" href="#">
                <img
                  class="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="/images/img-3.jpg"
                  alt="img"
                />
                <div class="flex flex-col justify-between">
                  <div>
                    <h3
                      class="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                    >
                      Phasellus pharetra enim at nisl pharetra, nec fringilla
                      arcu blandit.
                    </h3>
                    <p class="text-gray-700 dark:text-slate-400">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/8.jpg"
                      alt="author"
                    />
                    <div>
                      <p class="font-semibold text-gray-400 text-sm">
                        Jane Doe
                      </p>
                      <time class="text-gray-400 text-xs">13 March</time>
                    </div>
                  </div>
                </div>
              </a>

              <a class="block w-full lg:flex mb-10" href="#">
                <img
                  class="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="/images/img-4.jpg"
                  alt="img"
                />
                <div class="flex flex-col justify-between">
                  <div>
                    <h3
                      class="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                    >
                      Cras ut elit id ligula placerat molestie at non erat.
                    </h3>
                    <p class="text-gray-700 dark:text-slate-400">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters.
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/men/7.jpg"
                      alt="author"
                    />
                    <div>
                      <p class="font-semibold text-gray-400 text-sm">
                        John Doe
                      </p>
                      <time class="text-gray-400 text-xs">14 March</time>
                    </div>
                  </div>
                </div>
              </a>

              <a class="block w-full lg:flex mb-10" href="#">
                <img
                  class="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="/images/img-5.jpg"
                  alt="img"
                />
                <div class="flex flex-col justify-between">
                  <div>
                    <h3
                      class="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                    >
                      Ut egestas diam ut massa elementum euismod.
                    </h3>
                    <p class="text-gray-700 dark:text-slate-400">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img
                      class="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/10.jpg"
                      alt="author"
                    />
                    <div>
                      <p class="font-semibold text-gray-400 text-sm">
                        Jane Doe
                      </p>
                      <time class="text-gray-400 text-xs">12 March</time>
                    </div>
                  </div>
                </div>
              </a>
            </section>

            <!-- pagination -->
            <div class="mt-20 mb-10">
              <ul class="flex justify-center">
                <li>
                  <a class="pagination-item rounded-l-lg" href="#">Previous</a>
                </li>
                <li><a class="pagination-item" href="#">1</a></li>
                <li><a class="pagination-item" href="#">2</a></li>
                <li>
                  <a
                    class="pagination-item text-blue-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                    href="#"
                    >3</a
                  >
                </li>
                <li><a class="pagination-item" href="#">4</a></li>
                <li><a class="pagination-item" href="#">5</a></li>
                <li>
                  <a class="pagination-item rounded-r-lg" href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0"
          >
            <!-- topics -->
            <div class="w-full md:w-1/2 lg:w-full mb-5">
              <h5
                class="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2"
              >
                Popular News
              </h5>
              <ul>
                <li
                  class="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                >
                  <a
                    class="dark:text-slate-400 flex items-center text-gray-600"
                    href="#"
                  >
                    <span
                      class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"
                    ></span>
                    Vue
                    <span class="dark:text-slate-400 text-gray-500 ml-auto"
                      >23 articles</span
                    >
                  </a>
                </li>
                <li
                  class="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                >
                  <a
                    class="dark:text-slate-400 flex items-center text-gray-600"
                    href="#"
                  >
                    <span
                      class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700"
                    ></span>
                    Svelte
                    <span class="dark:text-slate-400 text-gray-500 ml-auto"
                      >20 articles</span
                    >
                  </a>
                </li>
                <li
                  class="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                >
                  <a
                    class="dark:text-slate-400 flex items-center text-gray-600"
                    href="#"
                  >
                    <span
                      class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700"
                    ></span>
                    Angular
                    <span class="dark:text-slate-400 text-gray-500 ml-auto"
                      >15 articles</span
                    >
                  </a>
                </li>
                <li
                  class="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
                >
                  <a
                    class="dark:text-slate-400 flex items-center text-gray-600"
                    href="#"
                  >
                    <span
                      class="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700"
                    ></span>
                    React
                    <span class="dark:text-slate-400 text-gray-500 ml-auto"
                      >7 articles</span
                    >
                  </a>
                </li>
              </ul>
            </div>

            <div class="w-full md:w-1/2 lg:w-full">
              <!-- divider -->
              <div class="border border-dotted md:hidden lg:block"></div>

              <!-- subscribe -->
              <div class="my-5 md:my-0 lg:my-5">
                <h5
                  class="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2"
                >
                  Subscribe
                </h5>
                <p class="dark:text-slate-400 text-gray-600 mb-4">
                  Subscribe to our newsletter.
                </p>
                <input
                  placeholder="your email address"
                  type="email"
                  class="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600 transition-all duration-300"
                />
                <button
                  class="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>

              <!-- divider -->
              <div class="border border-dotted md:hidden lg:block"></div>
            </div>
          </div>
        </main>
      </div>

      <!-- footer -->
     
    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>