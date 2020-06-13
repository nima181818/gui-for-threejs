import threeinits from '../../threetools/initthree.js'
export default{
    name:'rightwrapper',
    data(){
        return {

        }
    },
    mounted(){
        let renderdom = document.getElementsByClassName('rightwrapper')[0]
        threeinits.init(renderdom)
    }
}