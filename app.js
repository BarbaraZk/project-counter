const Item =(props)=>{
    const calcliters = (props.liters/props.km*100).toFixed(2)
    const calcall= (calcliters*props.km/100*props.price).toFixed(2) 
    const calc100km = (calcall/props.km*100).toFixed(2)
    // const value= (props.liters&&props.km&&props.price)
    
    return(
        <header>
            <div> 
              {props.liters<=0 ? "" : `Fuel consumption :  ${calcliters} l/km`}
              {/* {props.liters<=0 ? "" : (props.liters/props.km*100).toFixed(2)} */}
            {/* {value<=0 ? "" : calcliters} 
            {value<=0 ? "" : " l/100km"} */}
            </div>

            <div>
                {props.price<=0 ? "" : `The cost of the entire trip : ${calcall} `}
            {/* {value<=0 ? "" : "Koszt calej podrozy:"}
            {value<=0 ? "" : calcall} 
            {value<=0 ? "" : "zl"} */}
            
            </div>
            <div>
            {/* {value<=0 ? "" : "Koszt 100 km:"}
            {value<=0 ? "" : calc100km} 
            {value<=0 ? "" : "zl"} */}
            
            </div>
        </header>
    )

}




class App extends React.Component {
    state = { 
        liters:"",
        km:"",
        price:"",
        isSubmited:false,
     }

     handleChange=(e)=>{
         this.setState({
            [e.target.name]: e.target.value, 
         })
     }

     handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({
          isSubmited:true,
        })
      }
     
     displayMessage=()=>{
         if(this.state.isSubmited){
             return <Item
             liters={this.state.liters} km={this.state.km} price={this.state.price} isSubmited={this.state.isSubmited}
             ></Item>
         }
     }

     handleReset=(e)=>{
         e.preventDefault()
        this.setState({
           liters:"",
           km:"",
           price:"",
           isSubmited:false,
        })
    }
    
    render() { 
        const {liters, km, price, isSubmited} = this.state;
        return <div class="App">
            <h1>Calculate Your Fuel Consumption </h1>
            <br />
                <form onSubmit={this.handleSubmit} class="formular">
                    <label>The number of litres of fuel you put in:
                        <input name="liters" value={this.state.liters} onChange={this.handleChange} type="number"/>
                    </label>
                    <br/>
                    <label>The number of km since the last fill:
                        <input name="km" value={this.state.km} onChange={this.handleChange} type="number"/>
                    </label>
                    <br/>
                    <label>The cost per litre of fuel:
                        <input name="price" value={this.state.price} onChange={this.handleChange} type="number"/>
                    </label>
                    <br/>
                    <button onClick={this.handleReset}>RESET</button>
                    <br/>
                    <button>COUNT</button>
                    {/* <Item liters={liters} km={km} price={price} /> */}
                    {this.displayMessage()}
                    
                </form>
               
                
              
            
            </div>
            
            

         
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
 
