<template>
  <div class="row">
    <div class="w-50">
      <h1>Add Category</h1>
      <div>
        <el-tag
          :key="ct"
          v-for="ct in $store.state.category.allCategory"
          closable
          :disable-transitions="false"
          @close="deleteCT(ct.slug)">
          {{ct.title}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
    </div>
    <div class="w-50">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero eius sequi, pariatur dolorum, laborum modi a ut quas sapiente rerum asperiores ducimus ratione tempora officiis maiores optio eaque sint ab soluta error itaque ipsa ipsam vel. Optio veniam quibusdam vero unde. Adipisci mollitia, veniam tempora beatae corrupti maxime? Eos fugiat minima rerum nemo sit dolore, repellendus officiis tempora aspernatur molestias exercitationem? Culpa, debitis ducimus! Amet fuga quo eligendi voluptate corporis modi, sint odio ipsam reprehenderit? Ab, quod. Unde voluptatibus quam autem at est nam porro harum modi non eum adipisci, quo in beatae quaerat deleniti? Beatae earum eveniet architecto.</p>
    </div>
  </div>
</template>
<script>
import { Button, Input, Tag } from 'element-ui';
export default {
  name: 'controls',
   components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [Tag.name]: Tag,
  },
   data() {
      return {
        inputVisible: false,
        inputValue: ''
      };
    },
    async fetch(){
      await this.$api.category.allCategory()
    },
    fetchOnServer: true,
    methods: {
      deleteCT(slug) {
        this.$api.category.deleteCategory(slug)
        this.$nuxt.refresh()
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.$api.category.addCategory(inputValue)
          this.$nuxt.refresh()
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
};
</script>
<style lang="scss">
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
