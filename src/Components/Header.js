import React,{useState} from 'react'
import '../Style/Header.css'
import logo from '../images/logo.svg'
import cartImage from '../images/icon-cart.svg'
import profilePicture from '../images/image-avatar.png'
import Product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import thumbnail from '../images/image-product-1-thumbnail.jpg'
import junkIcon from '../images/icon-delete.svg'
import {useSelector} from 'react-redux';
import {DELETE} from '../Actions/index'
import {CHECKOUT} from '../Actions/index'
import {useDispatch} from 'react-redux'
import menuIcon from '../images/icon-menu.svg'
import closeIcon from '../images/icon-close.svg'
export default function Header(props) {
    const carArr = useSelector(state => state.CartReducer)
    console.log(carArr);
    const [visable, setVisable] = useState("hide");
    const dispatch = useDispatch();
    const [cartVisable, setCartVisable] = useState("hide");
    const [noItemVisable,setNoItemVisable] = useState("show");
    const [menuVisable, setMenuVisable] = useState("hide");
    const checkIfCartIsEmpty = () =>{
        if(carArr.length != 0){
            setNoItemVisable("hide");
            setCartVisable("show");
        }else{
            setNoItemVisable("show");
            setCartVisable("hide");
        }
    }
    return (
        <div  className="HeaderContainer">
            <img onClick={() => setMenuVisable("show")} className='menuIcon' src={menuIcon}/>
            <div id={menuVisable} className='menu'>
                <a onClick={() => setMenuVisable("hide")}><img src={closeIcon} /></a>
                <div><a href="#">Collection</a></div>
                <div><a href="#">Men</a></div>
                <div><a href="#">Women</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Contact</a></div>
            </div>
            <img className="Logo" src={logo} alt="logo"/>
            <nav>
                <a href="#">Collection</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="cartSection">
            <div  className="cart" >
                <div className='cartButton'>
                <img onClick={() => {
                if(visable == "show") setVisable("hide");
                else setVisable("show");
                checkIfCartIsEmpty()
            }} src={cartImage}/> 
            <span className='itemsCounter'>{carArr.length}</span>
            </div>
                <div id={visable}  className="dropdown-content">
                    <h4>Cart</h4>
                    <div id={noItemVisable} className='noItem'>
                        <h3>no items </h3>
                    </div>
                    <div id={cartVisable} className='cartContainer'>
                       {carArr.map((item, index)=> 
                       
                       <div className='itemContainer' key={index}>
                        <img src={thumbnail} alt="imgS"/>
                        <div className='itemDescriptionContainer'>
                            <span className='itemDescription'>
                                {item.description}
                            </span>
                            <span className='itemPrice'>${(item.price)}.00 x {item.quantity} 
                            <b>${item.cost}.00</b>
                            </span>
                        </div>
                        <div className='deleteBtn' onClick={() =>{dispatch(DELETE(index));checkIfCartIsEmpty()}}>
                            <img src={junkIcon} />
                        </div>
                        </div>)}
                   </div>
                   <a id={cartVisable} className="checkoutBtn" onClick={() => {dispatch(CHECKOUT());
                    setVisable("hide")}}>Checkout</a>
                </div>
                </div>
                <div className="profile"><img src={profilePicture}/></div>
            </div>
        </div>
    )
}
