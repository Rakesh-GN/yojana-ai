"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Briefcase,
  IndianRupee,
  Search,
} from "lucide-react";

import RecommendationCard from "../cards/RecommendationCard";
import Loading from "../ui/Loading";


export default function AssistantForm() {


  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    occupation: "",
    income: "",
    category: "",
    need: "",
  });


  const [recommendations,setRecommendations] = useState<any[]>([]);
const [loading,setLoading] = useState(false);
const [error,setError] = useState("");


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };




  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

   setError("");

const requiredFields = [
  "name",
  "age",
  "gender",
  "state",
  "occupation",
  "income",
  "category",
  "need",
];


const missingField = requiredFields.some(
  (field)=>!formData[field as keyof typeof formData]
);


if(missingField){

  setError(
    "Please complete all profile details before searching for schemes."
  );

  return;

}

    try {

      setLoading(true);


      const response = await fetch(
        "http://localhost:8000/schemes/recommend",
        {
          method: "POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            ...formData,
            age:Number(formData.age),
            income:Number(formData.income),
          }),
        }
      );


      const data = await response.json();


// simulate AI processing time
await new Promise(
  (resolve)=>setTimeout(resolve,1500)
);


setRecommendations(
  data.recommendations || []
);


    }
    catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };





  return (

    <div className="space-y-10">

<form
  onSubmit={handleSubmit}
  className="
    rounded-3xl
    bg-white
    border
    border-slate-200
    shadow-sm
    p-6
    md:p-10
    space-y-10
  "
>

{
  error && (

    <div
      className="
      rounded-xl
      border
      border-red-200
      bg-red-50
      px-5
      py-3
      text-sm
      font-medium
      text-red-700
      "
    >
      {error}
    </div>

  )
}


{/* Personal Information */}

<section></section>
      




        {/* Personal Information */}

        <section>


          <h2
            className="
            text-xl
            font-bold
            text-slate-900
            mb-6
            "
          >
            Personal Information
          </h2>



          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            "
          >


            <InputField
              icon={<User size={18}/>}
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />



            <InputField
              label="Age"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
            />



            <SelectField
              icon={<User size={18}/>}
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={[
                "Male",
                "Female",
                "Other"
              ]}
            />



            <SelectField
              icon={<MapPin size={18}/>}
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              options={[
                "Karnataka",
                "Tamil Nadu",
                "Kerala",
                "Maharashtra"
              ]}
            />



          </div>


        </section>






        {/* Professional Information */}


        <section>


          <h2
            className="
            text-xl
            font-bold
            text-slate-900
            mb-6
            "
          >
            Professional Information
          </h2>



          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            ">


            <SelectField
  icon={<Briefcase size={18}/>}
  label="Occupation"
  name="occupation"
  value={formData.occupation}
  onChange={handleChange}
  options={[
    "Student",
    "Farmer",
    "Employee",
    "Business Owner",
    "Self Employed",
    "Unemployed",
    "Other"
  ]}
/>


            <InputField
              icon={<IndianRupee size={18}/>}
              label="Annual Income"
              name="income"
              placeholder="Enter annual income"
              value={formData.income}
              onChange={handleChange}
            />



            <SelectField
              label="Social Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={[
                "General",
                "OBC",
                "SC",
                "ST"
              ]}
            />



            <SelectField
              label="Need Assistance In"
              name="need"
              value={formData.need}
              onChange={handleChange}
              options={[
                "Education",
                "Healthcare",
                "Agriculture",
                "Business"
              ]}
            />



          </div>


        </section>





        <button
          type="submit"
          className="
          w-full
          md:w-auto
          mx-auto
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-blue-600
          px-10
          py-4
          text-white
          font-semibold
          shadow-md
          hover:bg-blue-700
          transition
          "
        >

          <Search size={20}/>

          Find Eligible Schemes

        </button>



      </form>





      {
        loading &&
        <Loading/>
      }




      {
        recommendations.length > 0 && (

          <div className="space-y-5">

            <h2
              className="
              text-2xl
              font-bold
              text-slate-900
              "
            >
              Recommended Schemes
            </h2>


            {
              recommendations.map(
                (scheme,index)=>(
                  <RecommendationCard
                    key={index}
                    scheme={scheme}
                  />
                )
              )
            }


          </div>

        )
      }



    </div>

  );
}






function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  icon,
}:any){


return (

<div className="space-y-2">


<label className="font-medium text-slate-700">
{label}
</label>


<div
className="
flex
items-center
gap-3
rounded-xl
border
border-slate-300
px-4
h-12
focus-within:ring-2
focus-within:ring-blue-500
"
>

{icon}


<input
className="
w-full
outline-none
text-slate-800
"
name={name}
placeholder={placeholder}
value={value}
onChange={onChange}
/>


</div>


</div>

)

}







function SelectField({
label,
name,
value,
onChange,
options,
icon,
}:any){


return (

<div className="space-y-2">


<label className="font-medium text-slate-700">
{label}
</label>


<div
className="
flex
items-center
gap-3
rounded-xl
border
border-slate-300
px-4
h-12
"
>

{icon}


<select
className="
w-full
outline-none
bg-transparent
text-slate-800
"
name={name}
value={value}
onChange={onChange}
>


<option value="">
Select {label}
</option>


{
options.map(
(option:string)=>(
<option
key={option}
value={option}
>
{option}
</option>
)
)
}


</select>


</div>


</div>

)

}