import { useState, useEffect } from "react";
import useBreedList from '../hooks/useBreedList';
import Navbar from '../component/Navbar'
import SearchResults from '../component/SearchResults'
import Footer from '../component/Footer';

// images
import Dog from '../assets/dog.svg';
import Cat from '../assets/cat.svg';
import Bird from '../assets/bird.svg';
import Rabbit from '../assets/rabbit.svg';
import Reptile from '../assets/reptile.svg';
import Pet from "../component/Pet";
import PetsLoader from "../component/PetsLoader";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const LOCATIONS = [
  "Seattle, WA",
  "San Francisco, CA",
  "Minneapolis, MN",
  "Denver, CO",
  "Carol Stream, IL",
  "Bridgeport, CT",
  "Charlotte, NC",
  "Springfield, IL",
  "Tucson, AZ"
]
const Home = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [setActive, setActiveState] = useState('Dog');

  const [filteredPets, setFilteredPets] = useState([]);
  const [loadingFilteredPets, setLoadingFilteredPets] = useState(true);

  const toggleTab = (event) => {
    const { value } = event.currentTarget.dataset;

    setActiveState(() => value);
    filterPets((value.toLowerCase()))
  };
  // http://pets-v2.dev-apis.com/pets?page=1
  useEffect(() => {
    requestPets(),
      filterPets('dog')
  }, [])

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json()
    setPets(json.pets)
  }
  async function filterPets(animalType) {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animalType}`)
    const json = await res.json()
    console.log(json);
    setLoadingFilteredPets(false)
    setFilteredPets(json.pets)
  }
  return (
    <>
      <Navbar />
      <div className="md:h-770px md:flex md:px-16 px-5 md:pt-40 bg-appblue bg-opacity-5">
        <div className="md:w-1/2 relative">
          <div className="md:pt-16">
            <span className="text-appblue text-sm font-medium">FIND SPECIAL PETS</span>
            <h1 className="text-5xl font-semibold text-gray6 pt-2 leading-tight dark:text-white">
              Think you Love Pets?
              <br />
              <span className="text-appred">Adopt One.</span>
            </h1>
            <p className="text-gray6 pt-2 dark:text-gray-300">
              Pet Adoption is quickly becoming the preferred way to find a new dog,
              puppy, cat or kitten.
            </p>
          </div>
          <div className="absolute bottom-5">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                requestPets()
              }}
              className="bg-white dark:bg-kiwi shadow-sm md:w-780px rounded px-6 py-4"
            >
              <div className="md:flex items-center justify-between rounded-full bg-gray1 dark:bg-gray-800 pl-8">
                <div className="flex space-x-10">
                  <div className="relative flex items-center">
                    <svg className="absolute -left-2" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0C9.31385 0 12 2.39526 12 5.35023C12 7.61105 10.2185 10.0749 6.70154 12.7681C6.50598 12.9179 6.25665 13.0002 5.99885 13C5.74104 12.9998 5.49188 12.9171 5.29662 12.767L5.064 12.587C1.70277 9.96406 0 7.56057 0 5.35023C0 2.39526 2.68615 0 6 0ZM6 0.823113C4.65352 0.823113 3.36218 1.30008 2.41007 2.14908C1.45797 2.99808 0.923077 4.14957 0.923077 5.35023C0.923077 7.27193 2.49108 9.4861 5.67015 11.9664L5.89969 12.1437C5.9276 12.1651 5.96319 12.1768 6 12.1768C6.03681 12.1768 6.0724 12.1651 6.10031 12.1437C9.43323 9.59091 11.0769 7.31748 11.0769 5.35023C11.0769 4.75572 10.9456 4.16704 10.6905 3.61778C10.4353 3.06853 10.0614 2.56946 9.58993 2.14908C9.11849 1.72869 8.55882 1.39523 7.94285 1.16772C7.32689 0.940211 6.66671 0.823113 6 0.823113ZM6 3.29245C6.61204 3.29245 7.19901 3.50925 7.63179 3.89516C8.06456 4.28107 8.30769 4.80448 8.30769 5.35023C8.30769 5.89599 8.06456 6.4194 7.63179 6.80531C7.19901 7.19122 6.61204 7.40802 6 7.40802C5.38796 7.40802 4.80099 7.19122 4.36822 6.80531C3.93544 6.4194 3.69231 5.89599 3.69231 5.35023C3.69231 4.80448 3.93544 4.28107 4.36822 3.89516C4.80099 3.50925 5.38796 3.29245 6 3.29245ZM6 4.11557C5.63278 4.11557 5.2806 4.24565 5.02093 4.47719C4.76126 4.70874 4.61538 5.02278 4.61538 5.35023C4.61538 5.67769 4.76126 5.99173 5.02093 6.22328C5.2806 6.45482 5.63278 6.5849 6 6.5849C6.36722 6.5849 6.71941 6.45482 6.97907 6.22328C7.23874 5.99173 7.38462 5.67769 7.38462 5.35023C7.38462 5.02278 7.23874 4.70874 6.97907 4.47719C6.71941 4.24565 6.36722 4.11557 6 4.11557Z" fill="#8588A3" />
                    </svg>
                    <select
                      className="px-2 w-36 bg-gray1 dark:bg-gray-800 text-sm text-gray2"
                      id="location"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      onBlur={e => setLocation(e.target.value)}
                    >
                      <option />
                      {LOCATIONS.map(location => (
                        <option value={location} key={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex items-center">
                    <svg className="absolute -left-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.96822 16H12.2482C13.1952 16 13.9632 15.232 13.9632 14.284V6.674C15.5732 6.61 16.5362 4.824 15.6762 3.436L15.1742 2.626C14.9842 2.31907 14.7189 2.06575 14.4036 1.89005C14.0882 1.71435 13.7332 1.62208 13.3722 1.622H11.9372V0.986C11.9372 0.856517 11.9117 0.728301 11.8622 0.608674C11.8126 0.489047 11.74 0.380351 11.6484 0.288793C11.5569 0.197234 11.4482 0.124606 11.3285 0.0750549C11.2089 0.0255037 11.0807 0 10.9512 0C10.6301 0.000131295 10.3122 0.0635031 10.0156 0.186497C9.71904 0.309491 9.44958 0.489699 9.22263 0.716831C8.99569 0.943963 8.8157 1.21357 8.69295 1.51026C8.5702 1.80695 8.50709 2.12492 8.50722 2.446V5.902C7.22922 6.028 6.26422 6.632 5.55522 7.484C4.77322 8.424 4.31222 9.649 4.03822 10.826C3.76222 12.008 3.66522 13.184 3.63522 14.058C3.62322 14.432 3.62322 14.754 3.62722 15H2.96822C2.58403 15 2.2082 14.8878 1.88696 14.6771C1.56572 14.4663 1.31307 14.1663 1.16007 13.8139C1.00708 13.4615 0.960419 13.072 1.02582 12.6935C1.09123 12.3149 1.26585 11.9637 1.52822 11.683L2.44822 10.696C3.08228 10.0159 3.42767 9.11631 3.41163 8.18663C3.39558 7.25696 3.01937 6.3698 2.36222 5.712L1.45922 4.809C1.41309 4.76124 1.35792 4.72315 1.29692 4.69695C1.23592 4.67074 1.17031 4.65695 1.10392 4.65637C1.03753 4.6558 0.971689 4.66845 0.91024 4.69359C0.848792 4.71873 0.792966 4.75586 0.74602 4.8028C0.699073 4.84975 0.661947 4.90557 0.636806 4.96702C0.611666 5.02847 0.599015 5.09431 0.599592 5.1607C0.600169 5.22709 0.613962 5.2927 0.640167 5.3537C0.666371 5.4147 0.704462 5.46988 0.752217 5.516L1.65522 6.419C2.12963 6.89326 2.40127 7.53326 2.41284 8.20397C2.42441 8.87468 2.17499 9.52366 1.71722 10.014L0.797217 11.001C0.402935 11.4244 0.140773 11.9537 0.0428722 12.5239C-0.0550289 13.0942 0.0155855 13.6806 0.246058 14.2113C0.476531 14.742 0.856846 15.1939 1.34038 15.5116C1.82391 15.8293 2.38964 15.9991 2.96822 16ZM10.9382 1V2.122C10.9382 2.25461 10.9909 2.38179 11.0847 2.47555C11.1784 2.56932 11.3056 2.622 11.4382 2.622H13.3722C13.7602 2.622 14.1202 2.822 14.3242 3.152L14.8272 3.963C14.9325 4.13288 14.9905 4.3278 14.9952 4.5276C14.9999 4.7274 14.9511 4.92483 14.854 5.09947C14.7568 5.27412 14.6148 5.41965 14.4425 5.521C14.2703 5.62236 14.0741 5.67587 13.8742 5.676H13.4642C13.3316 5.676 13.2044 5.72868 13.1107 5.82245C13.0169 5.91621 12.9642 6.04339 12.9642 6.176V14.284C12.9642 14.679 12.6442 15 12.2482 15H11.5322V14.284C11.5325 13.5066 11.224 12.7608 10.6745 12.2108C10.1251 11.6608 9.37966 11.3515 8.60222 11.351H7.58822C7.45561 11.351 7.32843 11.4037 7.23466 11.4974C7.1409 11.5912 7.08822 11.7184 7.08822 11.851C7.08822 11.9836 7.1409 12.1108 7.23466 12.2046C7.32843 12.2983 7.45561 12.351 7.58822 12.351H8.60122C9.66822 12.351 10.5332 13.216 10.5332 14.284V15H4.62722C4.62222 14.766 4.62222 14.456 4.63422 14.091C4.66222 13.255 4.75422 12.151 5.01122 11.053C5.26822 9.949 5.68122 8.894 6.32322 8.123C6.95022 7.372 7.80122 6.878 9.00722 6.878C9.13983 6.878 9.267 6.82532 9.36077 6.73155C9.45454 6.63778 9.50722 6.51061 9.50722 6.378V2.446C9.50722 1.652 10.1462 1.007 10.9372 1H10.9382Z" fill="#8588A3" />
                    </svg>
                    <select
                      className="px-5 w-36 bg-gray1 dark:bg-gray-800 text-sm text-gray2"
                      id="animal"
                      value={animal}
                      onChange={e => setAnimal(e.target.value)}
                      onBlur={e => setAnimal(e.target.value)}
                    >
                      <option />
                      {ANIMALS.map(animal => (
                        <option value={animal} key={animal}>
                          {animal}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex items-center">
                    <svg className="absolute -left-2" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 10.0705V8C12.5 7.73478 12.3946 7.48043 12.2071 7.29289C12.0196 7.10536 11.7652 7 11.5 7H7.5V5H8.5C8.76514 4.99974 9.01934 4.89429 9.20682 4.70681C9.3943 4.51934 9.49974 4.26514 9.5 4V1C9.49974 0.734865 9.3943 0.480665 9.20682 0.293186C9.01934 0.105707 8.76514 0.000264738 8.5 0H5.5C5.23487 0.000264738 4.98067 0.105707 4.79319 0.293186C4.60571 0.480665 4.50027 0.734865 4.5 1V4C4.50027 4.26514 4.60571 4.51934 4.79319 4.70681C4.98067 4.89429 5.23487 4.99974 5.5 5H6.5V7H2.5C2.23479 7 1.98043 7.10536 1.7929 7.29289C1.60536 7.48043 1.5 7.73478 1.5 8V10.071C1.02868 10.1927 0.61791 10.4821 0.344704 10.885C0.0714978 11.2879 -0.0453918 11.7766 0.0159455 12.2595C0.0772827 12.7424 0.312636 13.1864 0.677889 13.5082C1.04314 13.83 1.51322 14.0075 2 14.0075C2.48679 14.0075 2.95687 13.83 3.32212 13.5082C3.68737 13.1864 3.92273 12.7424 3.98406 12.2595C4.0454 11.7766 3.92851 11.2879 3.65531 10.885C3.3821 10.4821 2.97133 10.1927 2.5 10.071V8H6.5V10.071C6.02868 10.1927 5.61791 10.4821 5.3447 10.885C5.0715 11.2879 4.95461 11.7766 5.01595 12.2595C5.07728 12.7424 5.31264 13.1864 5.67789 13.5082C6.04314 13.83 6.51322 14.0075 7 14.0075C7.48679 14.0075 7.95687 13.83 8.32212 13.5082C8.68737 13.1864 8.92273 12.7424 8.98406 12.2595C9.0454 11.7766 8.92851 11.2879 8.65531 10.885C8.3821 10.4821 7.97133 10.1927 7.5 10.071V8H11.5V10.0705C11.0287 10.1922 10.6179 10.4816 10.3447 10.8845C10.0715 11.2874 9.95461 11.7761 10.0159 12.259C10.0773 12.7419 10.3126 13.1859 10.6779 13.5077C11.0431 13.8295 11.5132 14.007 12 14.007C12.4868 14.007 12.9569 13.8295 13.3221 13.5077C13.6874 13.1859 13.9227 12.7419 13.9841 12.259C14.0454 11.7761 13.9285 11.2874 13.6553 10.8845C13.3821 10.4816 12.9713 10.1922 12.5 10.0705ZM5.5 1H8.5L8.5005 4H5.5V1ZM3 12C3 12.1978 2.94136 12.3911 2.83147 12.5556C2.72159 12.72 2.56541 12.8482 2.38269 12.9239C2.19996 12.9996 1.9989 13.0194 1.80491 12.9808C1.61093 12.9422 1.43275 12.847 1.2929 12.7071C1.15305 12.5673 1.0578 12.3891 1.01922 12.1951C0.980634 12.0011 1.00044 11.8 1.07613 11.6173C1.15181 11.4346 1.27999 11.2784 1.44443 11.1685C1.60888 11.0586 1.80222 11 2 11C2.26514 11.0003 2.51934 11.1057 2.70682 11.2932C2.8943 11.4807 2.99974 11.7349 3 12ZM8 12C8 12.1978 7.94136 12.3911 7.83147 12.5556C7.72159 12.72 7.56541 12.8482 7.38269 12.9239C7.19996 12.9996 6.9989 13.0194 6.80491 12.9808C6.61093 12.9422 6.43275 12.847 6.2929 12.7071C6.15305 12.5673 6.0578 12.3891 6.01922 12.1951C5.98063 12.0011 6.00044 11.8 6.07613 11.6173C6.15181 11.4346 6.27999 11.2784 6.44443 11.1685C6.60888 11.0586 6.80222 11 7 11C7.2651 11.0004 7.51922 11.1059 7.70667 11.2933C7.89412 11.4808 7.99961 11.7349 8 12ZM12 13C11.8022 13 11.6089 12.9414 11.4444 12.8315C11.28 12.7216 11.1518 12.5654 11.0761 12.3827C11.0004 12.2 10.9806 11.9989 11.0192 11.8049C11.0578 11.6109 11.153 11.4327 11.2929 11.2929C11.4328 11.153 11.6109 11.0578 11.8049 11.0192C11.9989 10.9806 12.2 11.0004 12.3827 11.0761C12.5654 11.1518 12.7216 11.28 12.8315 11.4444C12.9414 11.6089 13 11.8022 13 12C12.9997 12.2651 12.8943 12.5193 12.7068 12.7068C12.5193 12.8943 12.2651 12.9997 12 13Z" fill="#8588A3" />
                    </svg>
                    <select
                      className="px-5 w-36 bg-gray1 dark:bg-gray-800 text-sm text-gray2"
                      id="breed"
                      value={breed}
                      onChange={e => setBreed(e.target.value)}
                      onBlur={e => setBreed(e.target.value)}
                    >
                      <option />
                      {breeds.map(breed => (
                        <option value={breed} key={breed}>
                          {breed}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit" className="bg-appblue w-20 h-16 rounded-full flex justify-center items-center">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2647 20.53C4.57963 20.53 0 15.9502 0 10.265C0 4.57977 4.57963 0 10.2647 0C15.9497 0 20.5294 4.57977 20.5294 10.265C20.5294 15.9502 15.9497 20.53 10.2647 20.53ZM10.2647 1.57923C5.44818 1.57923 1.57918 5.44835 1.57918 10.265C1.57918 15.0817 5.44818 18.9508 10.2647 18.9508C15.0812 18.9508 18.9502 15.0817 18.9502 10.265C18.9502 5.44835 15.0812 1.57923 10.2647 1.57923Z" fill="white" />
                    <path d="M17.9095 16.7927L25 23.8835L23.8835 25L16.793 17.9092L17.9095 16.7927Z" fill="white" />
                  </svg>
                </button>
              </div>
              <p className="text-lg pt-6 text-gray3">You may be looking for</p>
              <div className="py-5 flex items-center space-x-3">
                <button type="button" className="bg-appblue bg-opacity-5 text-appblue p-3 rounded-lg font-medium flex space-x-2 items-center hover:bg-opacity-10">
                  <span>Dogs</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" fill="#0D75FF" />
                    <path d="M4.64598 4.64598C4.69242 4.59941 4.7476 4.56247 4.80834 4.53727C4.86909 4.51206 4.93421 4.49908 4.99998 4.49908C5.06575 4.49908 5.13087 4.51206 5.19161 4.53727C5.25236 4.56247 5.30753 4.59941 5.35398 4.64598L7.99998 7.29298L10.646 4.64598C10.6925 4.59949 10.7477 4.56261 10.8084 4.53745C10.8691 4.5123 10.9342 4.49935 11 4.49935C11.0657 4.49935 11.1308 4.5123 11.1916 4.53745C11.2523 4.56261 11.3075 4.59949 11.354 4.64598C11.4005 4.69247 11.4373 4.74766 11.4625 4.80839C11.4877 4.86913 11.5006 4.93423 11.5006 4.99998C11.5006 5.06572 11.4877 5.13082 11.4625 5.19156C11.4373 5.2523 11.4005 5.30749 11.354 5.35398L8.70698 7.99998L11.354 10.646C11.4005 10.6925 11.4373 10.7477 11.4625 10.8084C11.4877 10.8691 11.5006 10.9342 11.5006 11C11.5006 11.0657 11.4877 11.1308 11.4625 11.1916C11.4373 11.2523 11.4005 11.3075 11.354 11.354C11.3075 11.4005 11.2523 11.4373 11.1916 11.4625C11.1308 11.4877 11.0657 11.5006 11 11.5006C10.9342 11.5006 10.8691 11.4877 10.8084 11.4625C10.7477 11.4373 10.6925 11.4005 10.646 11.354L7.99998 8.70698L5.35398 11.354C5.30749 11.4005 5.2523 11.4373 5.19156 11.4625C5.13082 11.4877 5.06572 11.5006 4.99998 11.5006C4.93423 11.5006 4.86913 11.4877 4.80839 11.4625C4.74766 11.4373 4.69247 11.4005 4.64598 11.354C4.59949 11.3075 4.56261 11.2523 4.53745 11.1916C4.5123 11.1308 4.49935 11.0657 4.49935 11C4.49935 10.9342 4.5123 10.8691 4.53745 10.8084C4.56261 10.7477 4.59949 10.6925 4.64598 10.646L7.29298 7.99998L4.64598 5.35398C4.59941 5.30753 4.56247 5.25236 4.53727 5.19161C4.51206 5.13087 4.49908 5.06575 4.49908 4.99998C4.49908 4.93421 4.51206 4.86909 4.53727 4.80834C4.56247 4.7476 4.59941 4.69242 4.64598 4.64598Z" fill="#0D75FF" />
                  </svg>
                </button>
                <button type="button" className="bg-appblue bg-opacity-5 text-appblue p-3 rounded-lg font-medium flex space-x-2 items-center hover:bg-opacity-10">
                  <span>Cats</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" fill="#0D75FF" />
                    <path d="M4.64598 4.64598C4.69242 4.59941 4.7476 4.56247 4.80834 4.53727C4.86909 4.51206 4.93421 4.49908 4.99998 4.49908C5.06575 4.49908 5.13087 4.51206 5.19161 4.53727C5.25236 4.56247 5.30753 4.59941 5.35398 4.64598L7.99998 7.29298L10.646 4.64598C10.6925 4.59949 10.7477 4.56261 10.8084 4.53745C10.8691 4.5123 10.9342 4.49935 11 4.49935C11.0657 4.49935 11.1308 4.5123 11.1916 4.53745C11.2523 4.56261 11.3075 4.59949 11.354 4.64598C11.4005 4.69247 11.4373 4.74766 11.4625 4.80839C11.4877 4.86913 11.5006 4.93423 11.5006 4.99998C11.5006 5.06572 11.4877 5.13082 11.4625 5.19156C11.4373 5.2523 11.4005 5.30749 11.354 5.35398L8.70698 7.99998L11.354 10.646C11.4005 10.6925 11.4373 10.7477 11.4625 10.8084C11.4877 10.8691 11.5006 10.9342 11.5006 11C11.5006 11.0657 11.4877 11.1308 11.4625 11.1916C11.4373 11.2523 11.4005 11.3075 11.354 11.354C11.3075 11.4005 11.2523 11.4373 11.1916 11.4625C11.1308 11.4877 11.0657 11.5006 11 11.5006C10.9342 11.5006 10.8691 11.4877 10.8084 11.4625C10.7477 11.4373 10.6925 11.4005 10.646 11.354L7.99998 8.70698L5.35398 11.354C5.30749 11.4005 5.2523 11.4373 5.19156 11.4625C5.13082 11.4877 5.06572 11.5006 4.99998 11.5006C4.93423 11.5006 4.86913 11.4877 4.80839 11.4625C4.74766 11.4373 4.69247 11.4005 4.64598 11.354C4.59949 11.3075 4.56261 11.2523 4.53745 11.1916C4.5123 11.1308 4.49935 11.0657 4.49935 11C4.49935 10.9342 4.5123 10.8691 4.53745 10.8084C4.56261 10.7477 4.59949 10.6925 4.64598 10.646L7.29298 7.99998L4.64598 5.35398C4.59941 5.30753 4.56247 5.25236 4.53727 5.19161C4.51206 5.13087 4.49908 5.06575 4.49908 4.99998C4.49908 4.93421 4.51206 4.86909 4.53727 4.80834C4.56247 4.7476 4.59941 4.69242 4.64598 4.64598Z" fill="#0D75FF" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div>
            <div className="flex -space-x-1">
              <img
                className="h-215px w-227px object-cover rounded-tl-full"
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Cat"
              />
              <img
                className="h-215px w-227px object-cover"
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Dog"
              />
            </div>
            <div className="flex -space-x-1">
              <img
                className="h-215px w-227px object-cover"
                src="https://images.unsplash.com/photo-1548439739-0cf616cef1cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Dog"
              />
              <img
                className="h-215px w-227px object-cover rounded-br-full"
                src="https://images.unsplash.com/photo-1597926661974-69a26ffa0f08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJpcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Bird"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-16 px-5">
        <SearchResults pets={pets} />
      </div>
      <div className="md:px-16 px-5 md:py-20">
        <h1 className="text-3xl text-gray7 font-medium">Browse Though Pet Types</h1>
        <div className="md:flex space-x-3 pt-5">
          <button
            type="button"
            className={`bg-graywhite text-menugray w-118px h-108px border-2 border-transparent rounded-xl flex justify-center items-center ${setActive === 'Dog' && 'active border-2 border-blue-200'}`}
            onClick={toggleTab}
            id="Dog"
            data-value="Dog"
          >
            <span className="block">
              <img src={Dog} alt="Dogs" />
              <span className="block text-lg">Dog</span>
            </span>
          </button>
          <button
            type="button"
            className={`bg-graywhite text-menugray w-118px h-108px rounded-xl flex justify-center items-center ${setActive === 'Cat' && 'active border-2 border-blue-200'}`}
            onClick={toggleTab}
            id="Cat"
            data-value="Cat"
          >
            <span className="block">
              <img src={Cat} alt="Cat" />
              <span className="block text-lg">Cat</span>
            </span>
          </button>
          <button
            type="button"
            className={`bg-graywhite text-menugray w-118px h-108px rounded-xl flex justify-center items-center ${setActive === 'Bird' && 'active border-2 border-blue-200'}`}
            onClick={toggleTab}
            id="Bird"
            data-value="Bird"
          >
            <span className="block">
              <img src={Bird} alt="Bird" />
              <span className="block text-lg">Bird</span>
            </span>
          </button>
          <button
            type="button"
            className={`bg-graywhite text-menugray w-118px h-108px rounded-xl flex justify-center items-center ${setActive === 'Rabbit' && 'active border-2 border-blue-200'}`}
            onClick={toggleTab}
            id="Rabbit"
            data-value="Rabbit"
          >
            <span className="block">
              <img src={Rabbit} alt="Rabbit" />
              <span className="block text-lg">Rabbit</span>
            </span>
          </button>
          <button
            type="button"
            className={`bg-graywhite text-menugray w-118px h-108px rounded-xl flex justify-center items-center ${setActive === 'Reptile' && 'active border-2 border-blue-200'}`}
            onClick={toggleTab}
            id="Reptile"
            data-value="Reptile"
          >
            <span className="block">
              <img src={Reptile} alt="Reptile" />
              <span className="block text-lg">Reptile</span>
            </span>
          </button>
        </div>
        <div>
          <h1 className="text-4xl font-semibold md:pt-16 text-gray3 dark:text-gray-300">{setActive + 's'}</h1>
          {loadingFilteredPets ? (<PetsLoader />) : null}
          {setActive === 'Dog' &&
            (
              <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
                {filteredPets?.map(filteredPet => {
                  return <Pet
                    key={filteredPet.id}
                    name={filteredPet.name}
                    image={filteredPet.images[0]}
                    location={filteredPet.location}
                    breed={filteredPet.breed}
                    city={filteredPet.city}
                    state={filteredPet.state}
                    animal={filteredPet.animal}
                    id={filteredPet.id}
                  />
                })}
              </div>
            )}
          {setActive === 'Cat' &&
            (
              <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
                {filteredPets?.map(filteredPet => {
                  return <Pet
                    key={filteredPet.id}
                    name={filteredPet.name}
                    image={filteredPet.images[0]}
                    location={filteredPet.location}
                    breed={filteredPet.breed}
                    city={filteredPet.city}
                    state={filteredPet.state}
                    animal={filteredPet.animal}
                    id={filteredPet.id}
                  />
                })}
              </div>
            )}
          {setActive === 'Rabbit' &&
            (
              <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
                {filteredPets?.map(filteredPet => {
                  return <Pet
                    key={filteredPet.id}
                    name={filteredPet.name}
                    image={filteredPet.images[0]}
                    location={filteredPet.location}
                    breed={filteredPet.breed}
                    city={filteredPet.city}
                    state={filteredPet.state}
                    animal={filteredPet.animal}
                    id={filteredPet.id}
                  />
                })}
              </div>
            )}
          {setActive === 'Bird' &&
            (
              <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
                {filteredPets?.map(filteredPet => {
                  return <Pet
                    key={filteredPet.id}
                    name={filteredPet.name}
                    image={filteredPet.images[0]}
                    location={filteredPet.location}
                    breed={filteredPet.breed}
                    city={filteredPet.city}
                    state={filteredPet.state}
                    animal={filteredPet.animal}
                    id={filteredPet.id}
                  />
                })}
              </div>
            )}
          {setActive === 'Reptile' &&
            (
              <div className="md:grid grid-cols-3 gap-10 w-full md:space-y-0 space-y-4 mt-5">
                {filteredPets?.map(filteredPet => {
                  return <Pet
                    key={filteredPet.id}
                    name={filteredPet.name}
                    image={filteredPet.images[0]}
                    location={filteredPet.location}
                    breed={filteredPet.breed}
                    city={filteredPet.city}
                    state={filteredPet.state}
                    animal={filteredPet.animal}
                    id={filteredPet.id}
                  />
                })}
              </div>
            )}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home;