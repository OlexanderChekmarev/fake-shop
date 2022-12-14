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
    color: string
}

class ProductListItem extends Component<Props, State> {
    // constructor(props: Props) {
    //     super(props)
    //     this.onIncrementClick = this.onIncrementClick.bind(this)
    //     this.onDecrementClick = this.onDecrementClick.bind(this)
    // }

    state = {
        count: 1,
        color: 'green',
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }
    changeColor = () => {
        this.setState((prevState: State) => ({
            color: prevState.color === 'green' ? 'red' : 'green',
        }))
    }
    render() {
        console.log(this)
        const { image, name, description, type, capacity, price }: Props =
            this.props
        return (
            <Card className={`product ${this.state.color}`}>
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt={name} />
                    </div>
                    <h4>{name}</h4>
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
                    <div>
                        <p>
                            Color:{' '}
                            <span className={`${this.state.color}`}>
                                {this.state.color}
                            </span>
                        </p>
                        <button onClick={this.changeColor}>Change color</button>
                    </div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            size="small"
                            onClick={this.onDecrementClick}
                            disabled={this.state.count <= 1}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => this.onIncrementClick()}
                            disabled={this.state.count >= 10}
                        >
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
