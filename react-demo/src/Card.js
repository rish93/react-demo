function Card( props) { //either props.username or {username} we can use

    // als o can give {username, btnText="readme"} //as default value at top for readabilittyy
    console.log(props) //get props vakue

    // console.log(props.btntext)
    return (
    
            <>
            
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
              <div className="pt-6 space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption c>
                  <div>
                  {props.username}
                  </div>
                  <div>
                    {props.btnText || 'visit me'} 
                      {/* if no vaklue then other text */}
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </figure>
            
</>
)
}

export default Card;