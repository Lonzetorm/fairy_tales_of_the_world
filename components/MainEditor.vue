<template>

</template>

<script setup lang="ts">
import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image';

const store = useMainStore()
const imageTool = window.ImageTool;
const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',
  tools: {
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:3002/api/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:3002/api/uploadFile', // Your endpoint that provides uploading by Url
        },
        captionPlaceholder: 'Название картинки'
      }
    }
  },
  onChange: (api, event) => {
    saveChanges()
  }
});

try {
  await editor.isReady;
} catch (reason) {
  console.log(`Editor.js initialization failed because of ${reason}`)
}

function saveChanges() {
  editor.save().then((outputData) => {
    store.taleUploadText = processContentBlocks(outputData.blocks)
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}

function processContentBlocks(blocks) {
  let htmlResult = '';

  blocks.forEach((element) => {
    if (element.type !== 'image') {
      htmlResult += '<p>' + element.data.text + '</p>'
    } else {
      htmlResult += '<img src="' + element.data.file.url +'" alt="'+ element.data.caption +'"/>'
    }
  })

  console.log('blocks: ', blocks)
  console.log('htmlResult: ', htmlResult)

  return htmlResult
}

</script>
