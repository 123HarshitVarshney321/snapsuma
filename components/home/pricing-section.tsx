import Link from "next/link";
type PriceType = {
    name: string;
    price: number;
    description: string;
    items: string[];
    id: string;
    paymentLink: string;
    priceId: string;
}
const plans = [
    {
        name:'Basic',
        price:49,
        description: 'Perfect for Occasional Use',
        items: [
            '5 PDF summaries per month',
            'Email Support'
        ],
        id: 'basic',
        paymentLink: '',
        priceId: '',
    },
    {
        name:'Pro',
        price:199,
        description: 'For professionals and teams',
        items: [
            'Unlimited PDF summaries per month',
            'priority processing',
            '24/7 priority Support',
            'Markdown export',
        ],
        id: 'pro',
        paymentLink: '',
        priceId: '',
    },
];
// const PricingCard = ({ name, price, description, items, id, paymentLink }: PriceType) => {
//     return (
//         <div className="relative w-full max-w-lg">
//             <div>
//                 <p>{name}</p>
//                 <p>{description}</p>
//             </div>
//             <div>
//                 <p>{price}</p>
//             </div>
//             <div>
//                 {items.map((item, idx) =>(
//                     <li key={idx}>{item}</li>
//                 ))}
//             </div>
//             <div>
//                 <Link href={paymentLink}>Buy Now</Link>
//             </div>
//         </div>
//     )
// }
const PricingCard = ({ name, price, description, items, id, paymentLink }: PriceType) => {
    return (
      <div className="relative w-full max-w-md mx-auto p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-rose-500/30 transition-all duration-300 shadow-md hover:shadow-rose-500/20">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-rose-500">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
  
        <div className="mb-6">
          <p className="text-3xl font-bold text-gray-700">
          ₹{price}
            <span className="text-sm font-medium text-gray-400"> /month</span>
          </p>
        </div>
  
        <ul className="space-y-2 mb-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-rose-500 rounded-full inline-block" />
              {item}
            </li>
          ))}
        </ul>
  
        <div>
          <Link
            href={paymentLink}
            className="inline-block w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Buy Now
          </Link>
        </div>
      </div>
    );
  };

export default function PricingSection() {
    return (
        <section>
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex items-center justify-center w-full pb-6">
                    <h2 className="uppercase font-bold text-xl mb-8 text-rose-800">Pricing</h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">

                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan}/>
                    ))}

                </div>
            </div>

        </section>
    );
}