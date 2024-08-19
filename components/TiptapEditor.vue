<template>
  <div>
    <div v-if="editor">
      <button
          @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        bold
      </button>
      <button
          @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        italic
      </button>
      <button
          @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        strike
      </button>
      <button
          @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()"
          :class="{ 'is-active': editor.isActive('code') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        code
      </button>
      <button @click="editor.chain().focus().unsetAllMarks().run()" class="border border-gray-200 p-4 rounded-lg">
        clear marks
      </button>
      <button @click="editor.chain().focus().clearNodes().run()" class="border border-gray-200 p-4 rounded-lg">
        clear nodes
      </button>
      <button
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ 'is-active': editor.isActive('paragraph') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        paragraph
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h1
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h2
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h3
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h4
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h5
      </button>
      <button
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        h6
      </button>
      <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        bullet list
      </button>
      <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        ordered list
      </button>
      <button
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        code block
      </button>
      <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          class="border border-gray-200 p-4 rounded-lg"
      >
        blockquote
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()" class="border border-gray-200 p-4 rounded-lg">
        horizontal rule
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()" class="border border-gray-200 p-4 rounded-lg">
        hard break
      </button>
      <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().chain().focus().undo().run()"
          class="border border-gray-200 p-4 rounded-lg"
      >
        undo
      </button>
      <button
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().chain().focus().redo().run()"
          class="border border-gray-200 p-4 rounded-lg"
      >
        redo
      </button>
    </div>
    <TiptapEditorContent :editor="editor" />
  </div>
</template>

<script setup>
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit],
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
