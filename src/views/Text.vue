<template>
  <div>
    <div>基础数据类型 {{ count }}</div>
    <div>{{arr}}</div>

    <el-button @click="add">添加</el-button>
    <HelloWorld :msg="count" />
    <div>计算属性 {{ plusOne }}</div>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import { ref, isRef, reactive,watch,computed } from "vue";
export default {
  name: "Text",
  components: {
    HelloWorld,
  },
  setup() {
    // 声明单一基础数据类型
    let count = ref(1);
    // console.log(count.value) //0 ，  内部获取时需要用.value来获取
    // 声明复杂数据类型
    let arr = reactive([1,2,3]);
    // 判断是不是ref对象
    console.log(isRef(count))
    console.log(isRef(arr))
    // 
    function add(){
      count.value++;
      arr[0] = 11;
      plusOne.value = 1;
    }
    // 监听
    // watch(count, () => console.info(count.value)); 
    // 计算属性
    // let plusOne = computed(() => count.value +1) // 只读 count.value变化后执行加1
    // 读写
    const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val+10
      },
    })

    return {
      count,
      arr,
      add,
      plusOne
    };
  },
};
</script>