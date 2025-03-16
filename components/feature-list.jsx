import { Cog, Wrench, ThumbsUp, Pencil } from "lucide-react"

export default function FeatureList() {
  const features = [
    {
      icon: <Cog className="h-6 w-6 text-blue-400" />,
      title: "Adaptable performance",
      description: "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-400" />,
      title: "Built to last",
      description: "Experience unmatched durability that goes above and beyond with lasting investment.",
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-blue-400" />,
      title: "Great user experience",
      description: "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    },
    {
      icon: <Pencil className="h-6 w-6 text-blue-400" />,
      title: "Innovative functionality",
      description:
        "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    },
  ]

  return (
    <div className="space-y-10">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0 mt-1">{feature.icon}</div>
          <div>
            <h3 className="text-xl font-medium text-white">{feature.title}</h3>
            <p className="mt-1 text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

