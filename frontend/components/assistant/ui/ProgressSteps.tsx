const steps = [
  {
    number: "01",
    title: "Personal Details",
    description: "Basic profile information",
  },
  {
    number: "02",
    title: "Preferences",
    description: "Your assistance needs",
  },
  {
    number: "03",
    title: "AI Matching",
    description: "Finding suitable schemes",
  },
  {
    number: "04",
    title: "Results",
    description: "Personalized recommendations",
  },
];


export default function ProgressSteps() {

  return (

    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      sm:p-8
      shadow-sm
      "
    >


      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-8
        "
      >


        {
          steps.map((step,index)=>(

            <div
              key={step.number}
              className="
              relative
              flex
              items-start
              gap-4
              md:flex-col
              md:items-center
              md:text-center
              "
            >


              {/* Step Circle */}

              <div
                className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                font-bold
                shadow-md
                ring-4
                ring-blue-50
                "
              >
                {step.number}
              </div>



              {/* Text */}

              <div
                className="
                space-y-1
                "
              >

                <h3
                  className="
                  font-semibold
                  text-slate-900
                  "
                >
                  {step.title}
                </h3>


                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  {step.description}
                </p>


              </div>





              {/* Connector */}

              {
                index !== steps.length - 1 && (

                  <div
                    className="
                    hidden
                    md:block
                    absolute
                    top-6
                    left-[70%]
                    w-[60%]
                    h-[2px]
                    bg-blue-100
                    "
                  />

                )
              }



            </div>

          ))
        }


      </div>


    </div>

  );

}