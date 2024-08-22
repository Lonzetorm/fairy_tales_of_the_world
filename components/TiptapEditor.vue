<template>
  <div>
    <div v-if="editor" class="border border-gray-200 rounded-lg mb-2">
      <button
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          class="p-4"
      >
        <BoldIcon/>
      </button>
      <button
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          class="p-4"
      >
        <ItalicIcon/>
      </button>
      <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
          class="p-4"
      >
        <ParagraphIcon/>
      </button>
      <button
          @click="editor.chain().focus().setImage({ src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZVDTn-dUdXPw1X0ztY6G92KJSHfevxYGCz2XVcPeNMgzaC_G0' }).run();"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          class="p-4"
      >
        <PictureIcon/>
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()" class="p-4">
        <LineIcon/>
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()" class="p-4">
        <NewLineIcon/>
      </button>
      <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
          class="p-4"
      >
        <UndoIcon/>
      </button>
    </div>
    <TiptapEditorContent :editor="editor"/>
  </div>
</template>

<script setup>
import Image from '@tiptap/extension-image'

const editor = useEditor({
  content: "<p>Введите текст сказки</p>",
  extensions: [TiptapStarterKit, Image],
  editorProps: {
    attributes: {
      class: 'border border-gray-200 p-4 rounded-lg',
    },
  },
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
