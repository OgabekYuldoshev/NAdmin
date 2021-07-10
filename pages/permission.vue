<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
         <el-table
          :data="$store.state.user.allUsers.filter(data => !search || data.fullname.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column label="Avatar" prop="avatar" width="85">
            <template slot-scope="scope">
              <el-avatar :size="50" :src="baseUrl + scope.row.avatar"></el-avatar>
            </template>
          </el-table-column>
          <el-table-column
            label="Fullname"
            width="200">
            <template slot-scope="scope">
              <p :class="$auth.user.id === scope.row.id ? 'text-success text-decoration-underline' : null">{{scope.row.fullname}}</p>
            </template>
          </el-table-column>
          <el-table-column
            width="200"
            label="Email"
            prop="email">
          </el-table-column>
          <el-table-column
          label="Role">
            <template slot-scope="scope">
              <el-select  :disabled="$auth.user.id === scope.row.id" @change="handleRole($event, scope.row)" :value="scope.row.role" placeholder="Select Role">
              <el-option
                v-for="role in roles"
                :key="role.value"
                :label="role.label"
                :value="role.value">
              </el-option>
            </el-select>
            </template>
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
            </template>
            <template slot-scope="scope">
              <el-button
                :disabled="$auth.user.id === scope.row.id"
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import {Table, Button,TableColumn,Avatar,Select,Option} from "element-ui"
import {baseUrl} from "../constants"
export default {
  name: 'permission',
  components:{
    [Table.name]:Table,
    [Button.name]:Button,
    [TableColumn.name]:TableColumn,
    [Avatar.name]:Avatar,
    [Select.name]:Select,
    [Option.name]:Option
  },
      data() {
      return {
        baseUrl:baseUrl,
        search: '',
        selectedRole:'',
        roles:[
          {
            label:"USER",
            value:"USER"
          },
          {
            label:"MODERATOR",
            value:"MODERATOR"
          }
        ]
      }
    },
    async fetch(){
      await this.$api.user.getUsers()
    },
    created(){
      if(this.$auth.user.role !== 'ADMIN'){
        this.$router.push('/')
      }
    },
    methods: {
      handleRole(val, row) {
        this.$api.user.setRole(row.id, val)
        this.$nuxt.refresh()
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
};
</script>
<style></style>
