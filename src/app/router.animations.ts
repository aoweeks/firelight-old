import { trigger, query, group, style, animate, transition, animateChild } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomeScreen => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-in', style({ left: '-100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-in', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* => HomeScreen', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

// import {trigger, state, animate, style, transition} from '@angular/animations';

// export function routerTransition() : any {
//   return slideToLeft();
// }

// function slideToLeft() {

//   return trigger('routerTransition', [
//     state('void', style({position:'fixed', width:'100%'}) ),
//     state('*', style({position:'fixed', width:'100%'}) ),
//     transition(':enter', [
//       style({transform: 'translateX(100%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
//     ]),
//     transition(':leave', [
//       style({transform: 'translateX(0%)'}),
//       animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
//     ])
//   ]);
// }