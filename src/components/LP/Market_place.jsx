import React from "react";
import articleImg from "./../../assets/img/article.png"
import cartoonImg from "./../../assets/img/cartoonImg.png"
import flyersImg from "./../../assets/img/flyers.png"
import graphicImg from "./../../assets/img/graphicImg1.png"
import illustrationImg from "./../../assets/img/illustrationimg.png"
import logoImg from "./../../assets/img/logoimg.png"
import social_graphicImg from "./../../assets/img/social_graphic1.png"
import video_EditingImg from "./../../assets/img/video_Editing.png"
import ecommerce from "./../../assets/img/e1.jpeg"
const products =[
    {
name:'Shopping Store',
img: ecommerce
    },
    {
      name:'Cartoon Animation',
      img: cartoonImg
          },
    {
      name:'Graphic Design',
      img: graphicImg
    },
    {
      name:'Flyers',
      img: flyersImg
          },
          {
            name:'Illustration',
            img: illustrationImg
                },
          {
            name:'Social Graphics',
            img: social_graphicImg
          },
          {
            name:'Article Writing',
            img: articleImg
                },
          {
            name:'Video Editing',
            img: video_EditingImg
          }
];


const Marketplace = () => {
  return (
    <section className="categories py-5" id="marketplace">
  <div className="container">
    <h2 className="text-center text-muted mb-4">
      Choose Different <span className="text-primary">Category</span>
    </h2>
    <div className="row">
      {products.map((category, index) => (
        <div className="col-6 col-md-3 mb-4" key={index}>
          <div className="card category-card shadow-sm">
            <div className="image-overlay">
              <img
                src={category.img}
                className="card-img-top"
                alt={category.name}
              />
              <div className="overlay-text">
                <p className="card-text">{category.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-4">
      <button className="btn btn-primary">More Categories</button>
    </div>
  </div>
</section>

  );
};

export default Marketplace;
