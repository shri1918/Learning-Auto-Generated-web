import React from 'react';
import Div from './Div';
import c from '../image/c.jpg';
import java from '../image/java.png';
import javascript from '../image/javascript.png';
import python from '../image/python.png';

function Basic() {

    let deta=[{
        title:'C Language',
        discrpation:'All About C',
        photo:c,
        page:'/c-laguage',w:'25vw',h:'28vh'
        
    },
    {
        title:'Java',
        discrpation:'All About Java, ',
        photo:java,
        page:'/java',w:'25vw',h:'28vh'
    },
    {
        title:'Javascript',
        discrpation:'All About Javascript ',
        photo:javascript, 
        page:'/javascript',w:'25vw',h:'28vh'
    },
    {
        title:'Python',
        discrpation:'All About Python',
        photo:python,
        page:'/python',w:'25vw',h:'28vh'
    }
    ]
    return (  
        <div style={{marginLeft:'10vw',width:'100%',height:'auto'}}>
            {
                deta.map(div=><Div
                    title={div.title}
                    discrpation={div.discrpation}
                    photo={div.photo}
                    page={div.page}
                    w={div.w}
                    h={div.h}></Div>
                    )
            }
        </div>
    );
}

export default Basic;