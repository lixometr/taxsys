import Vue from "vue"
import ImageViewer from "v-viewer"
import 'viewerjs/dist/viewer.css'
Vue.use(ImageViewer, {
    defaultOptions: {
        toolbar: false,
        navbar: false,
        title: false
    }
})