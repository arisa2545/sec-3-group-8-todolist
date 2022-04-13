<script setup>
import { computed, ref } from 'vue'
defineEmits(['changeCategory', 'addCategory', 'deleteCategory'])
const props = defineProps({
  categories: {
    type: Array,
    require: true
  },
  lists: {
    type: Array,
    require: true
  }
})

const categories = computed(() => props.categories)
const lists = computed(() => props.lists)
const newCategory = ref('')
let showInputCategory = ref(false)

const numAllList = computed(() => {
  let total = 0
  for (let list of lists.value) {
    if (!list.isComplete) {
      total++
    }
  }
  return total
})

const numImportantList = computed(() => {
  let total = 0
  for (let list of lists.value) {
    if (list.isImportant && !list.isComplete) {
      total++
    }
  }
  return total
})

const countList = (nameCatagory) => {
  const filterList = lists.value.filter((list) => {
    return list.category === nameCatagory && !list.isComplete
  })
  return filterList.length
}

const inputCategoryToggle = () => {
  showInputCategory.value = !showInputCategory.value
  newCategory.value = ''
  console.log(showInputCategory)
}
</script>

<template>
  <div class="p-3 ml-9 w-72" id="myList">
    <p>My Category</p>
    <div class="h-3/4 overflow-y-auto">
      <router-link :to="{ name: 'All' }">
        <button
          class="categoryButton text-left pl-3 pt-1 mb-3 first-letter:hover:bg-amber-400 grid grid-cols-2"
          @click="$emit('changeCategory', '')"
        >
          <div>All Categories</div>
          <div class="justify-self-end pr-5">{{ numAllList }}</div>
        </button>
      </router-link>

      <router-link :to="{ name: 'Important' }">
        <button
          class="categoryButton text-left pl-3 pt-1 mb-3 hover:bg-amber-400 grid grid-cols-2"
          @click="$emit('changeCategory', 'important')"
        >
          <div>Important</div>
          <div class="justify-self-end pr-5">{{ numImportantList }}</div>
        </button>
      </router-link>
      <div v-for="category in categories" class="grid grid-cols-2">
        <router-link  :to="{ name: 'EachCategory', params: {category: category.name} } " >
          <button
            class="categoryButton text-left pl-3 pt-1 mb-3 hover:bg-amber-400 grid grid-cols-2"
            @click="$emit('changeCategory', category.name)"
          >
            <div>{{ category.name }}</div>
            <div class="justify-self-end pr-5">
              {{ countList(category.name) }}
            </div>
          </button>
        </router-link>
        <img
          src="./../assets/minus.png"
          class="h-5 justify-self-end mt-3 mr-2 cursor-pointer"
          @click="$emit('deleteCategory', category.id)"
          v-if="category.nameCategory != 'Inbox'"
        />
      </div>
    </div>
    <br />

    <!-- add catagory button -->
    <button
      class="w-40 m-2 h-9 rounded-2xl bg-stone-800 text-zinc-50 hover:bg-zinc-700"
      @click="inputCategoryToggle"
    >
      Add Category
    </button>
    <div v-show="showInputCategory" class="m-2">
      <input
        type="text"
        v-model="newCategory"
        class="w-40 m-1 border-2 rounded-xl"
        placeholder=" New catagory"
        required
      />
      <span class="text-red-600">*</span>
      <button
        @click="
          $emit('addCategory', newCategory)
          inputCategoryToggle();
        "
        class="w-20 h-8 m-2 rounded-md bg-neutral-800 text-zinc-300 hover:bg-zinc-700"
      >
        submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.categoryButton {
  background-color: #fcd34d;
  border-radius: 0.7em;
  height: 2.2em;
  width: 14em;
  margin: 0.3em;
}
</style>
