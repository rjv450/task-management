<template>
  <div class="editor-wrapper">
    <div class="abstractedit" contenteditable="true" v-html="formattedContent" ></div>
    <Mentionable placement="bottom" :keys="['@']" :items="items" offset="6" insert-space>
      <textarea v-model="content" style="opacity:1"></textarea>
    </Mentionable>
  </div>

</template>
  
<script>
  import { Mentionable } from "vue-mention";
  
  const users = [
    {value: "Bob", label: "Bob" },
    {value: "Alice", label: "Alice"},
    {value: "Paul", label: "Paul"},
    {value: "Vue", label: "Vue"}
  ];
  export default {
    components: {
      Mentionable
    },
    data() {
      return {
        content: " ",
        items: users
      };
    },
    computed: {
      formattedContent() {
        // Loop through the list of users and replace their usernames with a span element
        let formattedContent = this.content;
        this.items.forEach((user) => {
          const regex = new RegExp(`@${user.value}`, "g");
          formattedContent = formattedContent.replace(
            regex,
            `<span class="highlight">@${user.value}</span>&nbsp; `
          );
        });
        // Return the formatted content as HTML
        return formattedContent + '<span class="cursor-animate">|</span>';
      },
  },
    methods: {
      handleInput(event) {
        // Update the content data property
        this.content = event.target.innerHTML;
      },
    }
  };
  </script>
  
  <style >
  .input {
    width: 100%;
  }
  .mention-item {
    padding: 4px 10px;
    border-radius: 4px;
  }
  .mention-selected {
    background: #4fa5d6;
  }
  .highlight {
    padding: 0 2px; border-radius: 3px; 
    color: #4fa5d6;
  }
  .editor-wrapper{
    position: relative; 
  }
  .editor-wrapper .abstractedit {
    border: 2px solid black; padding: 10px; margin: 10px; border-radius: 3px;
  }
  .editor-wrapper .mentionable {
    position: absolute !important ; top: 0; left:0; right: 0; bottom: 0; width: 100%; opacity: 0;  
  }
  .editor-wrapper .mentionable textarea {
    border: 2px solid red; padding: 0; margin: 0 10px; border-radius: 3px; 
    width: 100%; height: 100%;
  }
  .editor-wrapper .mentionable textarea::selection {
    background-color: rgba(0, 0, 0, 1);
  }
  .editor-wrapper .abstractedit .cursor-animate {
    width: 0.3px; 
    color: black; 
    font-size: 1.5em;
    animation: blink-animation 1s  infinite;
    -webkit-animation: blink-animation 1s ease infinite;
  }
  @keyframes blink-animation {
    0% {opacity: 0;}

    32% {opacity: 0;}
    33% {opacity: 1;}
    66% {opacity: 1;}
    67% {opacity: 0;}
    100% {opacity: 0;}
  }
  </style>
  