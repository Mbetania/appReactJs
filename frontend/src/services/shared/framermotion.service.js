export const welcomeImgAnimation = {
    initial:{
        opacity:0,
        translateY:'-30vh'
    },
    animate:{
        opacity:0.5,
        translateY:0
    },
    show:{
        scaleX:1,
    },
    transition:{
        duration:4.5,
        delay:0.5,
        opacity:{ease:'linear'},
        layout:{duration: 0.3}
    }, 
    // hide:{
    //     scaleX:2,
    // },
}

export const welcomeMotion={
    initial: {
        opacity:0,
        translateY:'-50vh'
    },
    animate:{
        opacity:1,
        translateY:0
    },
    transition:{
        duration:1.2, 
        delay:0.8
    }
}
export const welcomeMotionh3={
    initial:{
        opacity:0,
        translateX: '-20vh'
    },
    animate:{
        opacity:1,
        translateX:0
    },
    transition:{
        duration:1,
        delay:0.5
    }
}
