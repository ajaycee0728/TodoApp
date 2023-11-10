<template>
  <div id="todo-form">
  <v-container class="cotainer-card w-50">
    <v-row class="header-card bg-info-subtle">
      <v-col
      cols="1"
      sm="8"
      class="py-2"
      > 
        <v-container class="d-flex">
          <div class="px-2">
            <v-chip> 
              Tasks 
              <v-badge
                class="header-badge pl-5"
                :content="store.state.tasksCount"
              ></v-badge>
            </v-chip> 
          </div>
          <div class="px-2">
            <v-chip> 
              Task Done
              <v-badge
                class="header-badge pl-5"
                :content="store.state.tasksDoneCount"
              ></v-badge>
            </v-chip> 
          </div>
        </v-container>
      </v-col>  
      <v-col
      cols="1"
      sm="4"
      class=" d-flex justify-center align-items-center"
      > 
        <v-btn class="bg-danger-subtle" variant="tonal" @click="deleteAllTask">
          Delete Tasks
        </v-btn>
      </v-col>
    </v-row>  
    <v-row> 
      <v-col
        cols="1"
        sm="12"
        class="py-2 h-100 tasks-container" 
      > 
        <v-banner v-for="task in tasks" class="task-banner" :stacked="false">
          <v-checkbox 
            color="success" 
            :label="task.name" 
            :class="{'done': task.isDone}" 
            v-model="task.isDone" 
            @click="updateStatus(task.isDone, task.id)">
          </v-checkbox>  
              <v-btn class="delete bg-danger-subtle" variant="tonal"  @click="deleteTask(task.id)">
                DELETE
              </v-btn> 
        </v-banner>
      </v-col> 
      <v-col
        cols="1"
        sm="12"
        class="py-2"
      > 
        <div class="textbox-container d-flex">
          <v-text-field label="" variant="outlined" v-model="store.state.taskName" placeholder="Task Name" />
          <v-btn variant="tonal" size="x-large" @click="addTask">Add</v-btn>
        </div>  
      </v-col>
    </v-row> 
  </v-container>
  </div>
</template>

<script setup>  
  import store from '../../storage'  
  
  let tasks =store?.state?.tasks 
 
  function addTask() {
    store.commit('addTask', store.state.taskName)
  }

  function deleteTask(taskId) {
    store.commit('deleteTask', taskId)
  } 

  function updateStatus(status, taskId) {
    store.commit('updateStatus', !status, taskId) 
  }
  function deleteAllTask() {
    store.commit('deleteAllTask') 
  }
  
</script>
