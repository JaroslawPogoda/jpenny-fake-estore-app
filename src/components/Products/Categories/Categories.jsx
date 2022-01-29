import React,{useContext}from 'react';

import {CatContext} from '../../Layout'

import Select from 'react-select'
export default function Categories(props) {
    const value = useContext(CatContext);
    const optionCat=[]
    value.categories.map(option =>{ return optionCat.push( {value: option, label: option})} )
    const handleChange = (event) =>{
        
        props.setCategories([event.map(value=>value.value)])
    }
    return(
        <div className="Categories">
            <Select onChange={handleChange} defaultValue={"man's clothing"} options={optionCat}  isMulti={true}/>
            {/* {value.map((category,index) => <Category category={category} key ={index} setActiveCategory={setActiveCategory} />)} */}
        </div>
    )
}