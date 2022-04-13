<script setup>
import { ref, computed } from 'vue'
import { categories, lists, completeToggle, importantToggle, removeList } from '../vue.js'

defineEmits(['addNewList', 'editList'])
const props = defineProps({
  currentList: {
    type: Object,
    default: {}
  }
})
console.log(props.currentList)

let newList = computed(() => {
    return {
        id: props.currentList.id,
        category: props.currentList.category,
        name: props.currentList.name,
        description: props.currentList.description,
        isImportant: props.currentList.isImportant,
        isComplete: props.currentList.isComplete
    }
})


let showInputNewList = ref(false);
 
const inputNewListToggle = () => {
  showInputNewList.value = !showInputNewList.value
  newList.value.name = "";
  newList.value.description = "";
  newList.value.category = "";
  newList.value.isImportant = false;
}

</script>
 
<template>
    <div class="w-9/12 p-5 bg">
        <button
          @click="inputNewListToggle"
          class="w-20 h-10 my-3 bg-amber-300 rounded-xl hover:bg-amber-400"
        >
          Add list
        </button>
 
        <div v-show="showInputNewList || newList.category">
          <input
            class="m-1 border-2 w-72 rounded-xl"
            placeholder=" List title"
            v-model="newList.name"
          />
          <span class="text-red-600">*</span>
          <br />
          <textarea
            class="m-1 border-2 w-96 rounded-xl"
            placeholder=" description"
            rows="5"
            cols="50"
            v-model="newList.description"
          ></textarea>
          <br />
          <select v-model="newList.category" class="ml-2">
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
            <input type="checkbox" v-model="newList.isImportant" checked />
            <span class="p-1">important</span>
          </label>
          <br />
 
          <button v-if="newList.category"
            @click="$emit('editList', newList);inputNewListToggle();"
            class="w-32 h-8 m-2 rounded-md bg-neutral-800 text-zinc-300 hover:bg-zinc-700"
          >
            Edit List
            
          </button>

          <button v-else
            @click="$emit('addNewList', newList);inputNewListToggle();"
            class="w-32 h-8 m-2 rounded-md bg-neutral-800 text-zinc-300 hover:bg-zinc-700"
          >
            Add New List
            
          </button>
          <button class="w-24 h-8 m-2 rounded-md bg-red-600 text-zinc-300 hover:bg-red-700"
          @click="inputNewListToggle">
              Cancel
          </button>
        </div>
      </div>
</template>
 
<style>

</style>