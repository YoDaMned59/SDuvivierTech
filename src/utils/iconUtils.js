import * as FaIcons from 'react-icons/fa';
import iconsConfig from '../data/icons.json';

// Crée un mapping des icônes en utilisant la configuration
const iconMap = Object.keys(iconsConfig.icons).reduce((acc, iconName) => {
  acc[iconName] = FaIcons[iconName];
  return acc;
}, {});

// Fonction pour obtenir une icône par son nom
export const getIcon = (iconName) => {
  const Icon = iconMap[iconName];
  return Icon ? <Icon /> : null;
};

export default iconMap; 