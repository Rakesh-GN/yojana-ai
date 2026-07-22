interface Scheme {
  name: string;
  category: string;
  benefit: string;
  documents: string[];
  match_score: number;
  reasons: string[];
}


export default function RecommendationCard({
  scheme,
}:{
  scheme:Scheme;
}) {


return (

<div
className="
rounded-3xl
border
border-slate-200
bg-white
p-6
sm:p-8
md:p-10
shadow-sm
hover:shadow-lg
transition
duration-300
space-y-8
"
>


{/* Header */}

<div
className="
space-y-4
"
>


<p
className="
text-sm
font-semibold
uppercase
tracking-wide
text-blue-600
"
>
{scheme.category}
</p>



<div
className="
flex
flex-col
gap-4
"
>


<h3
className="
text-2xl
md:text-3xl
font-bold
leading-tight
text-slate-900
"
>
{scheme.name}
</h3>



<span
className="
w-fit
rounded-full
bg-green-100
px-4
py-2
text-sm
font-bold
text-green-700
"
>
🟢 {scheme.match_score}% Match
</span>



</div>


</div>






{/* Benefit */}

<div className="mt-5">

  <h4 className="font-semibold text-slate-800">
    Why this scheme?
  </h4>

  <ul className="mt-2 space-y-2 text-sm text-slate-600">

    {
      scheme.reasons.map((reason, index) => (
        <li key={index}>
          ✅ {reason}
        </li>
      ))
    }

  </ul>

</div>
<div
className="
rounded-2xl
bg-slate-50
p-5
md:p-6
"
>


<h4
className="
text-lg
font-semibold
text-slate-900
"
>
Benefits
</h4>


<p
className="
mt-3
leading-relaxed
text-slate-600
"
>
{scheme.benefit}
</p>


</div>






{/* Documents */}


<div
className="
space-y-4
"
>


<h4
className="
text-lg
font-semibold
text-slate-900
"
>
Required Documents
</h4>



<div
className="
flex
flex-wrap
gap-3
"
>

{
scheme.documents.map(
(doc,index)=>(

<span
key={index}
className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-medium
text-blue-700
"
>
{doc}
</span>

)
)

}


</div>


</div>






{/* Button */}


<button
className="
mt-4
w-full
rounded-xl
bg-blue-600
py-3.5
font-semibold
text-white
shadow-sm
hover:bg-blue-700
transition
"
>

View Scheme Details

</button>



</div>


);

}