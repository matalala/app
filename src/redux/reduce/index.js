import { 
    PROBANDO,
   

} from "../actions";
   
const stadoInicial={
   prueba:''
}


const rootReduce=(state=stadoInicial,action)=>{

    switch (action.type) {
        case PROBANDO:
            return{
                ...state,
                prueba:action.payload
            }
        
        default:
          return{
            ...state
          }
    }
    
}
export default rootReduce;