/**
 * Design: Surrealismo Onírico Académico
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { UserCheck } from "lucide-react";

export default function Registration() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 text-center">
          {t("registration.title")}
        </h1>

        <div className="backdrop-blur-sm bg-card/50 p-8 md:p-12 rounded-3xl border border-border/30">
          <UserCheck className="w-16 h-16 text-primary mx-auto mb-8" />

          <div className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="text-xl font-bold text-foreground mb-4">Key Information</h2>
            <ul className="space-y-2 text-foreground/90">
              <li><strong>Conference format:</strong> In-person conference</li>
              <li><strong>Extended deadline for proposal submission:</strong> May 10, 2026</li>
              <li><strong>Payment deadline:</strong> June 12, 2026</li>
            </ul>
          </div>

          <div className="text-left text-base text-foreground/90 leading-relaxed space-y-10">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/30">Registration Fees</h2>
              <ul className="space-y-2">
                <li><strong>EUR 100</strong> - Faculty</li>
                <li><strong>EUR 50</strong> - Students <span className="text-foreground/70">(proof of student status required)</span></li>
                <li><strong>Free</strong> - Members of CLLC, University of Aveiro, and CEI, ISCAP-P.PORTO</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/30">Payment Method</h2>
              <p className="mb-4">Payment must be made <strong>exclusively via bank transfer</strong>.</p>
              <div className="p-5 bg-muted/30 rounded-xl space-y-1.5 text-sm font-mono">
                <p><span className="text-foreground/60">Name:</span> <strong>University of Aveiro</strong></p>
                <p><span className="text-foreground/60">Tax ID (NIF):</span> 501 461 108</p>
                <p><span className="text-foreground/60">Account number:</span> 0836001785230</p>
                <p><span className="text-foreground/60">NIB:</span> 0035 0836 00001785230 70 (for transfers within Portugal)</p>
                <p><span className="text-foreground/60">IBAN:</span> PT50 0035 0836 00001785230 70</p>
                <p><span className="text-foreground/60">BIC/SWIFT:</span> CGDIPTPL</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/30">Proof of Payment</h2>
              <p>Please send proof of bank transfer to: <a href="mailto:dlc-cllc@ua.pt" className="font-semibold underline hover:text-primary transition-colors">dlc-cllc@ua.pt</a></p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/30">Receipt Information</h2>
              <p className="mb-5">To issue a receipt, participants must provide the following information:</p>
              <div className="space-y-4">
                <div className="p-5 bg-muted/20 rounded-xl">
                  <p className="font-semibold mb-3">1. Receipt in the participant name:</p>
                  <ul className="space-y-1 text-foreground/80 ml-4 list-disc list-inside">
                    <li>Full name</li>
                    <li>Full address</li>
                    <li>Tax ID (NIF)</li>
                    <li>Email contact</li>
                    <li>Phone contact</li>
                  </ul>
                </div>
                <div className="p-5 bg-muted/20 rounded-xl">
                  <p className="font-semibold mb-3">2. Receipt in the name of an institution:</p>
                  <ul className="space-y-1 text-foreground/80 ml-4 list-disc list-inside">
                    <li>Full name of the institution</li>
                    <li>Full address</li>
                    <li>Institution Tax ID (NIF)</li>
                    <li>Full name of the conference participant</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border/30">Certificate</h2>
              <p>Participants must fill out the form below for certificate issuance.</p>
            </div>

          </div>

          <div className="w-full flex justify-center mt-12">
            <div className="w-full max-w-3xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfiCagJ6ERzeAlhBaTNbh_zf8NfL4uYwM9fwujLMtNvaO2aEw/viewform?embedded=true"
                className="w-full rounded-xl"
                height="1400"
                style={{ border: "none" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
