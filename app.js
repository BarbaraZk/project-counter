const Item =(props)=>{
    const calcliters = (props.liters/props.km*100).toFixed(2)
    const calcall= (calcliters*props.km/100*props.price).toFixed(2) 
    const calc100km = (calcall/props.km*100).toFixed(2)
    // const value= (props.liters&&props.km&&props.price)
    
    return(
        <header className="display m-2 mt-4">
            <h5 > 
              {props.liters<=0 ? "" : `Fuel consumption : ${calcliters}l/km`}
              {/* {props.liters<=0 ? "" : (props.liters/props.km*100).toFixed(2)} */}
            {/* {value<=0 ? "" : calcliters} 
            {value<=0 ? "" : " l/100km"} */}
            </h5>

            <h5>
                {props.price<=0 ? "" : `The cost of the entire trip : ${calcall} `}
            {/* {value<=0 ? "" : "Koszt calej podrozy:"}
            {value<=0 ? "" : calcall} 
            {value<=0 ? "" : "zl"} */}
            
            </h5>
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
        return <div className="container">
                <br />
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-5 md={6} ">
                        <div className="form-group">
                        <h3 className="display-6 titel">Check Your Fuel Consumption </h3>
                            <form onSubmit={this.handleSubmit}>
                                <label >The number of litres of fuel you put in:
                                <input name="liters" className="form-control w-50 m-2" value={this.state.liters} onChange={this.handleChange} type="number"/>
                                </label>
                                <br/>
                                <label>The number of km since the last fill:
                                <input name="km" className="form-control w-50 m-2" value={this.state.km} onChange={this.handleChange} type="number"/>
                                </label>
                                <br/>
                                <label>The cost per litre of fuel:
                                <input name="price" className="form-control w-50 m-2" value={this.state.price} onChange={this.handleChange} type="number"/>
                                </label>
                                <br />
                                <button onClick={this.handleSubmit} type="button" className="btn btn-success btn-sm m-2" >COUNT</button>
                                <button onClick={this.handleReset} type="button" className="btn btn-outline-success btn-sm" >RESET</button>
                 
                    {/* <Item liters={liters} km={km} price={price} /> */}
                    {this.displayMessage()}
                    
                            </form>
                        </div>
                     </div>
            
                    <div className="col"><img src="/images/1.gif" className="w-100"></img></div>
            </div>
           
            </div>
    
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
 
