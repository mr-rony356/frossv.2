declare module "locomotive-scroll" {
  export interface LocomotiveScrollOptions {
    el: HTMLElement | NodeListOf<HTMLElement>;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    direction?: "vertical" | "horizontal";
    gestureDirection?: "vertical" | "horizontal";
    smoothMobile?: boolean;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getDirection?: boolean;
    getSpeed?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    scrollFromAnywhere?: boolean;
    reloadOnContextChange?: boolean;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
      gestureDirection?: "vertical" | "horizontal";
      multiplier?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
      gestureDirection?: "vertical" | "horizontal";
      multiplier?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    init(): void;
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;
    on(
      event: "call" | "scroll" | "stop" | "start" | "update",
      callback: (func: any) => void
    ): void;
  }
}
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getDirection: true,
  scrollFromAnywhere: true,
  scrollbarContainer: true,
  scrollbarThrottle: 5,
  scrollbarPosition: 'left',
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'is-scrolling',
  scrollbarDraggable: true,
  scrollbarAlwaysVisible: true,
  scrollbarHideDelay: 200,
  scrollbarThrottle: 100,
  scrollbarMinSize: 24,
  scrollbarMaxSize: 24,
  scrollbarBorderRadius: 0,
  scrollbarChillSpacing: 0,
  scrollbarChillSpacingX: 0,
  scrollbarChillSpacingY: 0,
  scrollbarChillSpacingFromEdge: 0,
  scrollbarChillSpacingFromEdgeX: 0,
  scrollbarChillSpacingFromEdgeY: 0,
  scrollbarIgnoreViewport: false,
  scrollbarIgnoreElements: '.locomotive-scroll-disable', // Exclude elements with the 'locomotive-scroll-disable' class
});
