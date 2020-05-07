// import React, {useState, useContext} from 'react';

// const AddMovie = () => {
//        const [name, setName] = useState('');

//        const [price, setPrice] = useState('');


//        const updateName = e => {
//          setName(e.target.value);
//        };

//        const updatePrice = e => {
//          setPrice(e.target.value);
//        };

//        const addMovie = e => {
//          e.preventDefault();
//          setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
//        };

//        return <form onSubmit={addMovie}>
//            <input type="text" name="name" value={name} onChange={updateName} />
//            <input type="text" name="price" value={price} onChange={updatePrice} />
//            <button type="submit">Submit</button>
//          </form>;

// }

// export default AddMovie;