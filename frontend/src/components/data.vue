<template>
    <h2>All Comments</h2>
    <div v-for="commentDetail in commentsAll" :key="commentDetail._id" class="messagebox">
    <h2>Comments : {{ commentDetail.comment }}</h2>
    <h2>Phone : {{ commentDetail.phone }}</h2>
  </div>
</template>

<script>
//import commentscrud from '../modules/commentscrud'
//import { onMounted } from 'vue'
    export default{
        props : ['commentsAll'],
        setup(){
          //  const { GetAllComments,state } = commentscrud
           // onMounted(()=>{
            //    GetAllComments()
            //})
            //return{ state,GetAllComments }
        }
    }
</script>

<style>
    .messagebox{
        text-align:left;
        width:500px;
        padding:20px;
        border:1px solid black;
        border-radius:20px;
        margin-left:50px;
        box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .5);
    }
</style>