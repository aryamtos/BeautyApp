import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import  Login from './pages/Login';
import  list from './pages/list';
import  Book from './pages/Book';
import  board from './pages/board';

const Routes = createAppContainer(
    createSwitchNavigator({ 

        Login,
        list,
        Book,
        board
    })
);

export default Routes;