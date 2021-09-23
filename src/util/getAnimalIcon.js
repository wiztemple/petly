import Dog from '../assets/dog.svg'
import Cat from '../assets/cat.svg';
import Bird from '../assets/bird.svg';
import Rabbit from '../assets/rabbit.svg';
import Reptile from '../assets/reptile.svg';

const getAnimalIcon = (animal) => {
  if (animal === 'dog') {
    return Dog;
  }
  if (animal === 'cat') {
    return Cat;
  }
  if (animal === 'bird') {
    return Bird;
  }
  if (animal === 'reptile') {
    return Reptile;
  }
  if (animal === 'rabbit') {
    return Rabbit;
  }
  return null;
}

export default getAnimalIcon;
