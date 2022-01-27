import '../Style/Body.css'
import Product1 from '../images/image-product-1.jpg'
import Product2 from '../images/image-product-2.jpg'
import Product3 from '../images/image-product-3.jpg'
import Product4 from '../images/image-product-4.jpg'
import Header from '../Components/Header';
import Product1Thumbnail from '../images/image-product-1-thumbnail.jpg'
import Product2Thumbnail from '../images/image-product-2-thumbnail.jpg'
import Product3Thumbnail from '../images/image-product-3-thumbnail.jpg'
import Product4Thumbnail from '../images/image-product-4-thumbnail.jpg'
import React, { useState } from 'react';
import cartImage from '../images/icon-cart.svg';
import backIcon from '../images/icon-previous.svg';
import nextIcon from '../images/icon-next.svg';
import {ADD} from '../Actions/index'
import {useDispatch} from 'react-redux'
import closeIcon from '../images/icon-close.svg'
export default function Body() {
    const [product1Click,setProduct1Click] = useState('clicked');
    const [product2Click,setProduct2Click] = useState('notclicked');
    const [product3Click,setProduct3Click] = useState('notclicked');
    const [product4Click,setProduct4Click] = useState('notclicked');
    const [quantity,setQuantity] = useState(0);
    const [pictureNumber,setPictureNumber] = useState(0); 
    const [pictureNumber2,setPictureNumber2] = useState(0); 
    const [imageViewerVisable,setImageViewerVisable] = useState("hide");
    const arr = [];
    const dispatch = useDispatch();
    const pictures = [Product1,Product2,Product3,Product4]
    
    return (
        <div>
        <Header />
        <div  className="BodyContainer"> 
            <div id={imageViewerVisable} className='showSim'>
            
            <div className="imageViewer" >
            <img onClick={()=>setImageViewerVisable("hide")} className='closeBtn' src={closeIcon} style={{cursor:'pointer'}}/>
                <img className="productImage" loading='lazy' src={pictures[pictureNumber2]}/>
                <div onClick={()=> {
                    if(pictureNumber2 != 0){
                    setPictureNumber2(pictureNumber2 - 1)
                    }else{
                        setPictureNumber2(3)
                    }
                    }} id={imageViewerVisable} className='backBtn'>
                <img src={backIcon} />
                </div>
                <div onClick={()=> {
                    if(pictureNumber2 != 3){
                    setPictureNumber2(pictureNumber2 + 1)
                    }else{
                        setPictureNumber2(0)
                    }
                    }} id={imageViewerVisable} className='nextBtn'>
                <img  src={nextIcon}/>
                </div> 
                <div className="imagePicker">
                   <a > <img className={product1Click} src={Product1Thumbnail} onClick={() => {
                        setPictureNumber2('0')
                        setProduct1Click('clicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product2Click} src={Product2Thumbnail} onClick={() => {
                        setPictureNumber2('1');
                        setProduct1Click('notclicked');
                        setProduct2Click('clicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product3Click} src={Product3Thumbnail} onClick={() => {
                        setPictureNumber2('2');
                        setProduct1Click('notclicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('clicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product4Click} src={Product4Thumbnail} onClick={() => {
                        setPictureNumber2('3');
                        setProduct1Click('notclicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('clicked');

                }}/> </a>
                </div>
            </div>
            </div>
            <div className="imageViewer">
                <img onClick={()=>setImageViewerVisable("show")} className="productImage" loading='lazy' src={pictures[pictureNumber]}/>
                <div onClick={()=> {
                    if(pictureNumber != 0){
                    setPictureNumber(pictureNumber - 1)
                    }else{
                        setPictureNumber(3)
                    }
                    }} className='backBtn'>
                <img src={backIcon} />
                </div>
                <div onClick={()=> {
                    if(pictureNumber != 3){
                    setPictureNumber(pictureNumber + 1)
                    }else{
                        setPictureNumber(0)
                    }
                    }}  className='nextBtn'>
                <img  src={nextIcon}/>
                </div> 
                <div className="imagePicker">
                   <a > <img className={product1Click} src={Product1Thumbnail} onClick={() => {
                        setPictureNumber('0')
                        setProduct1Click('clicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product2Click} src={Product2Thumbnail} onClick={() => {
                        setPictureNumber('1');
                        setProduct1Click('notclicked');
                        setProduct2Click('clicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product3Click} src={Product3Thumbnail} onClick={() => {
                        setPictureNumber('2');
                        setProduct1Click('notclicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('clicked');
                        setProduct4Click('notclicked');

                }}/> </a>
                   <a > <img className={product4Click} src={Product4Thumbnail} onClick={() => {
                        setPictureNumber('3');
                        setProduct1Click('notclicked');
                        setProduct2Click('notclicked');
                        setProduct3Click('notclicked');
                        setProduct4Click('clicked');

                }}/> </a>
                </div>
            </div>
            <div className="description">
                <h4>Sneaker Company</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="price">
                    <h3>$125.00</h3> 
                    <h4 className="discount">%50</h4>
                </div>
                <div className="AddToCart">
                    <div className="quantity">
                        <a onClick={() => {setQuantity(quantity+1)}} >+</a>
                        <span>{quantity}</span>
                        <a onClick={() => {
                            if(quantity != 0){
                            setQuantity(quantity-1)
                            }
                            }
                            } >-</a>
                    </div>
                    <a onClick={()=>{
                        if(quantity != 0){
                            dispatch(ADD(quantity))
                    }
                    }} className="AddToCartBtn" >Add To Cart</a>
                </div>
            </div>
        </div>
        </div>
    )
}
