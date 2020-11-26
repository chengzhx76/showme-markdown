<template>
  <div class="easy-markdown">
    <div class="markdown"></div>
    <textarea id="element"></textarea>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue'

  import EasyMDE from 'easymde'

  export default {
    name: 'easy-markdown',
    setup() {
      const markdown = reactive({
        mde: null
      })

      onMounted(() => {
        markdown.mde = new EasyMDE(
          {
            element: document.getElementById('element'),
            spellChecker: false,
            initialValue: 'sssdfssse',
            toolbar: [
              {
                name: "bold",
                action: EasyMDE.toggleBold,
                className: "fa icon-small fa-bold",
                title: "加粗"
              },
              {
                name: "italic",
                action: EasyMDE.toggleItalic,
                className: "fa icon-small fa-italic",
                title: "斜体"
              },
              {
                name: "heading",
                action: EasyMDE.toggleHeadingSmaller,
                className: "fa icon-small fa-header",
                title: "标题"
              },
              '|',
              {
                name: "quote",
                action: EasyMDE.toggleBlockquote,
                className: "fa icon-small fa-quote-left",
                title: "引用"
              },
              {
                name: "unordered-list",
                action: EasyMDE.toggleUnorderedList,
                className: "fa icon-small fa-list-ul",
                title: "无序"
              },
              {
                name: "ordered-list",
                action: EasyMDE.toggleOrderedList,
                className: "fa icon-small fa-list-ol",
                title: "有序"
              },
              '|',
              {
                name: "preview",
                action: EasyMDE.togglePreview,
                className: "fa icon-small fa-eye no-disable",
                title: "预览"
              },
              {
                name: "side-by-side",
                action: EasyMDE.toggleSideBySide,
                className: "fa icon-small fa-columns no-disable no-mobile",
                title: "实时预览"
              },
              {
                name: "fullscreen",
                action: EasyMDE.toggleFullScreen,
                className: "fa icon-small fa-arrows-alt no-disable no-mobile",
                title: "全屏"
              },
              {
                name: "guide",
                action: 'https://github.com/chengzhx76/markdown-editor',
                className: "fa icon-medium fab fa-github",
                title: "GitHub",
              }
            ]
          }
        )
      })

      return {
        markdown
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../styles/easymde.css";
  .easy-markdown {
    height: 100%;
  }
</style>
