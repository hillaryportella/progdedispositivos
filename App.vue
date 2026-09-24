<script setup>
import { ref } from 'vue'

let id = 0

const listas = ref([
  {
    idLista: 1,
    newTodo: '',
    hideCompleted: false,
    todos: [
      { id: id++, text: 'Aprender HTML', done: true },
      { id: id++, text: 'Aprender JavaScript', done: true },
      { id: id++, text: 'Aprender Vue', done: false }
    ]
  }
])

function clonarLista() {
  const listaOriginal = listas.value[0]
  const copiaDasTarefas = JSON.parse(JSON.stringify(listaOriginal.todos))
  
  listas.value.push({
    idLista: Date.now(),
    newTodo: '',
    hideCompleted: false,
    todos: copiaDasTarefas
  })
}

function addTodo(lista) {
  if (lista.newTodo === '') return
  lista.todos.push({ id: id++, text: lista.newTodo, done: false })
  lista.newTodo = ''
}

function removeTodo(lista, todo) {
  lista.todos = lista.todos.filter((t) => t !== todo)
}

function filteredTodos(lista) {
  if (lista.hideCompleted) {
    return lista.todos.filter((t) => !t.done)
  }
  return lista.todos
}
</script>

<template>
  <div class="site">
    
    <h1>Minhas Listas de Tarefas</h1>
    
    <button class="botao-clonar" @click="clonarLista">
      Copiar lista
    </button>

    <hr />

    <div v-for="(lista, index) in listas" :key="lista.idLista" class="bloco-lista">
      
      <h2>Lista número {{ index + 1 }}</h2>

      <form @submit.prevent="addTodo(lista)">
        <input v-model="lista.newTodo" required placeholder="Escreva aqui..." class="campo-texto">
        <button class="botao-add">Adicionar</button>
      </form>

      <ul>
        <li v-for="todo in filteredTodos(lista)" :key="todo.id" class="linha-tarefa">
          <input type="checkbox" v-model="todo.done">
          <span :class="{ riscado: todo.done }">{{ todo.text }}</span>
          <button class="botao-remover" @click="removeTodo(lista, todo)">remover</button>
        </li>
      </ul>

      <button class="botao-ocultar" @click="lista.hideCompleted = !lista.hideCompleted">
        {{ lista.hideCompleted ? 'Mostrar todas' : 'Ocultar terminadas' }}
      </button>

    </div>

  </div>
</template>

<style scoped>
.site {
  font-family: sans-serif; 
  max-width: 500px;       
  margin: 0 auto;         
  padding: 20px;
}

h2 {
  color: #333;
  margin-top: 0;
}

.campo-texto {
  padding: 5px;
  font-size: 14px;
}

.botao-add {
  background-color: #008CBA;
  color: white;
}

.botao-clonar {
  color: rgb(0, 0, 0);
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.linha-tarefa {
  margin: 10px 0;
}

.riscado {
  text-decoration: line-through;
  color: gray;
}

.botao-remover {
  background-color: red;
  color: white;
  border: none;
  padding: 2px 6px;
  font-size: 11px;
  margin-left: 10px;
  cursor: pointer;
}

.botao-ocultar {
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>