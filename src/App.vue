<script setup>
import { ref, onBeforeMount } from 'vue'
import { categories , lists } from './vue.js'
import CategoryList from './components/CategoryList.vue';

console.clear();

// Add new catefory
const addNewCategory = async (newCategory) => {
  console.log(newCategory)
  const res = await fetch('http://localhost:5000/categories', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({name: newCategory})
  })
  if (res.status === 201) {
    const addedCategory = await res.json()
    categories.value.push(addedCategory)
    console.log('added sucessfully')
    console.log(categories.value)
  } else console.log('error, cannot be added')
}

// Delete category
const deleteCategory = async (categoryId) => {
  console.log(categoryId)
  const res = await fetch(`http://localhost:5000/categories/${categoryId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    categories.value = categories.value.filter((category) => category.id !== categoryId)
    console.log('deleted successfully')
  } else console.log('error, cannot delete data')
}

const currentList = ref({});

</script>

<template>
  <div>
    <div id="header" class=" text-2xl">
      <p class="m-6 font-bold text-center">ToDoList</p>
      <hr>
    </div>

    <div class="flex flex-row">
      <CategoryList :categories="categories" :lists="lists" @addCategory="addNewCategory" @deleteCategory="deleteCategory"></CategoryList>
      <div class="w-9/12 p-3 bg-white border-red-500 rounded-3xl" id="showList">
        <router-view :key="$route.fullPath"> </router-view>
      </div>
    </div>


  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@500&display=swap');
#app {
  font-family: 'Sarabun', sans-serif;
  background-color: whitesmoke;
  padding-top: 20px;
}

.complete-stlye {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
