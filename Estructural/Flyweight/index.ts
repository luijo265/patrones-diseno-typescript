import { playCache } from "./PlayList/PlayCacheScript";
import { PlayListService } from "./PlayList/PlayListService";

const viejas = new PlayListService("viejas");
const clasicas = new PlayListService("clasicas");

console.log('playCache', playCache);
console.log('\nagregamos chayanne vals');
viejas.addCancion('vals chayanne');
clasicas.addCancion('vals chayanne');
console.log('\nplayCache', playCache);
console.log('agregamos trhiller michael');
viejas.addCancion('trhiller michael');

console.log('\nplayCache', playCache);
console.log('\nviejas', viejas);
console.log('\nclasicas', clasicas);