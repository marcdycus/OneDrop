import React, { Component } from "react";
import axios from "axios";
import Card from "../Card";

class Table extends Component {
    interval = null;

    state = {
        products: []
    }

    // refresh list every 60 seconds
    componentDidMount() {
        this.interval = setInterval(this.getData, 60000);
        this.getData();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //grab data from URL
    getData = () => {
        axios.get('https://onedrop.today/products.json')
            .then(res => {
                this.setState(
                    { products: res.data.products })
            })
    }

    render() {

        //sort by price, greatest to least
        const myData = [].concat(this.state.products)
        .sort((a,b) => b.variants[0].price - a.variants[0].price)

        return (
            <div>
                <ul style={{ listStyleType:"none"}}>
                    {myData.map(item => {
                        //if the price is equal to 0.00, ignore
                        if (item.variants[0].price === "0.00") {
                            return null;
                        } else return (
                            <Card
                                key={item.id}
                                title={item.title}
                                price={item.variants[0].price}
                            ></Card>)
                    })}
                </ul>
            </div>
        )

    }
}

export default Table;