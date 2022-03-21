import './vendor';
import './vendor/jqueryUi_v1.13.1';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import social from './components/social';
import preloader from './components/preloader';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import fixedBlockOnMother from './modules/fixedBlockOnMother';
import progressBar from './modules/progressBar';
import slowShowText from './modules/slowShowText';
import backToTop from './modules/backToTop';
import trackNavLocation from './modules/trackNavLocation';


ieFix();
vhFix();
actualYear();
trackNavLocation.init();
preloader.init();
progressBar.init();
slowShowText.init();
scrollToAnchor.init();
backToTop.init();
social;
fixedBlockOnMother;

header.init();
lazyLoading.init();
