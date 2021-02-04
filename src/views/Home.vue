<template>
  <div>
    <el-button @click="add">添加</el-button>
    <div>{{ count }}</div>
    <div>{{obj}}</div>
    <HelloWorld :msg="arr[count%2]" :path="'123'"  />
    <div>{{ plusOne }}</div>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import { ref, isRef, reactive,watch,computed } from "vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    // 声明单一基础数据类型
    let count = ref(0);
    console.log(count.value);
    console.log(isRef(count)); //true   //isRef() 用来判断是不是ref对象
    // 声明单一对象时使用
    const obj = reactive({
        name:'小明',
        age:12
    }) 
    const arr = reactive([123,456])
    console.log(isRef(obj))
    // 监听
    watch(count, () => console.info(count.value)); 
    // 计算属性
    let plusOne = computed(() => count.value +1) // 只读 count.value变化后执行加1
    // 读写
    // const plusOne = computed({
    //   get: () => count.value + 1,
    //   set: (val) => {
    //     count.value = val-1
    //   },
    // })
    console.log(plusOne)
    function add(){
        count.value++;
        // plusOne.value++; 
    }


    return {
      count,
      add,
      obj,
      arr,
      plusOne,
    };
  },
};
</script>