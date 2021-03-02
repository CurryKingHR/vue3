# vue3.0  
安装 npm init vite-app 项目名

#### 1.templeta模版可以使用多个跟标签 
```
<template>
    <div></div>
    <div></div>
</template>
```
#### 2.使用需要引入 
```
import { watch, reactive, toRefs } from "vue")  
```
#### 3.声明单一基础数据类型时使用 
```
let count = ref(0) // 赋值内部获取时需要用.value来获取 count.value = 2;
isRef(count); //判断是否是ref对象  
```
#### 4.声明单一对象时使用
```
const obj = reactive({name:1})   
```
#### 5.watchEffect() 监听props
```
watchEffect(() => {  //首次和props改变才会执行这里面的代码
     console.log(props)
     })        
```
#### 6.watch 监听
```
 watch(count, () => console.log(count.value));   
```
#### 7.computed 计算属性 
```
只读 const addCount = computed(() => count.value + 1) count.value变化后执行加1  
读写 const plusOne = computed({
      get: () => count.value + 1,
      set: (val) => {
        count.value = val+100
      },
    })
```
#### 8.this 去掉
```
context.parent 相当于2.0里 this.$psrent
context.root 相当于2.0里 this
context.emit 相当于2.0里 this.$emit
context.refs 相当于2.0里 this.$refs
```



vuex的使用			

跨组建穿值			

是否可以使用尖头函数		


