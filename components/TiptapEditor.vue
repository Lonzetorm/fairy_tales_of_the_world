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
          class="border border-gray-200 p-4 rounded-lg"
      >
        paragraph
      </button>
      <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        blockquote
      </button>
      <button
          @click="editor.chain().focus().toggleBlockquote().run()"
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
          class="border border-gray-200 p-4 rounded-lg"
      >
        undo
      </button>
    </div>
    <TiptapEditorContent :editor="editor"/>
  </div>
</template>

<script setup>
const editor = useEditor({
  content: "<p>Введите текст сказки</p>",
  extensions: [TiptapStarterKit],
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
