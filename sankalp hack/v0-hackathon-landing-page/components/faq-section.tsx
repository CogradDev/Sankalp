import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "College students, startup teams, and individual developers are welcome. Teams of 1-4 members are recommended. All team members must be registered at the time of registration.",
  },
  {
    question: "What is the team size?",
    answer: "Teams can have 1-4 members. Solo participants are welcome, but teams are recommended for collaboration.",
  },
  {
    question: "Can I change my category later?",
    answer:
      "No. Category selection is locked during Round 1 (Idea Validation). You cannot change your challenge track after this point.",
  },
  {
    question: "Is prior AI experience required?",
    answer:
      "No. While AI knowledge is helpful, bootcamps and mentorship sessions will be provided to help all teams develop their solutions. We welcome participants from diverse backgrounds.",
  },
  {
    question: "How are winners selected?",
    answer:
      "Projects are evaluated through multiple rounds: idea validation, prototype sprint, and final selection. The Grand Finale includes live demo verification, technical defense, impact assessment, and jury deliberation. Scoring is based on problem understanding (15%), AI & technical strength (25%), impact & policy relevance (25%), UX & accessibility (15%), and ethics & trust (10%).",
  },
  {
    question: "Is offline participation mandatory?",
    answer:
      "The hackathon includes online phases (bootcamps, rounds 1-3) and an in-person Grand Finale at MNNIT Allahabad during SANKALP 2026 (March 17-19). Finalists must attend in person.",
  },
  {
    question: "What certificates will be provided?",
    answer:
      "Participants receive Participation certificates. Top performers get Merit certificates. Finalists receive Excellence certificates. Winners get Winner certificates. All certificates are digitally verifiable.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-1 bg-orange-500 rounded-full" />
            <div className="w-2 h-1 bg-gray-300 rounded-full" />
            <div className="w-6 h-1 bg-green-600 rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">Everything you need to know about the challenge</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-b-0 animate-in fade-in-50 slide-in-from-left-2 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-gray-900 font-semibold hover:text-orange-600 transition-all duration-300 hover:scale-105 data-[state=open]:text-orange-600 data-[state=open]:bg-orange-50/50 rounded px-2">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-3 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
