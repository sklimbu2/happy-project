import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'


import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faFaceMeh,faFaceSmile,faFaceFrown } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCircleCheck)
library.add(faFaceMeh,faFaceSmile,faFaceFrown)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
