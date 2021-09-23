import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "../component/Carousel";
import Navbar from "../component/Navbar";
import getAnimalIcon from "../util/getAnimalIcon";
// import Modal from "./Modal";

const PetDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [pet, setPet] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPet()
  })
  async function getPet() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    console.log(json)
    setLoading(false)
    setPet(json.pets[0])
  }

  // adopt = () => (window.location = 'http://bit.ly/pet-adopt');
  //   const { animal, breed, description, state, name, city, images, showModal } = this.state
  const { name, description, breed, animal, images, city, state } = pet;
  return (
    <div className="h-full w-full bg-black bg-opacity-50 z-50 relative overflow-y-auto">
      <Navbar />
      <div className="flex justify-end">
        <Link to="/">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.419604 0.419604C0.552277 0.286595 0.709888 0.181067 0.883407 0.109064C1.05693 0.0370616 1.24295 0 1.43081 0C1.61868 0 1.8047 0.0370616 1.97822 0.109064C2.15174 0.181067 2.30935 0.286595 2.44202 0.419604L10.0004 7.98082L17.5587 0.419604C17.6915 0.286811 17.8492 0.181473 18.0227 0.109605C18.1962 0.0377376 18.3821 0.00074779 18.5699 0.00074779C18.7577 0.00074779 18.9437 0.0377376 19.1172 0.109605C19.2907 0.181473 19.4484 0.286811 19.5811 0.419604C19.7139 0.552398 19.8193 0.710047 19.8911 0.88355C19.963 1.05705 20 1.24301 20 1.43081C20 1.61861 19.963 1.80457 19.8911 1.97808C19.8193 2.15158 19.7139 2.30923 19.5811 2.44202L12.0199 10.0004L19.5811 17.5587C19.7139 17.6915 19.8193 17.8492 19.8911 18.0227C19.963 18.1962 20 18.3821 20 18.5699C20 18.7577 19.963 18.9437 19.8911 19.1172C19.8193 19.2907 19.7139 19.4484 19.5811 19.5811C19.4484 19.7139 19.2907 19.8193 19.1172 19.8911C18.9437 19.963 18.7577 20 18.5699 20C18.3821 20 18.1962 19.963 18.0227 19.8911C17.8492 19.8193 17.6915 19.7139 17.5587 19.5811L10.0004 12.0199L2.44202 19.5811C2.30923 19.7139 2.15158 19.8193 1.97808 19.8911C1.80457 19.963 1.61861 20 1.43081 20C1.24301 20 1.05705 19.963 0.88355 19.8911C0.710047 19.8193 0.552398 19.7139 0.419604 19.5811C0.286811 19.4484 0.181473 19.2907 0.109605 19.1172C0.0377376 18.9437 0.00074779 18.7577 0.00074779 18.5699C0.00074779 18.3821 0.0377376 18.1962 0.109605 18.0227C0.181473 17.8492 0.286811 17.6915 0.419604 17.5587L7.98082 10.0004L0.419604 2.44202C0.286595 2.30935 0.181067 2.15174 0.109064 1.97822C0.0370616 1.8047 0 1.61868 0 1.43081C0 1.24295 0.0370616 1.05693 0.109064 0.883407C0.181067 0.709888 0.286595 0.552277 0.419604 0.419604Z" fill="white" />
          </svg>
        </Link>
      </div>
      <div className="flex bg-white h-screen w-screen rounded-tl-3xl rounded-tr-3xl relative top-36">
        <div className="md:w-1/6" />
        <div className="md:w-4/6">
          <div className="flex justify-between md:py-10">
            <div className="flex space-x-4 items-center">
              <span className="flex justify-center items-center w-20 h-20 bg-petnamegray rounded-full">
                <span className="block text-gray3 text-5xl font-semibold">{name?.charAt(0)}</span>
              </span>
              <span className="block">
                <h1 className="text-gray6 text-5xl font-semibold">{name}</h1>
                <span className="text-gray2 font-medium">{breed} {animal}</span>
              </span>
            </div>
            <img src={getAnimalIcon(animal)} alt={animal} />
          </div>
          <div className="bg-gray1 px-8 py-8 relative">
            {/* <code>
              {JSON.stringify(pet)}
            </code> */}
            {loading}
            <h1 className="text-3xl text-gray3 font-medium pb-8">{name} Pictures</h1>
            <Carousel images={images} />
            <div className="bg-white shadow-sm rounded p-5 mt-8">
              <h1 className="text-2xl text-gray3 font-medium">Description</h1>
              <p className="text-sm text-gray3 leading-relaxed pt-2">{description}</p>
              <p>{city}, {state}</p>
              <button type="button" className="py-3 px-10 bg-appblue text-white rounded-full mt-2">
                Adopt {name}
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/6" />

        {/* <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button type="button" onClick={this.toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        {
          showModal ?
            (
              <Modal>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button type="button" onClick={this.adopt}>Yes</button>
                  <button type="button" onClick={this.toggleModal}>Yes</button>
                </div>
              </Modal>
            ) : null
        } */}

      </div>
    </div>
  )
}
export default PetDetails;
