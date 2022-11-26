import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import './ProductListItem.scss'
import { Component } from 'react'

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

type State = {
    count: number
}

class ProductListItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.onIncrementClick = this.onIncrementClick.bind(this)
    }

state = {
    count: 1,
}

onIncrementClick () {
    console.log(this)
    this.setState((prevState) => ({
        count: prevState.count + 1,
    }))
}
    render() {
        console.log(this)
        const { image, name, description, type, capacity, price }: Props =
            this.props
        return (
            <Card className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt={name} />
                    </div>
                    <h4>{this.props.name}</h4>
                    <p className="product-description">{description}</p>
                    <div className="product-features">
                        <span>Type</span>
                        {type}
                    </div>
                    <div className="product-features">
                        {' '}
                        <span>Capacity</span>: {capacity} Gb
                    </div>
                    <div className="product-price">Price: {price} $</div>
                    <div className="product-quantity">
                        <Button variant="contained" size="small">
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                        />
                        <Button variant="contained" size="small" onClick={this.onIncrementClick}>
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
