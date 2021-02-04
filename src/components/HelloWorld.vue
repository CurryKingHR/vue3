<template>
  <!-- <button @click="add">add</button> -->
  <p> watchEffect  监听数据 {{ msg }}</p>
</template>

<script>
import {watchEffect} from 'vue'
export default {
  name: 'HelloWorld',
  props: ['msg'],
  setup(props, context) {
     // 监听 pros
     watchEffect(() => {  //首次和props改变才会执行这里面的代码
    //  console.log(props)
        //  console.log(props.msg)
     })
    //  console.log(props);
       //context.parent 相当于2.0里 this.$psrent
       //context.root 相当于2.0里 this
       //context.emit 相当于2.0里 this.$emit
       //context.refs 相当于2.0里 this.$refs
      //  console.log(context.parent)
    //  function add(){
    //    context.emit('add',true);
    //  }
  }
}
</script>
