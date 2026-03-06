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

        <div className="backdrop-blur-sm bg-card/50 p-12 rounded-3xl border border-border/30 text-center">
          <UserCheck className="w-16 h-16 text-primary mx-auto mb-6" />

          <p className="text-xl leading-relaxed text-foreground/90 font-medium">
            {t("registration.info")}
          </p>
<div className="text-left text-lg text-foreground/90 leading-relaxed mt-8 space-y-4">
<p><strong>100 euros</strong> – docentes<br/>
<strong>50 euros</strong> – estudantes (solicita-se o envio de comprovativo)<br/>
Gratuita para membros do CLLC, U.Aveiro e do CEI, ISCAP-P.PORTO</p>

<p><strong>Pagamento apenas por transferência bancária:</strong></p>

<p>
Nome: Universidade de Aveiro<br/>
NIF: 501 461 108<br/>
Número da conta: 0836001785230<br/>
NIB: 0035 0836 00001785230 70 (para transferências dentro de Portugal)<br/>
IBAN: PT50 0035 0836 00001785230 70<br/>
BIC SWIFT: CGDIPTPL
</p>

<p>
Envie o comprovativo da transferência ao e-mail:<br/>
<strong>dlc-cllc@ua.pt</strong>
</p>

<p><strong>Para a elaboração do recibo, envie os seguintes dados:</strong></p>

<p>
<strong>1. Recibo em seu nome:</strong><br/>
Nome completo<br/>
Endereço completo<br/>
NIF<br/>
Contacto e-mail<br/>
Contacto telefónico
</p>

<p>
<strong>2. Recibo em nome de instituição:</strong><br/>
Nome completo da entidade / instituição<br/>
Endereço completo<br/>
NIF da instituição<br/>
Nome completo do participante na Conferência
</p>

<p><strong>Preencha o formulário abaixo para a criação do certificado.</strong></p>
</div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <iframe
              
src="https://docs.google.com/forms/d/e/1FAIpQLSfiCagJ6ERzeAlhBaTNbh_zf8NfL4uYwM9fwujLMtNvaO2aEw/viewform?embedded=true"
              width="100%"
              height="1200"
              style={{ border: "none", maxWidth: "800px" }}
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
