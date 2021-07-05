<template>
  <div class="row">
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Striped table</h4>
        <el-table :data="$store.state.post.allPosts">
          <el-table-column
            min-width="150"
            sortable
            label="Author"
            property="user.fullname"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Title"
            property="title"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Slug"
            property="slug"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Created"
            property="createdAt"
          ></el-table-column>
           <el-table-column
            label="Published"
            width="100">
            <template slot-scope="scope">
              <div :class="scope.row.published ? 'success' : 'pending'"></div>
            </template>
          </el-table-column>
          <el-table-column
          label="Action"
          width="100">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-view" @click="handleSelect(scope.$index, $store.state.post.allPosts)" circle></el-button>
          </template>
        </el-table-column>
        </el-table>
      </card>
      <el-dialog
        :visible.sync="openModal"
        custom-class="dialog"
        width="80%">
        <span slot="title">{{selectedData.title}}</span>
        <span v-html="selectedData.content"></span>
        <span slot="footer" class="dialog-footer">
          <el-button v-if="selectedData.published" @click="published()">Unpublished</el-button>
          <el-button v-else type="primary" @click="published()">Published</el-button>
        </span>
      </el-dialog>
    </div>


  </div>
</template>
<script>
import { Table, TableColumn, Button, Checkbox, Dialog } from 'element-ui';
import { Modal, BaseAlert } from '@/components';
export default {
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Checkbox.name]: Checkbox,
    [Dialog.name]: Dialog,
    [Button.name]: Button,
    Modal,
    BaseAlert
  },
  methods:{
    handleSelect(a, b){
      this.openModal = true
      this.selectedData = b[a]
    },
    published(){
      this.openModal = false
      this.$api.post.setPublished(this.selectedData.id, !this.selectedData.published)
      this.$notify({
        message:
          'Post Updated Successfully',
        timeout: 3000,
        icon: 'tim-icons icon-bell-55',
      });
      this.$nuxt.refresh()
    }
  },
  async fetch(){
      await this.$api.post.getAllPosts()
    },
  data() {
    return {
      openModal:false,
      selectedData: {}
    };
  }
};
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
.dialog{
  background: #1e1e2f;
}
.success{
  width: 30px;
  height: 30px;
  background: #3ea13e;
  border-radius: 50%;
}
.pending{
  width: 30px;
  height: 30px;
  background: #f29339;
  border-radius: 50%;
}
</style>
