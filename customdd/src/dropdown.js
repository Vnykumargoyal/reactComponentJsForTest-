
import React,{Component} from 'react';
import './App.css';
import CustomSelect from './customSelect';

const styles={
  app:{
    backgroundColor:'rgba(0,0,0,0.1)',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    height:'100vh',
    fontFamily:'Arial',
    color:'rgba(0,0,100,1)',
    gridTemplateColumns:'1fr',
    fontSize:25
  },
  select:{
    width:'100%',
    maxWidth:600
  }
}

const options=[
    {label:'React',value:'react'},
    {label:'ReactNative',value:'react-native'},
    {label:'JavaScript',value:'js'},
    {label:'CSS',value:'css'},
]



class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'',
            selectedLanguages:{
                dataVal:[]
            }
        }
    }

    onChangeInput(data){
        debugger
        const {selectedLanguages} = this.state;
        options.forEach((value,i)=>{
          data.forEach((value1,i)=>{
            debugger
            if(value.label === value1.label){
              console.log(value.label,value1.label, data)
              this.setState({
                selectedLanguages:{...selectedLanguages,dataVal:[...this.state.selectedLanguages.dataVal,value1.label]}
              });

              console.log(value.label,value1.label, data, this.state.data,selectedLanguages)
            }
          })
        })
        // options.findIndex(x => x.prop2 ==="yutu");
        // console.log(options.indexOf());
      }

    render(){
        return (
            <div style={styles.app}>
              <CustomSelect isMulti={true} style={styles.select} onChange={(data)=>this.onChangeInput(data)} options={options} label="Choose a libary" />
            </div>
          );
    }  
}

export default Dropdown;