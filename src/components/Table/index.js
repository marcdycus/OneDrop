import React, { Component } from "react";
import axios from "axios";

class Table extends Component {
    interval = null;

    state = {
        products: []
    }

    componentDidMount() {
        this.interval = setInterval(this.getData, 60000);
        this.getData();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getData = () => {
        axios.get('https://onedrop.today/products.json')
          .then(res => {
            this.setState({
              products: res.data,
                // title: res.data.products[0].title,
                // price: res.data.products[0].variants[0].price
            })
          })
    }

    render() {
        console.log(this.state.products)

        return (
        <div>hello</div>
        
        )
        
      }
}

export default Table;