import { Component } from "react";
import "./Product5.css";

export class Product extends Component {
  render() {
    let products = [
      {
        id: 1,
        name: "plates",
        price: 300,
        description: "fancy mud plates",
        img: "plates.jpg",
      },
      {
        id: 2,
        name: "podcast set",
        price: 1700,
        description: "A set of high quality mic and headset",
        img: "podcast-set.jpg",
      },
      {
        id: 3,
        name: "Camera lens",
        price: 800,
        description: "Premium camera lens",
        img: "lens.jpg",
      },
      {
        id: 4,
        name: "Camera",
        price: 3800,
        description: "Premiuim camera for you daily life shots",
        img: "camera.jpg",
      },
      {
        id: 5,
        name: "Blush.. i guess..",
        price: 320,
        description: "Skin care",
        img: "blush.jpg",
      },
    ];

    return (
      <div className="cont">
        {products.map((product) => {
          return (
            <div className="card" key={product.name}>
              <img
                src={product.img}
                className="card-img-top object-fit-cover w-100"
                style={{
                  height: "200px",
                  objectFit: "contain",
                }}
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#!" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
