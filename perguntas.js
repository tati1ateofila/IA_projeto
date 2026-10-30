import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;

export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];