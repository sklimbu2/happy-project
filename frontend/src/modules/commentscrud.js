import { ref } from 'vue'
const getComments = () => {
    const state = ref({
        comments: {},
        comment : '',
        phone : ''
    })
    const GetAllComments = async () =>{
        try{
            await fetch("http://locahost:3000/comments")
            .then(res => res.json())
            .then(data => {
                state.value.comments = data
            })
        }
        catch(error){
            console.log(error)
        }
    }
    return {
        state,
        GetAllComments
    }
}
export default getComments