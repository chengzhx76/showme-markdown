<template>
  <div class="easy-markdown">
    <textarea id="element"></textarea>
    
    <div class="more">
      <div class="button templet" @click="openTemplet">模版</div>
      <div class="button gen-link" @click="genLink">生成专属链接</div>
    </div>
    <div class="modal"  @click="closeModal" v-show="modalState"></div>
  </div>
</template>

<script>
  import { reactive, onMounted, ref } from 'vue'

  import EasyMDE from 'easymde'

  export default {
    name: 'easy-markdown',
    setup() {
      const modalState = ref(false);
      const markdown = reactive({
        mde: null
      })

      let content = ''

      onMounted(() => {

        markdown.mde = new EasyMDE(
          {
            element: document.getElementById('element'),
            spellChecker: false,
            initialValue: content,
            placeholder: "开始书写...",
            status: ["autosave", "lines", "words"],
            renderingConfig: {
              singleLineBreaks: false,
              codeSyntaxHighlighting: true
            },
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
              },
              {
                name: "format_table",
                action: function (editor){
                    // console.log(markdown.mde);
                    console.log(editor.options);
                    console.log(editor.gui);
                    console.log(editor.toolbar_div);
                    editor = markdown.mde
                    // https://github.com/Ionaru/easy-markdown-editor/blob/f286a6bae5a1dce943476c90ca77e86285c83da9/src/js/easymde.js#L966
                    var cm = editor.codemirror;
                    var wrapper = cm.getWrapperElement();
                    var preview = wrapper.lastChild;
                    let html = editor.options.previewRender(editor.value(), preview);
                    console.log(html)
                    var selection = editor.codemirror.doc.getSelection();
                    editor.codemirror.doc.replaceSelection(selection);
                },
                className: "fa fa-align-justify",
                title: "格式化表格",
              }
            ]
          }
        )
        // console.log(markdown.mde.__proto__)

        // markdown.mde.togglePreview()


        /*let toolbar = document.getElementsByClassName("editor-toolbar")
        let toolbarRight = document.createElement('span')
        let link = document.createElement('a')
        let text = document.createTextNode('生成专属链接'); 
        link.appendChild(text);
        link.setAttribute('href','https://mp.csdn.net');
        toolbarRight.appendChild(link)
        toolbarRight.className = 'editor-toolbar-right'
        toolbar[0].appendChild(toolbarRight)*/
      })

      function openTemplet() {
        modalState.value = true
      }

      function closeModal() {
        modalState.value = false
      }
      
      function genLink() {
        modalState.value = true
      }

      return {
        markdown,
        modalState,
        closeModal,
        openTemplet,
        genLink
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../styles/easymde.css";
  .easy-markdown {
    height: 100%;
  }
  .more {
    height: 45px;
    width: 260px;
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    .button {
      height: 32px;
      line-height: 32px;
      color: #fff;
      border-radius: 16px;
      background: linear-gradient(92deg, #ffba40 0, #ff503e 37%, #ff2f50 81%, #ff1b40 100%);
    }
    .templet {
      width: 40px;
      padding: 0 15px;
    }
    .gen-link {
      width: 145px;
      text-align: center;
      margin-left: 15px;
    }
  }
  .modal {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    opacity: 0.5;
    background-color: #000;
  }
</style>
