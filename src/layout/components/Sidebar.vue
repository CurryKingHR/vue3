<template>
  <div class="sidebar">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="3"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handSelect"
          :uniqueOpened="true"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409eff"
      >
          <el-submenu index="/">
            <template #title>
              <i class="el-icon-location"></i>
              <span>world</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home">首页</el-menu-item>
              <el-menu-item index="/test">文本</el-menu-item>
              <el-menu-item index="/about">关于</el-menu-item>
            </el-menu-item-group>
            <!-- <el-submenu index="/home">
              <template #title>选项4</template>
              <el-menu-item index="/home">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>
                导航二
            </template>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <template #title>
                导航三
            </template>
          </el-menu-item>
          <el-submenu index="4" disabled>
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
          </el-submenu> -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    methods:{
        handleOpen(row){
            console.log(row);
        },
        handleClose(row){
            console.log(row);
        },
        handSelect(row){
            console.log(row);
            this.$router.push(row)
        }
    }
};
</script>
<style scoped>
.tac {
    height: 100vh;
}
.el-menu-vertical-demo{
    height: 100vh;
}
</style>