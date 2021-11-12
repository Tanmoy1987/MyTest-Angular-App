import { transition, trigger, animate, style, useAnimation, query, group, animation, keyframes, stagger, animateChild, state } from "@angular/animations";

export let fadeInAnimation= animation(
    animate(1000, style({ opacity: 0}))
)

export let bounceLeftAnimation= animation(
    animate('1000ms ease-in', keyframes([
        style(
            { offset: 0.2, 
              opacity: 0, 
              transform: "translateX(20px)" 
            }),
        style(
            { offset: 1, 
              opacity: 1, 
              transform: "translateX(-2000px)" 
            })
    ]))
)

export const todosAnimationTrigger = trigger('todosAnimation', [
    transition(':enter', [
      group([
        query('h1', [
          style({transform: "translateY(-20px)"}),
          animate(1000)
        ]),
        query('@todoAnimation', [
          stagger('200ms', animateChild())
        ])
      ])
    ])
  ])
  
  export const todoAnimationTrigger =trigger('todoAnimation', [
    transition(':enter', [
        style({transform: "translateX(-20px)", opacity: 1}),
        animate(1000)
    ]),
    transition(':leave', [
        style({ background: "orange"}),
        useAnimation(bounceLeftAnimation)
    ])
])

export const expandCollapseTrigger2=  trigger('expandCollapse', [
    transition(':enter', [
      style({background: 'yellow', opacity: 0}),
      animate('1000ms ease-out')
    ]),
    transition(':leave', [
      animate('1000ms ease-in', style({opacity: 0}))
      //animate('300ms', style({background: 'yellow'}))
    ])
  ])
export const expandCollapseTrigger= trigger('expandCollapse', [
   state('collapsed', style({
       height: 0,
       overflow: 'hidden',
       paddingTop: 0,
       paddingBottom: 0,
       opacity: 0
   })),
   transition(':enter', [
    style({background: 'yellow', opacity: 0}),
    animate('1000ms ease-out')
   ]),
    transition('collapsed => expanded', [
        style({ background: 'yellow'}),
        animate('1000ms ease-out')
    ]),
    transition('expanded => collapsed', [
        animate('1000ms ease-in', style({ background: 'yellow'}))
    ])
])

/*
export let bounceLeftAnimation= animation(
    animate("1000ms ease-in", style({ transform: "translateX(-2000px)" }))
)*/
/*
export const slideTrigger = trigger('slide', [
    transition(':enter', [
        style({transform: "translateX(-20px)", opacity: 1}),
        animate(1000)
    ]),
    transition(':leave', [
        //style({ transform: "translateX(10px)", background: "yellow"}),
        useAnimation(bounceLeftAnimation)
    ])
]);*/