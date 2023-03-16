<template>
    <div v-for="comment in comments" :key="comments.id">
    <h2>{{ comment.status }}</h2>
    <h2>{{ comment.phone }}</h2>
  </div>
</template>

<script>
    export default{
        props:['comments']
    }
</script>