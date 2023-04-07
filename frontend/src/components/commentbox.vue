
<template>
    <div class="backdrop" @click.self="closeModal" v-if="isShow">
        Hello World
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {
            closeModal(){
                this.$emit('close');
            }
        }
    }
</script>
<style>
    .question{
        font-size: 30px;
        margin-top:2rem;
        color:#2c364d;
        font-family: Gotham-Medium;
        font-weight:600;
    } 
    footer{
        width:100%;
        position:absolute;
        bottom:5px;
        font-size:10px;
        margin:0px auto;
        color:#0580d1;
    }
    .content{
        display:flex;
        justify-content: center;
    }
    .emoji{
        display:flex;
        position:relative;
        left:calc(100% - 500px);
    }
    .line1{
        height: 9px;
        width: 70px;
        background-color: #0580d1;
        position: relative;
        top: 60%;
        left: 12%;        
    }
    .smile{
        height:90px;
        width:90px;
        border-radius:50%;
        border:12px solid #0580d1;
        margin:0px 12px;
        }
    .isHovered{
        border-color:red;  
        cursor:pointer;  
    }
    .isHovered1{
        background-color:red;
    }
    .clicked{
        position:absolute;
        top:0;
    }
    .dialog-box-header img{
        width: auto !important;
        height: 60px !important;
        padding: 30px;
        margin-top: -2.2mm !important;
    }
    .dialog-box-header{
        box-sizing: border-box!important;
        margin-bottom:3rem;
        
    }
    .border-line{
        background: #0580d1 !important;
        height:2mm;
    }
    .dialog-box{
        max-width: 500px;
        height: 480px;
        margin:100px auto;
        background: #fff !important;
        position:relative;
    }
    .backdrop{
        top:0;
        left:0;
        position:fixed;
        background:#0b0b0b;
        opacity:0.8;
        width:100%;
        height:100%;
    }
</style>