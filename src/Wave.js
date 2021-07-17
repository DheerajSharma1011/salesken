import React from "react";
const Wave = () =>{
	return(
         <>
          <div class="flex">
                <svg width="1000" height="250">
                    <rect x="80" y="150"  width="80" height="25"/>
                    <text x="100" y="170" font-family="Verdana" font-size="15" fill="white" >Intro</text>
                    <line x1="120" y1="175" x2="120" y2="390" />
                    <rect x="200" y="130"  width="100" height="25"/>
                    <text x="220" y="150" font-family="Verdana" font-size="15" fill="white">High</text>
                    <line x1="250" y1="155" x2="250" y2="390" />
                    <rect x="400" y="100"  width="120" height="25"/>
                    <text x="430" y="120" font-family="Verdana" font-size="15" fill="white">Energetic</text>
                    <line x1="460" y1="125" x2="460" y2="390" />
                    <rect x="650" y="110"  width="100" height="25"/>
                    <text x="670" y="130" font-family="Verdana" font-size="15" fill="white">Lovely</text>
                    <line x1="700" y1="135" x2="700" y2="390" />
                    <rect x="750" y="150"  width="80" height="25"/>
                    <text x="785" y="170" font-family="Verdana" font-size="15" fill="white">End</text>
                    <line x1="800" y1="175" x2="800" y2="390" />
                </svg>
               
             
              
            </div> 
         </>
		)
}
export default Wave;