  
import React,{Component} from 'react'
import Select from 'react-select'





function CustomSelect({style,label,options,onChange,defaultValue,isMulti}){
    return <div style={style}>
        <h1>{label}</h1>
        <Select styles={style.Select} isMulti={isMulti} options={options} onChange={onChange} />
    </div>
}

// defaultValue={defaultValue}
// class CustomSelect extends Component{
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }
//     customStyles = {
//         menu: (provided, state) => ({
//           ...provided,
//           width: state.selectProps.width,
//           borderBottom: '1px dotted pink',
//           color: state.selectProps.menuColor,
//           padding: 10,
//           backgroundColor:'rgba(100,100,50,0.8)'
//         }),
      
//         control: (_, { selectProps: { width }}) => ({
//           width: width
//         }),
      
//         singleValue: (provided, state) => {
//           const opacity = state.isDisabled ? 0.5 : 1;
//           const transition = 'opacity 300ms';
      
//           return { ...provided, opacity, transition };
//         }
//       }

//     render(){

//         const {style,label,options,onChange,defaultValue,isMulti} = this.props
//         console.log(style,label,options,onChange,defaultValue,isMulti)
//         return(
//             <div style={style}>
//                 <h1>{label}</h1>
//                 <Select styles={style.Select} isMulti={isMulti} options={options} onChange={onChange} defaultValue={defaultValue}/>
//             </div>
//         );
//     }
// }

export default CustomSelect;