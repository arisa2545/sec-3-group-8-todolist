import { ref, onBeforeMount } from 'vue'

export const categories = ref([])
export const lists = ref([])
// console.log(categories)
// GET
const getData = async () => {
  const getCategories = await fetch('http://localhost:5000/categories')
  const getLists = await fetch('http://localhost:5000/lists')
  if (getCategories.status === 200 && getLists.status === 200) {
    categories.value = await getCategories.json()
    lists.value = await getLists.json()
    // console.log(nameCategory.value)
  } else console.log('error, cannot get data')
}

await getData()


export const completeToggle = async (list) => {
    list.isComplete = !list.isComplete
    const res = await fetch(`http://localhost:5000/lists/${list.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        category: list.category,
        name: list.name,
        description: list.description,
        isImportant: list.isImportant,
        isComplete: list.isComplete
      })
    })
  
    if (res.status === 200) {
      console.log('edited successfully')
    } else console.log('error, cannot be added')
  }
  
export const importantToggle = async (list) => {
    list.isImportant = !list.isImportant
    console.log(list.isImportant != list.isImportant)
    console.log('เข้า toggle')
    console.log(list)
    const res = await fetch(`http://localhost:5000/lists/${list.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        category: list.category,
        name: list.name,
        description: list.description,
        isImportant: list.isImportant,
        isComplete: list.isComplete
      })
    })
  
    if (res.status === 200) {
      console.log('edited successfully')
    } else console.log('error, cannot be added')
  }
  
  // DELETE
export const removeList = async (listId) => {
    console.log(listId)
    const res = await fetch(`http://localhost:5000/lists/${listId}`, {
      method: 'DELETE'
    })
    if (res.status === 200) {
      lists.value = lists.value.filter((list) => list.id !== listId)
      console.log('deleted successfully')
    } else console.log('error, cannot delete data')
  }
  
  