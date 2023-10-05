import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export function Slider() {
  return (
    <Carousel className="bg-primary m-5">
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          src="plates.jpg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          alt=""
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src="camera.jpg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          alt=""
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          src="lens.jpg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
          alt=""
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
