import { moneyFormat } from "../helpers";
const SingleItem = ( { price, type, id, eliminarItem, editItem } ) => {

    const HandleEdit = (e) => {
        e.preventDefault();
        editItem(id);
    }
    const HandleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Delete ${type} Subscription`);
        if(answer) {
        eliminarItem(id);
        }     
    };
    // const urlImage = `/src/assets/${type}.png`;
    const urlImage = `/assets/${type}.png`;

    return (
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Price: {moneyFormat(Number(price))} </h3>
            <a href="" onClick={HandleDelete} >Delete</a>
            <a href="" onClick={HandleEdit} >Edit</a>
        </div>
    );

}

export default SingleItem;