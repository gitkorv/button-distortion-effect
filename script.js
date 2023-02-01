const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
const displacement = document.querySelector('feDisplacementMap');


let verticalFrequency = 0.00001;
let horizontalFrequency = 0.00001;
let displacementScale = 30;

turbulence.setAttribute('baseFrequency', `${verticalFrequency} ${horizontalFrequency}` )
const steps = 30;
const interval = 50;

displacement.setAttribute('scale', displacementScale)

buttons.forEach(function(button){
    button.addEventListener('mouseover', function(){
        verticalFrequency = 0.00001;
        horizontalFrequency = 0.00001;
        for (i = 0; i < steps; i++){
            setTimeout(function(){
                verticalFrequency += 0.002;
                horizontalFrequency += 0.00001;

                turbulence.setAttribute('baseFrequency', `${verticalFrequency} ${horizontalFrequency}` )
            }, i * interval)
        }
        setTimeout(function(){
            verticalFrequency = 0.00001;
            horizontalFrequency = 0.00001;

            turbulence.setAttribute('baseFrequency', `${verticalFrequency} ${horizontalFrequency}` )

        }, steps * interval)
    })
})