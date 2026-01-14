import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow-orange">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Build AI for <span className="text-gradient-orange">India's Future?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of innovators in creating solutions that will transform education, skilling, and leadership
              in India.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-orange text-lg px-10"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-6">Limited slots. Shortlisting based on submissions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
