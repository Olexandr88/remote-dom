import type {RenderAPI} from '../types.ts';

import './elements.ts';

import {renderUsingVanillaDOM} from './examples/vanilla.ts';
import {renderUsingHTM} from './examples/htm.ts';
import {renderUsingPreact} from './examples/preact.tsx';
import {renderUsingReact} from './examples/react.tsx';
import {renderUsingSvelte} from './examples/svelte.ts';
import {renderUsingVue} from './examples/vue.ts';

const EXAMPLE_MAP = new Map<
  RenderAPI['example'],
  (root: Element, api: RenderAPI) => void
>([
  ['vanilla', renderUsingVanillaDOM],
  ['htm', renderUsingHTM],
  ['preact', renderUsingPreact],
  ['react', renderUsingReact],
  ['svelte', renderUsingSvelte],
  ['vue', renderUsingVue],
]);

export function render(root: Element, api: RenderAPI) {
  return EXAMPLE_MAP.get(api.example)?.(root, api);
}
