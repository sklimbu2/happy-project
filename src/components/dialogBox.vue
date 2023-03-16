
<template>
    <div class="backdrop" @click.self="closeModal" v-if="isShow">
        <div class="dialog-box" v-if="showDialogbox" >
            <div class="border-line"></div>
            <div style="padding:0 1em 1em">
                <div class="dialog-box-header">
                    <img src="../assets/header-logo.png">
                </div>
            </div>
            <div class="content">
                <div class="face-emoji" @click="closeDialogbox('sad')">
                    <font-awesome-icon icon="fa-regular fa-face-frown" />
                    <div class="box-eyes"></div>
                </div>
                <div class="face-emoji" @click="closeDialogbox('unsatisfied')">
                    <font-awesome-icon icon="fa-regular fa-face-meh"  />
                    <div class="box-eyes"></div>
                </div>
                <div class="face-emoji" @click="closeDialogbox('happy')">
                    <font-awesome-icon icon="fa-regular fa-face-smile"  />
                    <div class="box-eyes"></div>
                </div>  
            </div>
            <div class="question">
                <label>How was your experience?</label>
            </div>
            <footer>
                <label>A <strong style="color:#0053a5">DIGITAL DUBAI</strong> INITIATIVE</label>
            </footer>
        </div>
        <div class="commentBox" v-if="showSadCommentbox">
            <div class="border-line"></div>
            <header>
                <div class="face-title">
                    <font-awesome-icon icon="fa-regular fa-face-frown" />
                    <div class="face-title-eyes"></div>
                </div>
                <div class="topic">
                    <label>What made you unhappy?</label>
                </div>
            </header>
            <form @submit.prevent="submitComment">
                <div class="form-comment">
                <textarea placeholder="Tell us more" class="comment-detail"></textarea>
                <textarea placeholder="Your mobile number" class="mobile-number"></textarea>
                </div>
                <button class="submit-btn">Submit
                    <font-awesome-icon icon="fa-solid fa-circle-check" class="check-icon"/>
                </button>
            </form>
            <footer>
                <label>A <strong style="color:#0053a5">DIGITAL DUBAI</strong> INITIATIVE</label>
            </footer>
        </div>
        <div class="commentBox" v-if="showUnsatisfiedCommentbox">
            <div class="border-line"></div>
            <header>
                <div class="face-title">
                    <font-awesome-icon icon="fa-regular fa-face-meh"  />
                    <div class="face-title-eyes"></div>
                </div>
                <div class="topic">
                    <label>What can we improve?</label>
                </div>
            </header>
            <form @submit.prevent="submitComment">
                <div class="form-comment">
                <textarea placeholder="Tell me something" class="comment-detail"></textarea>
                <textarea placeholder="Your mobile number" class="mobile-number"></textarea>
                </div>
                <button class="submit-btn">Submit
                    <font-awesome-icon icon="fa-solid fa-circle-check" class="check-icon"/>
                </button>
            </form>
            <footer>
                <label>A <strong style="color:#0053a5">DIGITAL DUBAI</strong> INITIATIVE</label>
            </footer>
        </div>
        <div class="commentBox" v-if="showHappyCommentbox">
            <div class="border-line"></div>
            <header>
                <div class="face-title">
                    <font-awesome-icon icon="fa-regular fa-face-smile"  />
                    <div class="face-title-eyes"></div>
                </div>
                <div class="topic">
                    <label>What made you Happy?</label>
                </div>
            </header>
            <form @submit.prevent="submitComment">
                <div class="form-comment">
                <textarea placeholder="Tell us more" class="comment-detail"></textarea>
                <textarea placeholder="Your mobile number" class="mobile-number"></textarea>
                </div>
                <button class="submit-btn">Submit
                    <font-awesome-icon icon="fa-solid fa-circle-check" class="check-icon"/>
                </button>
            </form>
            <footer>
                <label>A <strong style="color:#0053a5">DIGITAL DUBAI</strong> INITIATIVE</label>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isHover : false,
                isShow : true,
                showDialogbox : true,
                showUnsatisfiedCommentbox : false,
                showSadCommentbox : false,
                showHappyCommentbox : false
            }
        },
        methods: {
            changeState(){
                this.isHover = !this.isHover
            },
            closeModal(){
                this.$emit('close');
            },
            closeDialogbox(status){
                this.showDialogbox = !this.showDialogbox
                if(status == 'unsatisfied'){
                    this.showUnsatisfiedCommentbox = !this.showUnsatisfiedCommentbox
                }
                else if(status == 'sad'){
                    this.showSadCommentbox = !this.showSadCommentbox
                }
                else{
                    this.showHappyCommentbox = !this.showHappyCommentbox
                }
            },
            submitComment(){
                console.log("from submitted")
            }
        }
    }
</script>
<style>
    .box-eyes{
        background: #fff;
        height: 20px;
        width: 70px;
        position: absolute;
        top: 32%;
        left: 20%;
    }
    .face-title{
        position:relative;
        font-size:4rem;
        color:#0580d1;
    }
    .face-title-eyes{
        background: #fff;
        height: 15px;
        width: 40px;
        position: absolute;
        top: 32%;
        left: 20%;
    }
    .face-emoji{
        position:relative;
        font-size:8rem;
        color:#0580d1;
    }
    .face-emoji:hover{
        cursor:pointer;
        color: #0060a1;
    }
    .check-icon{
        margin-left:2px;
    }
    .submit-btn{
        cursor:pointer;
        width:90px;
        box-shadow:none;
        border:none;
        padding:10px;
        border-radius: 15px;
        outline:none;
        background-color:#15112E;
        color: #fff;
        float: right;
        margin: 40px 10px 0px 0px;
    }  
    .form-comment{
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        margin:0px 10px; 
    }
    .comment-detail{
        width:100%;
        height:150px;
        border:1px solid #2c364d;
        border-radius:10px;
        outline:none;
        padding:10px;
        font-size: 1.5rem;
        resize: none;
    }
    .mobile-number{
        margin-top:20px;
        width:100%;
        height:40px;
        border:1px solid #2c364d;
        border-radius:10px;
        outline:none;
        padding:20px;
        font-size: 1.2rem;
        resize: none;
    }
    .topic{
        font-size:2rem;
        margin-left:10px;
    }
    .smile-header{
        height:55px;
        width:55px;
        border-radius:50%;
        border:5px solid #0580d1;
        margin:12px 12px;
    }
    .line-header{
        height: 5px;
        width: 40px;
        background-color: #0580d1;
        position: relative;
        top: 60%;
        left: 12%;
    }
    header{
        display:flex;
        align-items: center;
        margin:10px;
    }
    .commentBox{
        max-width: 500px;
        height: 480px;
        margin:100px auto;
        background: #fff !important;
        position:relative;
    }
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
    }
    .content{
        display:flex;
        justify-content: space-evenly;
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
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,0.8);
    }

</style>