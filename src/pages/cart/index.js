import './index.scss';
import toggleMenu from '../../js/menu.js';
import { shoppingCart } from '../../js/shopping-cart';

shoppingCart.createLocalStorageObject();

toggleMenu();
