<template>

    <!--
        ==================================================================

            Show this question group when...
            -add condition-

            Show this question group when...
            the question -Internal Title- of -page x-
            has answer choice -yes- or -maybe-

            Show this question group when...
                the question -Internal Title- of -page x-
                has an answer choice of -yes- or -maybe-
            -and-
                the answer to -Internal Title- of -this page-
                is -greater_than- -6- (numeric)
                -or-
                the answer to -Internal Title- of -this page-
                is -equal_to- -Joe- (string or numeric)

            -has-
            -does_not_have-
        ===================================================================
    -->

    <div id="app">
        Show this question group when
        <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>And</el-dropdown-item>
            <el-dropdown-item>Or</el-dropdown-item>
            <el-dropdown-item>Remove</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <span style="background-color:#FFFFCC">
    the question
    <el-dropdown>
      <span class="el-dropdown-link">Internal Title</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Dogs and Frogs and Polywogs</el-dropdown-item>
        <el-dropdown-item>Arsenic and Old Lace</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    of
    <el-dropdown>
      <span class="el-dropdown-link">Page 3</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Page 1</el-dropdown-item>
        <el-dropdown-item>Page 2</el-dropdown-item>
        <el-dropdown-item>Page 3</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    has answer choice
    <el-dropdown>
      <span class="el-dropdown-link">yes</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>No</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    or
    <el-dropdown>
      <span class="el-dropdown-link">maybe</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Yes</el-dropdown-item>
        <el-dropdown-item>No</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </span>
    </div>
</template>

<script>
  export default {
      name: "mad-lib"
  }
</script>

<style scoped>
    .el-dropdown-link {
        cursor: pointer;
        text-decoration: underline;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
