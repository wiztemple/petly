import { useState } from 'react'

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const handleIndexClick = (event) => setActive(event.target.dataset.index);

  return (
    <div>
      <div className="shadow-sm bg-white w-full p-5 rounded-lg">
        <img src={images[active]} className="h-247px object-cover w-full" alt="Carousel Images" />
      </div>
      <div className="flex items-center space-x-3 py-4">
        {images.map((photo, index) => (
          <img
            src={photo}
            key={photo}
            data-index={index}
            className={index === active ? "active w-158px object-cover h-97px rounded-xl cursor-pointer" : "w-158px h-97px object-cover rounded-xl cursor-pointer"}
            onClick={() => handleIndexClick}
            alt="Animal Thumb"
          />
        ))}
      </div>
    </div>
  )
}

Carousel.defaultProps = {
  images: ['http://pets-images.dev-apis.com/pets/none.jpg']
}

export default Carousel;
