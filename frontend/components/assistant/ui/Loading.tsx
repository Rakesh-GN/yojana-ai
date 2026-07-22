export default function Loading() {

  return (

    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      rounded-3xl
      border
      border-blue-100
      bg-white
      p-8
      sm:p-10
      shadow-sm
      "
    >


      {/* Animation */}

      <div
        className="
        relative
        flex
        h-16
        w-16
        items-center
        justify-center
        "
      >

        <div
          className="
          absolute
          h-full
          w-full
          animate-ping
          rounded-full
          bg-blue-100
          "
        />


        <div
          className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          font-bold
          "
        >

          AI

        </div>


      </div>





      <h3
        className="
        mt-6
        text-xl
        font-bold
        text-slate-900
        text-center
        "
      >
        Finding the best schemes for you
      </h3>



      <p
        className="
        mt-3
        max-w-md
        text-center
        text-slate-500
        "
      >
        Our AI is analyzing your profile and matching
        you with eligible government schemes.
      </p>




      <div
        className="
        mt-6
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-blue-600
        "
      >

        <span
          className="
          h-2
          w-2
          rounded-full
          bg-blue-600
          animate-bounce
          "
        />

        Checking eligibility

      </div>



    </div>

  );

}