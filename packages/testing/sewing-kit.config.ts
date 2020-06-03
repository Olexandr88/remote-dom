import {createPackage} from '@sewing-kit/config';
import {defaultProjectPlugin} from '../../config/sewing-kit';

export default createPackage((pkg) => {
  pkg.entry({root: './src/index'});
  pkg.entry({name: 'matchers', root: './src/matchers/index'});
  pkg.use(defaultProjectPlugin());
});
