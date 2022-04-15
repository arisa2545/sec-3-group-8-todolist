<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AddEditList from '../components/AddEditList.vue'
import {
  categories,
  lists,
  completeToggle,
  importantToggle,
  removeList,
  addNewList,
  editList
} from '../vue.js'

let { params } = useRoute()
console.log(params.category)

const categorySeleced = params.category
const currentList = ref({})

const editMode = (list) => {
  console.log('เข้า editmode')
  currentList.value = list
}
</script>

<template>
  <div class="h-96 overflow-y-scroll m-2">
    <div>

        <h3 class="text-xl font-bold">{{ categorySeleced }}</h3>
        <div v-for="list in lists">
          <div v-if="list.category == categorySeleced">
            <div
              :class="{ 'complete-stlye': list.isComplete }"
              class="flex border-2 rounded my-2 p-2"
            >
              <input
                type="checkbox"
                :checked="list.isComplete"
                v-model="list.isComplete"
                @click="completeToggle(list)"
                class="m-2"
              />
              <div class="basis-3/4 ml-3">
                <label>
                  <p class="font-semibold">{{ list.name }}</p>
                  <div class="w-3xl max-w-3xl overflow-auto">
                    <p class="text-neutral-500">{{ list.description }}</p>
                  </div>
                </label>
              </div>

              <div class="grid grid-cols-3 items-center gap-x-2 ml-16">
                <img
                  src="../assets/important.png"
                  v-if="list.isImportant"
                  @click="importantToggle(list)"
                />
                <img
                  src="../assets/not_important.png"
                  v-if="!list.isImportant"
                  @click="importantToggle(list)"
                />
                <img src="../assets/edit.png" @click="editMode(list)" />
                <img src="../assets/delete.png" @click="removeList(list.id)" />
              </div>
            </div>
          </div>
          <!-- {{ list.isComplete }} {{ list.isImportant }} -->
        </div>
        <br />
        <hr />
        <br />
      </div>
  </div>
  <AddEditList
    :currentList="currentList"
    @add-new-list="addNewList"
    @edit-list="editList"
  ></AddEditList>
</template>

<style></style>
