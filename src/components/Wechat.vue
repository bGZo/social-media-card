<script setup>
// TODO: Menu 重构
import background from '@/assets/image/background.png'
import avatar from '@/assets/image/avatar.jpg'
import html2canvas from 'html2canvas';
import { ref } from "vue";
import Share from "@/assets/icon/share.vue";
import Plus from "@/assets/icon/plus.vue";

const name = 'H.X.';
const desc = '你事事選擇忍耐退讓，但你得知道，那是永無盡頭的。';
const mainContainer = ref(null);

function screenshot(){
  // NOTE: not longer using this.$refs.mainContainer
  if (mainContainer.value) {
    html2canvas(mainContainer.value).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      // 创建下载链接
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "screenshot.png";
      link.click();
    });
  } else {
    console.error("mainContainer is not available");
  }
}

</script>


<template>

  <div class="main-container w-full h-screen flex items-center justify-center bg-gray-100" ref="mainContainer">
      <div class="content w-2/5 h-3/5 bg-white shadow-lg rounded-lg flex flex-col">

        <div class="header h-3/5 w-full">

          <div class="h-full w-full rounded-t-lg bg-cover bg-[position:40%_60%]"
               :style="{ backgroundImage: `url(${background})` }"
          />
          <!--NOTE: 图片位置调整：
          1 bg-cover： 从左上开始显示；
          2 bg-center： 居中显示，然后会上下重复
          3 bg-cover bg-center： 左右上下居中
          4 bg-[length:150%] bg-[position:10%_20%]
          5  bg-cover bg-[position:50%_60%]

          Other Color choose:
          bg-gradient-to-r from-cyan-500 to-blue-500
          -->

          <div class="profile float-right flex flex-col ml-3 mr-3 -mt-11 ">
            <div class="info flex justify-end flex-row mr-3">
              <div class="name flex items-center justify-center">
                <div class="font-serif font-medium text-sm mr-1 text-white ">{{ name }}</div>
              </div>

              <img class="w-16 h-16 rounded" :src="avatar"/>
            </div>
            <div class="font-medium dark:text-white">
              <div class="font-serif text-sm text-gray-500 dark:text-gray-400">{{ desc }}</div>
            </div>
          </div>

        </div>

        <div class="main-content h-2/5 w-full">
          <div class="text-4xl font-bold text-center text-gray-800">
<!--            Hello World!-->
          </div>
        </div>

    </div>
  </div>

  <div data-dial-init class="fixed bottom-6 end-24 group">
    <div id="speed-dial-trigger" class="flex flex-col items-center hidden mb-4 space-y-2">
      <button
          @click="screenshot"
          type="button"
          class="border-none relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
        <Share />
        <span class="absolute block mb-px text-sm font-medium -translate-y-1/2 -start-14 top-1/2">Share</span>
      </button>
    </div>
    <button
        type="button"
        data-dial-toggle="speed-dial-trigger"
        aria-controls="speed-dial-trigger"
        aria-expanded="false"
        class="flex items-center justify-center text-gray border-none bg-gray-200 rounded-full w-14 h-14 hover:bg-gray-400 "
    >
      <Plus />
      <span class="sr-only">Speed dial</span>
    </button>
  </div>

  <!-- TODO: 重构 <Menu />-->
</template>