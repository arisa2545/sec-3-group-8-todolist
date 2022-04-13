<script setup>
import { ref } from 'vue'
import { categories, lists, completeToggle, importantToggle, removeList } from '../vue.js'

defineEmits(['addNewList'])

const category = ref("");
const name = ref("");
const description = ref("");
const isImportant = ref(false);

let showInputNewList = ref(false);
 
const inputNewListToggle = () => {
  showInputNewList.value = !showInputNewList.value;
  name.value = "";
  description.value = "";
  category.value = "";
  isImportant.value = false;
};

</script>
 
<template>
    <div class="w-9/12 p-5 bg">
        <button
          @click="inputNewListToggle"
          class="w-20 h-10 my-3 bg-amber-300 rounded-xl hover:bg-amber-400"
        >
          Add list
        </button>
 
        <div v-show="showInputNewList">
          <input
            class="m-1 border-2 w-72 rounded-xl"
            placeholder=" List title"
            v-model="name"
          />
          <span class="text-red-600">*</span>
          <br />
          <textarea
            class="m-1 border-2 w-96 rounded-xl"
            placeholder=" description"
            rows="5"
            cols="50"
            v-model="description"
          ></textarea>
          <br />
          <select v-model="category" class="ml-2">
            <option value disabled>Please select catagory</option>
            <option
              v-for="category in categories"
              :value="category.name"
              v-bind:selected="1 == 1"
            >
              {{ category.name }}
            </option>
          </select>
 
          <label class="pl-3">
            <input type="checkbox" v-model="isImportant" checked />
            <span class="p-1">important</span>
          </label>
          <br />
 
          <button
            @click="$emit('addNewList', { category: category, name: name, description: description, isImportant: isImportant })"
            class="w-32 h-8 m-2 rounded-md bg-neutral-800 text-zinc-300 hover:bg-zinc-700"
          >
            Add new list
          </button>
        </div>
      </div>
</template>
 
<style>

</style>