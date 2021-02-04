<template>
  <el-container>
    <el-aside width="210px">
        <Sidebar />
    </el-aside>
    <el-container >
      <el-header style="background-color:#ccc;">
          <Navbar />
      </el-header>
      <el-main>
          <Appmain />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Appmain from './components/Appmain.vue'
export default {
  name: "layout",
  components:{
      Navbar,
      Sidebar,
      Appmain
  }
};
</script>