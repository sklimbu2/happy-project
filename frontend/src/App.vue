<template>
  <Happy @click.left="toggleModal" />
  <Data :commentsAll ="comments" />
  <DialogBox v-if="showModal" @close="toggleModal" />
  
</template>
<script>
import Happy from './components/index.vue'
import DialogBox from './components/dialogBox.vue'
import Data from './components/data.vue'
import { addComments } from '@babel/types'

export default {
  name: 'App',
  data(){
    return{
      showModal: false,
      comments :''
      /*comments:[
        {id : 1,stats: 'happy',phone: '55001390',comment: 'This is project-happy'}
      ] */
    }
  },
  mounted(){
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(data => this.comments = data)
    .catch(err => console.log(err.message))
    
  },
  components:{
    DialogBox,
    Happy,
    Data,
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app{
  font-family: Gotham-Medium, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c364d !important;
  margin-top: 60px;
}
</style>
