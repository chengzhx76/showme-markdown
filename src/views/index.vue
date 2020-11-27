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
            initialValue: '查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这其中最好的执行计划。查询优化器会将解析树转化成执行计划。一条查询可以有多种执行方法，最后都是返回相同结果。优化器的作用就是找到这dd其中最好的执行计划ddddddddddddddddd。',
            placeholder: "开始书写...",
            /*previewRender: function(plainText, preview) {
              console.log(preview)
              setTimeout(function(){
                preview.innerHTML = plainText;
              }, 2500);

              return "加载中...";
            },*/
            status: ["autosave", "lines", "words"],
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


        let toolbar = document.getElementsByClassName("editor-toolbar")
        console.log(toolbar)
        let toolbarRight = document.createElement('span')
        let link = document.createElement('a')
        let text = document.createTextNode('生成专属链接'); 
        link.appendChild(text);
        link.setAttribute('href','https://mp.csdn.net');
        toolbarRight.appendChild(link)
        toolbarRight.className = 'editor-toolbar-right'
        toolbar[0].appendChild(toolbarRight)


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
