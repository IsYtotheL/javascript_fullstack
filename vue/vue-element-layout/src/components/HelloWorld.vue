<template>
<!-- <button>1234567</button> -->
  <!-- <el-row>
    <el-col :span="12">
      12
    </el-col>
    <el-col :span="6">
      6
    </el-col>
    <el-col :span="6">
      6
    </el-col>
  </el-row> -->
  <MyRow tag="section">
    <MyCol :span="12">12</MyCol>
  </MyRow>
</template>
<script>
import MyRow from './My-Row';
import MyCol from './My-Col'
export default {
  components: {
    MyRow,
    MyCol
  }
}
</script>