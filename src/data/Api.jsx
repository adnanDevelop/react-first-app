import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';

let cards = [
    {
        id : 1,
        grid : 'col-lg-4 col-md-6',
        img : img1,
        title : 'Frontend Development Course',
        text : 'Some quick example text to build on the card titile and make up the bulk of the cards content',
     
    },
    {
        id : 2,
        grid : 'col-lg-4 col-md-6',
        img : img2,
        title : 'Backend Development Course',
        text : 'Some quick example text to build on the card titile and make up the bulk of the cards content',
        author : 'Hanan Tariq' , 
        Rating : '250',
        btn : 'btn fw-bold btn-outline-warning border border-2 border-warning',  
    },
    {
        id : 3,     
        grid : 'col-lg-4 col-md-6',
        img : img3,
        title : 'Digital Marketing Course',
        text : 'Some quick example text to build on the card titile and make up the bulk of the cards content',
    }
];

export {cards};

