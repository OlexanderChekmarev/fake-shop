import { Button, Card, CardActions, CardContent, TextField } from '@mui/material'
import './ProductListItem.scss'
import { Component } from "react"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductListItem extends Component<Props> {
    render() {
        return (
            <Card className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt={this.props.name} />
                    </div>
                    <h4>{this.props.name}</h4>
                    <p className="product-description">{this.props.description}</p>
                    <div className="product-features">
                        <span>Type</span>
                        {this.props.type}
                    </div>
                    <div className="product-features">
                        {' '}
                        <span>Capacity</span>: {this.props.capacity} Gb
                    </div>
                    <div className="product-price">Price: {this.props.price} $</div>
                    <div className='product-quantity'>
                        <Button variant="contained" size='small' >
                            -
                            </Button>
                        <TextField size="small" value="1" variant='outlined'/>
                        <Button variant="contained" size='small'>
                            +
                            </Button>
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}


    


export default ProductListItem
